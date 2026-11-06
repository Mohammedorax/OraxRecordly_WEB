/*
 * Repeat-visit cache for the OraxRecordly landing page.
 *
 * GitHub Pages cannot set `Cache-Control: immutable`, so a returning visitor
 * revalidates every asset. The files Next emits under `/_next/static/` are
 * content-hashed and never change under the same URL, so they can be served from
 * this cache without checking the network. Images are served stale-while-
 * revalidate: the cached copy paints immediately and is refreshed in the
 * background. HTML is never cached here, so a new release is picked up on the
 * next navigation.
 *
 * No precache list and no build step: the worker fills the cache as the visitor
 * browses, which keeps it small and means it can never block the first paint.
 */
const ASSET_CACHE = "orax-assets-v1";

/** Content-hashed build output: safe to serve from cache forever. */
function isImmutableAsset(pathname) {
	return pathname.includes("/_next/static/");
}

/** Images and fonts: cache first, then refresh in the background. */
function isRevalidatedAsset(pathname) {
	return /\.(avif|webp|jpe?g|png|gif|svg|ico|woff2?|ttf)$/i.test(pathname);
}

self.addEventListener("install", () => {
	// Take over as soon as the page allows it; there is no precache to fill.
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			const names = await caches.keys();
			await Promise.all(
				names.filter((name) => name !== ASSET_CACHE).map((name) => caches.delete(name)),
			);
			await self.clients.claim();
		})(),
	);
});

self.addEventListener("fetch", (event) => {
	const request = event.request;
	if (request.method !== "GET") return;

	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	if (isImmutableAsset(url.pathname)) {
		event.respondWith(
			(async () => {
				const cache = await caches.open(ASSET_CACHE);
				const hit = await cache.match(request);
				if (hit) return hit;
				const response = await fetch(request);
				if (response.ok) await cache.put(request, response.clone());
				return response;
			})(),
		);
		return;
	}

	if (isRevalidatedAsset(url.pathname)) {
		event.respondWith(
			(async () => {
				const cache = await caches.open(ASSET_CACHE);
				const hit = await cache.match(request);
				const network = fetch(request)
					.then(async (response) => {
						if (response.ok) await cache.put(request, response.clone());
						return response;
					})
					.catch(() => hit);
				return hit ?? network;
			})(),
		);
	}
});
