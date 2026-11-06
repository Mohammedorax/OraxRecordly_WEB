/**
 * Measures what a visitor actually downloads from the exported site.
 *
 * Run against scripts/serve-export.py (gzip, GitHub-Pages-style prefix):
 *
 *   node measure-page.mjs http://127.0.0.1:8123/OraxRecordly_WEB/
 *
 * It loads the landing page, scrolls through it so lazy images are requested, and
 * reports the transferred bytes per resource type plus the biggest individual
 * resources. Use it before and after an optimization to see the difference rather
 * than trusting the raw file sizes on disk.
 */
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://127.0.0.1:8123/OraxRecordly_WEB/";

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await context.newPage();

const transfers = new Map();
page.on("response", async (response) => {
	try {
		const request = response.request();
		const type = request.resourceType();
		// Bodies are already decoded by the browser; the encoded body size is what
		// crossed the wire.
		const body = await response.body().catch(() => null);
		const length = body ? body.length : 0;
		const previous = transfers.get(response.url()) ?? 0;
		transfers.set(response.url(), Math.max(previous, length, type === "document" ? length : 0));
	} catch {
		// A response that closed early cannot be measured; skip it.
	}
});

// Bytes actually transferred are reported by the browser itself.
await page.goto(url, { waitUntil: "load" });

/** Everything the page pulled before it ever scrolled: the slow-connection cost. */
const initialResources = await page.evaluate(() =>
	performance.getEntriesByType("resource").map((entry) => ({
		name: entry.name,
		type: entry.initiatorType,
		transfer: entry.transferSize,
		encoded: entry.encodedBodySize,
		decoded: entry.decodedBodySize,
	})),
);
const initialNavigation = await page.evaluate(() => {
	const entry = performance.getEntriesByType("navigation")[0];
	return { transfer: entry?.transferSize ?? 0, encoded: entry?.encodedBodySize ?? 0 };
});
const initialBytes = initialResources.reduce(
	(sum, resource) => sum + (resource.transfer || resource.encoded || 0),
	initialNavigation.transfer || initialNavigation.encoded,
);

const scrollThrough = async () => {
	const height = await page.evaluate(() => document.body.scrollHeight);
	for (let y = 0; y < height; y += 600) {
		await page.evaluate((top) => window.scrollTo(0, top), y);
		await page.waitForTimeout(120);
	}
	await page.waitForTimeout(1200);
};

await scrollThrough();

const resources = await page.evaluate(() =>
	performance.getEntriesByType("resource").map((entry) => ({
		name: entry.name,
		type: entry.initiatorType,
		transfer: entry.transferSize,
		encoded: entry.encodedBodySize,
		decoded: entry.decodedBodySize,
		nextHop: entry.nextHopProtocol,
	})),
);

const navigation = await page.evaluate(() => {
	const entry = performance.getEntriesByType("navigation")[0];
	return {
		transfer: entry?.transferSize ?? 0,
		encoded: entry?.encodedBodySize ?? 0,
		decoded: entry?.decodedBodySize ?? 0,
	};
});

const byType = new Map();
for (const resource of resources) {
	const key = resource.name.match(/\.(woff2|webp|jpe?g|png|svg|css|js|html)(\?|$)/)?.[1] ?? "other";
	const bucket = byType.get(key) ?? { count: 0, bytes: 0, decoded: 0 };
	bucket.count += 1;
	bucket.bytes += resource.transfer || resource.encoded || 0;
	bucket.decoded += resource.decoded || 0;
	byType.set(key, bucket);
}

const total = [...byType.values()].reduce((sum, bucket) => sum + bucket.bytes, 0);
const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

console.log(`\nDocument: ${kb(navigation.transfer || navigation.encoded)} (gzip), ${kb(navigation.decoded)} decoded`);
console.log(`Initial payload before scrolling: ${kb(initialBytes)}`);
console.log("Resources by type:");
for (const [type, bucket] of [...byType.entries()].sort((a, b) => b[1].bytes - a[1].bytes)) {
	console.log(`  ${type.padEnd(6)} ${bucket.count.toString().padStart(3)} files  ${kb(bucket.bytes).padStart(10)} transferred  ${kb(bucket.decoded).padStart(10)} decoded`);
}
console.log(`\nTOTAL transferred: ${kb(total + (navigation.transfer || navigation.encoded))}`);

const biggest = [...byType.entries()].length
	? resources.sort((a, b) => (b.transfer || b.encoded) - (a.transfer || a.encoded)).slice(0, 8)
	: [];
console.log("\nLargest individual resources:");
for (const resource of biggest) {
	console.log(`  ${kb(resource.transfer || resource.encoded).padStart(9)}  ${resource.name.replace(url, "")}`);
}

await browser.close();
