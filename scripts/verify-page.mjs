/**
 * Functional + performance verification for the exported site.
 *
 * Run against scripts/serve-export.py:
 *
 *   node scripts/verify-page.mjs http://127.0.0.1:8123/OraxRecordly_WEB/
 *
 * It exercises the parts the optimization touched: the lazily imported English
 * copy (including a reload in English), the deferred overlays (shortcuts sheet),
 * the demo modal, the download chooser, and the below-the-fold sections. It also
 * prints the initial payload, so a future change can be measured the same way.
 * Any failed expectation or console error exits non-zero.
 */
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://127.0.0.1:8123/OraxRecordly_WEB/";
const browser = await chromium.launch();
const failures = [];
const consoleErrors = [];

const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await context.newPage();
page.on("console", (message) => {
	if (message.type() === "error") consoleErrors.push(message.text());
});
page.on("pageerror", (error) => consoleErrors.push(String(error)));

const expect = (label, condition) => {
	console.log(`${condition ? "ok  " : "FAIL"} ${label}`);
	if (!condition) failures.push(label);
};

await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(600);

// 1. The page itself: Arabic content, guards released, no hidden body.
const state = await page.evaluate(() => {
	const root = document.documentElement;
	return {
		lang: root.lang,
		dir: root.dir,
		pending: root.className.includes("lang-pending"),
		loading: root.className.includes("lang-loading"),
		alive: root.className.includes("js-alive"),
		bodyVisible: getComputedStyle(document.body).visibility === "visible",
		hero: document.querySelector("h1")?.textContent?.trim() ?? "",
		initialTransfer: performance
			.getEntriesByType("resource")
			.reduce((sum, entry) => sum + (entry.transferSize || entry.encodedBodySize || 0), 0) +
			(performance.getEntriesByType("navigation")[0]?.transferSize ?? 0),
	};
});
console.log(`\nInitial payload: ${(state.initialTransfer / 1024).toFixed(1)} KB`);
expect("html is Arabic/RTL by default", state.lang === "ar" && state.dir === "rtl");
expect("language guard released after hydration", !state.pending && !state.loading);
expect("hydration marked the page alive", state.alive);
expect("body is visible", state.bodyVisible);
expect("hero headline rendered", state.hero.length > 0);

// 2. Below-the-fold content is present (SSR, not client-only).
const changelogHeading = await page.getByText("v1.13.4", { exact: false }).count();
expect("changelog content is in the document", changelogHeading > 0);
await page.mouse.wheel(0, 6000);
await page.waitForTimeout(700);
const faqVisible = await page.locator("#faq, [id*='faq']").first().isVisible().catch(() => false);
expect("FAQ section becomes visible after scrolling", faqVisible);

// 3. The deferred overlays mounted.
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(800);
const backToTop = await page.getByRole("button", { name: /أعلى|top/i }).count();
expect("deferred back-to-top button mounted", backToTop > 0);

// 4. The download chooser opens and lists real packages.
const downloadCta = page.getByRole("button", { name: /حمّل/ }).first();
await downloadCta.click();
await page.waitForTimeout(400);
const chooserOpen = await page.getByRole("dialog").isVisible().catch(() => false);
expect("download chooser opens", chooserOpen);
const packageRows = await page.getByRole("dialog").getByRole("link").count();
expect("chooser lists real package links", packageRows >= 2);
const linuxTab = page.getByRole("tab", { name: /Linux/i });
await linuxTab.click();
await page.waitForTimeout(200);
const linuxRows = await page.getByRole("dialog").getByRole("link").allTextContents();
expect(
	"Linux tab shows AppImage, deb and rpm",
	linuxRows.some((text) => text.includes("AppImage")) &&
		linuxRows.some((text) => text.includes("deb")) &&
		linuxRows.some((text) => text.includes("rpm")),
);
await page.keyboard.press("Escape");
await page.waitForTimeout(300);

// 5. The lazily imported demo modal still works.
const demoButton = page.getByRole("button", { name: /شاهد العرض/ }).first();
await demoButton.click();
await page.waitForTimeout(800);
const demoOpen = await page.getByRole("dialog").isVisible().catch(() => false);
expect("demo player (dynamic import) opens", demoOpen);
await page.keyboard.press("Escape");
await page.waitForTimeout(300);

// 6. English is a separate chunk, and switching to it works smoothly.
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(300);
// The toggle's accessible name is the localized action ("Switch to English").
await page.getByRole("button", { name: /الإنجليزية|English/i }).first().click();
await page.waitForTimeout(900);
const english = await page.evaluate(() => ({
	lang: document.documentElement.lang,
	dir: document.documentElement.dir,
	visible: getComputedStyle(document.body).visibility === "visible",
	text: document.body.innerText.slice(0, 400),
	title: document.title,
}));
expect("switching to English sets lang/dir", english.lang === "en" && english.dir === "ltr");
expect("English copy rendered", /record|screen|editor|timeline/i.test(english.text));
expect("English title applied", /OraxRecordly/i.test(english.title));
expect("body stays visible while the English chunk loads", english.visible);

// 7. A reload with the stored language comes up in English, not Arabic.
await page.reload({ waitUntil: "load" });
await page.waitForTimeout(1200);
const reloaded = await page.evaluate(() => ({
	lang: document.documentElement.lang,
	dir: document.documentElement.dir,
	visible: getComputedStyle(document.body).visibility === "visible",
	text: document.body.innerText.slice(0, 400),
	pending: document.documentElement.className.includes("lang-pending"),
	loading: document.documentElement.className.includes("lang-loading"),
}));
expect("reload keeps English", reloaded.lang === "en" && reloaded.dir === "ltr");
expect("English reload reveals the page", reloaded.visible && !reloaded.pending && !reloaded.loading);
expect("English reload shows English copy", /record|screen|editor|timeline/i.test(reloaded.text));

// 8. No console or page errors anywhere in that journey.
expect("no console errors", consoleErrors.length === 0);
if (consoleErrors.length > 0) {
	for (const error of consoleErrors.slice(0, 8)) console.log("   ", error);
}

await browser.close();
console.log(
	failures.length === 0
		? "\nALL CHECKS PASSED"
		: `\n${failures.length} CHECK(S) FAILED: ${failures.join(" | ")}`,
);
process.exit(failures.length === 0 ? 0 : 1);
