#!/usr/bin/env node
/**
 * Optimize the site's images for slow connections.
 *
 * The site was shipping raw captures: twelve JPEGs totalling 1.18 MB, plus 251 KB
 * of brand PNGs, and one of those PNGs (logo-word) was not referenced anywhere at
 * all. On a metered or slow connection that is the whole page budget spent on
 * pictures before the copy is readable.
 *
 * What this does, for every image the site actually renders:
 *   - app captures: a WebP next to a re-encoded, resized JPEG fallback. The
 *     landscape captures are displayed at most ~1100 px wide, the marquee strips at
 *     most 288 px, so 1600 px and 857 px originals were pure waste.
 *   - brand marks: WebP versions (PNG kept for the places that need a raster PNG).
 *   - one 1200x630 social image instead of the full screenshot for link previews.
 *   - a small favicon instead of the 53 KB app icon.
 *
 * Run from the project root:  node scripts/optimize-images.mjs
 */
import { readFile, readdir, rename, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const appDir = path.join(root, "public", "images", "app");
const brandDir = path.join(root, "public", "brand");
const publicDir = path.join(root, "public");

/** The widest a landscape capture is ever displayed (before-after, 1100 px). */
const LANDSCAPE_WIDTH = 1400;
/** The marquee shows portrait strips at 288 px, so 2x is 576 px. */
const PORTRAIT_WIDTH = 640;

/** WebP quality that stays visually clean on UI screenshots. */
const WEBP_QUALITY = 78;

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function sizeOf(file) {
	try {
		return (await stat(file)).size;
	} catch {
		return 0;
	}
}

async function optimizeCapture(file) {
	const name = path.basename(file, ".jpg");
	const portrait = name.endsWith("-p");
	const targetWidth = portrait ? PORTRAIT_WIDTH : LANDSCAPE_WIDTH;

	const before = await sizeOf(file);
	// Read first, then build from the buffer: writing the same path while sharp
	// still holds a read handle fails on Windows.
	const source = await readFile(file);
	const image = sharp(source).rotate();

	const resized = image.clone().resize({ width: targetWidth, withoutEnlargement: true });

	// The JPEG stays as the universal fallback, re-encoded and resized.
	const jpegBuffer = await resized
		.clone()
		.jpeg({ quality: 80, progressive: true, mozjpeg: true })
		.toBuffer();
	const tempFile = `${file}.tmp`;
	await writeFile(tempFile, jpegBuffer);
	await rename(tempFile, file);

	// The WebP is what most current browsers download.
	const webpFile = path.join(appDir, `${name}.webp`);
	await resized
		.clone()
		.webp({ quality: WEBP_QUALITY, effort: 6 })
		.toFile(webpFile);

	// AVIF is the smallest of the three and supported by every browser released
	// since 2023, so the newest browsers get it and nothing is paid by the rest.
	const avifFile = path.join(appDir, `${name}.avif`);
	await resized
		.clone()
		.avif({ quality: 58, effort: 4 })
		.toFile(avifFile);

	const after = await sizeOf(file);
	const webpSize = await sizeOf(webpFile);
	const avifSize = await sizeOf(avifFile);
	console.log(
		`  ${name.padEnd(11)} jpg ${kb(before)} -> ${kb(after)}   webp ${kb(webpSize)}   avif ${kb(avifSize)}`,
	);
	return { before, after: Math.min(after, webpSize, avifSize) };
}

async function optimizeBrand(file) {
	const name = path.basename(file, path.extname(file));
	const before = await sizeOf(file);
	const target = path.join(brandDir, `${name}.webp`);
	await sharp(await readFile(file)).webp({ quality: 90, effort: 6 }).toFile(target);
	const after = await sizeOf(target);
	console.log(`  ${name.padEnd(15)} png ${kb(before)} -> webp ${kb(after)}`);
	return { before, after };
}

async function optimizeSocialImage() {
	const source = path.join(appDir, "app-02.jpg");
	const target = path.join(publicDir, "images", "og.jpg");
	await sharp(source)
		.resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
		.jpeg({ quality: 78, progressive: true, mozjpeg: true })
		.toFile(target);
	const size = await sizeOf(target);
	console.log(`  social preview  1200x630 jpg ${kb(size)}`);
	return size;
}

async function optimizeFavicon() {
	const source = path.join(root, "src", "app", "icon.png");
	const before = await sizeOf(source);
	const buffer = await sharp(await readFile(source))
		.resize({ width: 192, height: 192, fit: "cover" })
		.png({ compressionLevel: 9, palette: true })
		.toBuffer();
	await writeFile(source, buffer);
	const after = await sizeOf(source);
	console.log(`  favicon         ${kb(before)} -> ${kb(after)}`);
	return { before, after };
}

async function main() {
	const captures = (await readdir(appDir))
		.filter((name) => name.endsWith(".jpg"))
		.sort();
	const brands = (await readdir(brandDir))
		.filter((name) => name.endsWith(".png"))
		.sort();

	let before = 0;
	let after = 0;

	console.log("App captures:");
	for (const capture of captures) {
		const result = await optimizeCapture(path.join(appDir, capture));
		before += result.before;
		after += result.after;
	}

	console.log("Brand marks:");
	for (const brand of brands) {
		const result = await optimizeBrand(path.join(brandDir, brand));
		before += result.before;
		after += result.after;
	}

	console.log("Extras:");
	const social = await optimizeSocialImage();
	const favicon = await optimizeFavicon();
	before += favicon.before;
	after += Math.min(favicon.after, social);

	console.log(
		`\nShipped image bytes: ${kb(before)} -> ${kb(after)} ` +
			`(${100 - Math.round((after * 100) / Math.max(before, 1))}% smaller)`,
	);
}

await main();
