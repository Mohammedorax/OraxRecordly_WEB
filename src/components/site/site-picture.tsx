import { asset } from "@/lib/asset";
import { cn } from "@/lib/utils";

/**
 * One of the site's real captures, served as WebP with a JPEG fallback.
 *
 * Every screenshot on this page is a photograph of the shipped app, and the raw
 * PNG/JPEG originals were the single heaviest thing a slow connection had to pay
 * for. `next/image` cannot help here: the site is a static export, so its
 * optimizer is off (`images: { unoptimized: true }`) and it serves the original
 * bytes as-is. This component instead points at the WebP that
 * `scripts/optimize-images.mjs` produces next to each JPEG, keeping the JPEG as the
 * fallback for browsers without WebP, and always lazy-loads unless the caller asks
 * for the image to be eager.
 *
 * The fill layout mirrors what `<Image fill>` did: the parent must be positioned.
 */
export function SitePicture({
	/** The JPEG path under /public, e.g. /images/app/app-02.jpg */
	src,
	/** The matching WebP path; defaults to the same name with a .webp extension. */
	webpSrc,
	/** The matching AVIF path; defaults to the same name with a .avif extension. */
	avifSrc,
	alt,
	className,
	/** Tiny base64 preview painted behind the image while it loads. */
	lqip,
	/** Load immediately: only for an image above the fold. */
	priority = false,
}: {
	src: string;
	webpSrc?: string;
	avifSrc?: string;
	alt: string;
	className?: string;
	lqip?: string;
	priority?: boolean;
}) {
	const jpeg = asset(src);
	const base = src.replace(/\.(jpe?g|png)$/i, "");
	const webp = asset(webpSrc ?? `${base}.webp`);
	// AVIF is ~30% smaller than WebP; browsers that cannot read it fall through to
	// the WebP source and then to the JPEG, so nothing is lost.
	const avif = asset(avifSrc ?? `${base}.avif`);

	return (
		<picture
			className="absolute inset-0 block overflow-hidden bg-cover bg-center"
			style={lqip ? { backgroundImage: `url("${lqip}")` } : undefined}
		>
			<source srcSet={avif} type="image/avif" />
			<source srcSet={webp} type="image/webp" />
			<img
				src={jpeg}
				alt={alt}
				loading={priority ? "eager" : "lazy"}
				decoding="async"
				fetchPriority={priority ? "high" : "auto"}
				draggable={false}
				className={cn("h-full w-full object-cover", className)}
			/>
		</picture>
	);
}
