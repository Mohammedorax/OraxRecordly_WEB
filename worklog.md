# Worklog — OraxRecordly Landing Page

---
Task ID: 1
Agent: Super Z (main)
Task: Build OraxRecordly landing page — screen recording & video editing app — in Bold Editorial Studio style (B&W, Inter typography, difference cursor, marquee, editorial grid, dark footer). Arabic RTL content per user language.

Work Log:
- Initialized fullstack environment (Next.js 16 + Tailwind 4 + shadcn/ui), dev server running on port 3000.
- Generated 12 app-UI images via z-ai CLI (scripts/gen-images.sh): 6 grid (1152x864, g-*.png) + 6 marquee (864x1152, m-*.png) in /public/images — dark UI with colorful accents (shown grayscale, color on hover per spec).
- Rewrote src/app/layout.tsx: lang="ar" dir="rtl", fonts = Inter (--font-inter) + IBM Plex Sans Arabic (--font-arabic) + IBM Plex Mono (--font-plex-mono), Arabic metadata, inline `js` class bootstrap script for progressive-enhancement reveals.
- Rewrote src/app/globals.css: @theme fonts (--font-sans/--font-latin/--font-mono), --ease-editorial cubic-bezier(0.16,1,0.3,1), .mono label class, custom cursor styles (mix-blend-difference), reveal system (.rv-mask/.rv-inner/.fade-item gated behind html.js), marquee keyframes (30s linear, pause on hover, edge mask fade), menu overlay clip-path animation, thin black scrollbar, selection B&W, prefers-reduced-motion support, cursor:none on fine pointers.
- Components (src/components/site/):
  - cursor.tsx — 32px difference-blend cursor, rAF lerp follow (0.16), scale(2.5) via --cursor-scale on a/button hover, disabled on touch/reduced-motion.
  - reveal.tsx — Reveal (fade-up via IntersectionObserver, once) + WordsReveal (masked word-by-word slide-up, space-split so Arabic connections stay intact, sr-only text for a11y).
  - header.tsx — fixed, mix-blend-difference, "orax®" logo + REC mono timer + Plus toggle (rotates 45°), fullscreen white menu overlay (clip-path reveal, staggered links, Escape/scroll-lock).
  - hero.tsx — 80vh, clamp(3.4rem,11vw,10.5rem) headline "سجّل شاشتك. / حرّر قصتك." with staggered word masks, 24px gray subheadline, bottom mono metadata row + bounce arrow.
  - marquee.tsx — LTR wrapper, two identical sets (seamless -50% loop), 5/7 cards w-52/md:w-72, alternating radii (tl-100 / tr-100+bl-40 / all-40), grayscale→color + scale-105 on 700ms hover.
  - statement.tsx — Statement (word-revealed intro, black highlight pill) + Stats (4-col hairline grid: 4K·60 / 3× / 120+ / 0).
  - features.tsx — 2-col grid, 4:3 images, hover overlay bg-black/10, white arrow badge top-left (RTL mirror), metadata row (title 24px + category + mono version) with border-t black/10.
  - download-cta.tsx — client island: shadcn Dialog with Windows/macOS/Linux options + toast feedback on download.
  - footer.tsx — #0A0A0A, CTA row (جاهز تسجّل؟ + DownloadCTA), 4-col grid (brand+bio spanning 2, socials, contact), bottom bar © 2026 + mono credits, mt-auto sticky-footer pattern.
- page.tsx — assembles: Cursor, Header, main(Hero→Marquee→Statement→Stats→Features), Footer, min-h-screen flex-col.
- Fixed: lint error react-hooks/set-state-in-effect (async fallback in useInView); missing cursor.tsx after first Write failed (dir absent) — rewrote it.

Stage Summary:
- Dev server responds 200 on / ; lint clean.
- Deliverable: Arabic RTL editorial landing page for OraxRecordly, strictly B&W with color only from imagery.

Verification & Fixes (agent-browser + VLM end-to-end):
- Issue found: dev server served STALE globals.css (Turbopack cache) — all custom rules missing. Fixed by killing dev process, deleting .next, restarting .zscripts/dev.sh. Verified all custom rules served (--font-latin, .mono, menu-overlay, marquee__track, cursor-dot).
- Issue found: 5 marquee images flaky (lazy loading inside infinitely-animated track). Fixed with loading="eager" + draggable={false}. Verified broken images: 0.
- Issue found: reveal rootMargin -8% could leave footer bottom bar unrevealed at max scroll. Fixed to -32px. Verified all 42 elements reveal, 0 pending, footer fully visible.
- Verified: hero (headline/metadata/sub) ✓, menu overlay open/close + Escape ✓, marquee animation 30s + hover pause (paused→running) ✓, stats RTL order correct ✓, features grid ✓, footer ✓, download dialog (3 platforms) ✓, toast feedback ✓, mobile 390px (no overflow, single column, footer at bottom) ✓, no console/page errors ✓, final full-page VLM check: all 6 sections PASS, zero defects.
- Note: headless test env reports (hover: none) so Tailwind v4 @media(hover:hover)-wrapped group-hover effects and the custom difference cursor cannot be visually exercised there — verified via rule presence + :hover state match; they activate on real desktop browsers (standard pattern, graceful degradation on touch).

---
Task ID: 2
Agent: Super Z (main)
Task: Apply user-supplied brand kit to the OraxRecordly landing page — use ThmanyahSerifDisplay font, place the uploaded logo, unify the color scheme from the logo, and rewrite all copy in elevated, eloquent Arabic (فصحى براقة).

Work Log:
- Analyzed uploaded logo (VLM + PIL): 801x760 transparent PNG; icon = viewfinder frame + red target + blue cursor; wordmark "Orax"; exact cluster-mean colors BLUE #136CC8 / RED #EA232A.
- scripts/prepare-brand.py: split lockup at internal alpha gap (row 515-567); saved public/brand/{logo-full,logo-icon,logo-word,logo-horizontal}.png (horizontal = icon+word composite 489x150); generated src/app/icon.png (512 rounded-square white favicon); copied font to src/fonts/.
- Verified font via fontTools: full Arabic + Latin + both digit systems, all diacritics (064B-0652, tatweel), GPOS mark positioning, init/medi/fina shaping.
- layout.tsx: registered Thmanyah Serif Display via next/font/local (--font-thmanyah, weight 500, preload); dazzling new title/description/OG copy.
- globals.css: @theme tokens --font-display + --color-orax-blue/--color-orax-red/--color-orax-blue-bright; selection/focus/scrollbar -> brand blue; .rec-dot live-pulse keyframes (red); .rv-mask vertical headroom (0.16em top / 0.12em bottom) + .rv-inner 140% so Arabic diacritics never clip.
- header.tsx: restructured into TWO sibling fixed bars — logo chip (white pill, hairline border, hover glow, TRUE brand colors, outside any blend) + controls bar (REC live ticking clock + Plus, keeps mix-blend-difference); menu links in font-display with blue hover + red mono numbering.
- hero.tsx: brand lockup (h-20/24) above headline; new copy "سجِّلْ ما لا يُنسى. / وحرِّرْ ما يُروى." in Thmanyah serif; eloquent subhead; red rec-dot + "مرِّرْ لتُكملَ الحكاية".
- statement.tsx: blue highlight pill "بل تُصاغُ الحكاية."; new manifesto copy; stats labels rewritten (نقاء يفوق حدّة البصر / يسبق لمح البصر / ترسانة / ولا واحدة); stat values in font-display.
- features.tsx: font-display titles, blue arrow badge on hover, blue version tags, elevated descriptions (أوركسترا metaphor).
- download-cta.tsx: brand-blue primary button (#0F55A0 hover), blue platform-row hover, dialog title in font-display, elevated microcopy + toast.
- footer.tsx: white logo chip in brand column, eloquent bio, link hover -> orax-blue-bright, rec-dot in (03) label, bottom bar "CRAFTED IN RIYADH / CAIRO — BLUE, RED & WHITE".
- Dev server: stale processes were holding port 3000 with a corrupted Turbopack DB (deleted .next under a live server). Killed all PIDs, removed .next, clean restart via .zscripts/dev.sh -> 200.
- Verification: HTML greps confirm logos/font/all new copy served; compiled CSS confirms .font-display, orax utilities, rv 140%; agent-browser screenshots (desktop hero, fullpage, footer scrolled, menu open, mobile hero/footer) + VLM QA: ALL PASS — logo in true colors in chip/hero/footer, diacritics unclipped, difference blend shows white REC/Plus over dark footer, blue button present, no overflow; console + page errors clean; eslint clean.

Stage Summary:
- Brand kit fully applied: Thmanyah serif display typography, real logo placement (header chip / hero lockup / footer chip / favicon), unified blue-red palette from the logo, and complete eloquent Arabic rewrite across every section.
- Files touched: layout.tsx, globals.css, header/hero/marquee/statement/features/download-cta/footer.tsx, public/brand/*, src/app/icon.png, src/fonts/*.

---
Task ID: 3
Agent: Super Z (main)
Task: الحزمة الذهبية — تنفيذ شامل لكل التحسينات (UX + جماليات + طبقة ثقة) وفق اختيار المستخدم مع ملاحظة «الأهم والأولى».

Work Log:
- Prisma: أضيف نموذج Subscriber (email unique, source) + db push + generate.
- LQIP: scripts/make-lqip.py يولّد src/lib/lqip.ts (12 صورة، ~450 بايت/صورة) — placeholder="blur" على صور الميزات والماركي ونافذة المعاينة.
- site-chrome.tsx: مزوّد SiteChromeProvider (تقدم التمرير rAF + رصد القسم النشط بـIntersectionObserver نطاق -45%) + ScrollProgressBar (خط 2px أزرق→أحمر، يمين→يسار).
- cursor.tsx: نمط التسميات الذكية — data-cursor-label="شاهد/حمّل/شغّل/اذهب/ابدأ/انضم" يحوّل النقطة لقرص ناطق (difference blend)، مع الحفاظ على scale 2.5 للعناصر التفاعلية.
- reveal.tsx: بوابة intro-hold — تُعقّد كل الكشوفات حتى حدث orax:go (ستارة الافتتاح) مع مهلة أمان 3 ثوانٍ.
- count-up.tsx: عدّاد rAF بـeaseOutCubic يشتغل عند الظهور؛ الإحصائيات: 60/3/120 تصعد، والصفر يعدّ تنازلياً من 9.
- sticky-cta.tsx: شريط جوال سفلي (يظهر بعد الـHero بـ1.85×innerHeight، يختفي عند ظهور #download، safe-area padding، زر تحميل مضغوط بنافذته).
- use-magnetic.ts: خطاف مغناطيسي (سحب ≤14px، ارتداد بمنحنى التحرير) على زر التحميل وزر القائمة وزر المعاينة.
- scramble.tsx: فكّ تشفير للنصوص اللاتينية mono عند الظهور وعند hover (24 إطاراً).
- ticker.tsx: شريط عبارات أسود (سجِّل بحرّية/حرِّر بذكاء/شارك بثقة/أبهر بلا حدود) بخط Thmanyah، نقاط حمراء وماسيّات زرقاء، قناع تلاشي طرفي، إيقاف عند hover.
- intro.tsx: ستارة افتتاح بيضاء بالشعار (ثانية واحدة ثم ترتفع 0.95s)، مرة واحدة لكل جلسة (سلسلة pre-paint في layout + intro-skip/intro-hold + noscript fallback + reduced-motion تخطٍّ فوري).
- testimonials.tsx: قسم الأصوات — 4 شهادات تدور تلقائياً كل 6.5s (تتوقف عند hover/focus)، أزرار سابق/تالي + مؤشر 01—04، حركة quote-in.
- pricing.tsx: 3 خطط (0$/12$/29$) ببطاقات تحريرية، برو مميزة بحدّ أزرق وشارة «الأكثر اختياراً» وظل أزرق.
- faq.tsx: 6 أسئلة بـAccordion (Plus يدور 45° كالقائمة)، رقمان أحمران mono، عمودان (عنوان لاصق + قائمة).
- changelog.tsx: خط زمني بـ4 إصدارات (V2.4→V2.1) مع وسوم جديد/تحسين/إصلاح (أزرق/رمادي/أحمر) ونقاط على المحور.
- newsletter.tsx: ديوان أوراكس — نموذج بريد بحالات (تحميل/نجاح/خطأ) + toast؛ api/subscribe/route.ts يتحقق من الصيغة ويفرد التكرار ويكتب في Prisma.
- demo-dialog.tsx: مشغّل عرض حيّ (01:24) بثلاثة مشاهد (تسجيل→تحرير→تصدير) crossfade، شريط تقدم قابل للنقر (role=slider + أسهم)، ساعة mono، حلقة مستمرة، إعادة تعيين عند الإغلاق (حدث لا effect).
- hero.tsx: صف إجراءات (رابط تحميل + // + زر معاينة).
- features.tsx: LQIP + تسمية مؤشر «شاهد» + زر المعاينة في الترويسة.
- header.tsx: 7 روابط، تمييز القسم النشط (أزرق + aria-current + rec-dot)، مفتاح M يفتح القائمة (مع استثناء الحقول والحواريات)، حصر Tab داخل القائمة، تركيز أول رابط، مغناطيسية زر +، Scramble في الشريط السفلي.
- layout.tsx: سلسلة intro bootstrap + noscript، metadataBase + twitter card + keywords موسعة + canonical.
- page.tsx: التجميع الكامل (Provider + skip-link + Intro + Cursor + Progress + Header + Hero + Marquee + Ticker + Statement + Stats + Features + Testimonials + Pricing + FAQ + Changelog + Newsletter + Footer + StickyCTA + JSON-LD SoftwareApplication مع التقييم والعروض).
- جديد: sitemap.ts + not-found.tsx (404 تحريرية: «هذه اللقطةُ غيرُ موجودة»).
- أخطاء أُصلحت: react-hooks/refs (الخطاف يعيد ref مباشرة)، jsx-no-comment-textnodes ({"//"})، set-state-in-effect (count-up عبر متغير reducedMotion داخل رد الـIO، وdemo-dialog عبر onOpenChange).

Stage Summary:
- ESLint نظيف، لا أخطاء صفحة/كونسول.
- تحقّق agent-browser + VLM: الستارة (تظهر مرة وترتفع وتتخطى في الزيارة الثانية)، شريط التقدم، القسم النشط (02 الميزات مُميّز)، مفتاح M + Escape، النشرة (حفظ فعلي في القاعدة + رسالة تكرار + رفض صيغة خاطئة)، المعاينة (تشغيل وخط زمني يتقدم)، الشريط اللاصق (مخفي في الأعلى ← ظاهر بعد الـHero ← يتنحّى عند الفوتر، لا overflow أفقي على 390px)، 404 تحريرية، 12 صورة لا شيء معطّل (الصورة «المعطلة» الوحيدة كانت شعار الشريط المخفي على سطح المكتب — سلوك lazy طبيعي).
- VLM النهائي: Hero PASS، Stats PASS، Ticker PASS (بعد إضافة قناع التلاشي)، Dialog PASS، 404 PASS، الشريط اللاصق PASS في الفحص المركّز؛ ملاحظتا «فشل» سابقتان كانتا قراءة خاطئة (اتجاه RTL صحيح + طبيعة الأشرطة اللاصقة القياسية).
- أُرجئ لاحقاً بطلب المستخدم: تبديل AR/EN كامل، جدول مقارنة مستقل.

---
Task ID: 4
Agent: Super Z (main)
Task: طلب المستخدم — التحسينات والإصلاحات والجماليات التي ترفع كفاءة المستخدم + إضافات ومزايا جديدة + «لا بد من توحيد الخطوط في جميع النصوص».

Work Log:
- فحص تغطية محارف الخط (scripts/check-font-coverage.py عبر fontTools): كل المحارف مغطاة عدا «٫» (U+066B) — استُبدلت «٢٫٤ مليون» في الشهادات بـ«2.4 مليون».
- توحيد الخطوط كليًا: layout.tsx حُذفت Inter وIBM Plex Sans Arabic وIBM Plex Mono؛ Thmanyah Serif Display هو الخط الوحيد (متغير --font-thmanyah واحد).
- globals.css: الرموز الأربعة (--font-sans/--font-latin/--font-mono/--font-display) تحل كلها إلى Thmanyah؛ font-synthesis:none (وزن 500 صادق واحد — التراتبية بالحجم واللون)؛ body line-height 1.65؛ .mono أعيد تعريفه (بلا عائلة خط) مع letter-spacing:.1em للاتيني فقط؛ جديد .mono-ar (letter-spacing:0 + word-spacing:.14em) للملصقات العربية — إصلاح كسر اتصال الحروف العربية بسبب التتبّع.
- رقعات mono-ar على الملصقات العربية: hero (مرِّر لتُكمل الحكاية)، marquee (ومضات من الاستوديو)، sticky-cta، عناوين أعمدة الفوتر، شارة «الأكثر اختياراً»، حاشية الأسعار، حاشية النشرة، وسوم changelog (أزيل !tracking-wide)، ملصق «أوراكس» في جدول المقارنة.
- font-bold→font-medium في كل مكونات الموقع (توحيد الوزن الواحد).
- جديد: comparison.tsx — قسم «الميزان» (05 — THE BALANCE): جدول RTL تحريري 8 صفوف × 4 أعمدة (أوراكس/OBS/Camtasia/Loom)، عمود أوراكس بظل أزرق وحدّ أزرق وأيقونة الشعار، أيقونات ✓/✗/−، صف أسعار، تلميح سحب أفقي للجوال، حاشية صراحة. أعيد ترقيم الأقسام: FAQ 06، CHANGELOG 07، DIVAN 08، GET STARTED 09.
- جديد: back-to-top.tsx — قرص ثابت أسفل-يسار (سطح المكتب) يظهر بعد 1.15×innerHeight، مغناطيسي، تسمية مؤشر «إلى القمة»، aria-keyshortcuts=T.
- جديد: shortcuts.tsx — لوحة اختصارات (حوار Radix) بنصوص فصيحة + رقائق kbd؛ مفاتيح عامة فعلية: D→orax:download، P→orax:demo، T→إلى القمة، ؟/؟?//→فتح اللوحة؛ حرس (حقول/معدّلات/قفل تمرير لغطاء آخر).
- header.tsx: زر تحميل فوري (أيقونة Download) في شريط الفرق لسطح المكتب يبث orax:download؛ رابط «الميزان» الجديد في القائمة (8 روابط).
- download-cta.tsx/demo-dialog.tsx: خاصية listen — نسخة واحدة قانونية (الفوتر للتحميل، الهيرو للمعاينة) تستجيب للأحداث العامة فلا تتضاعف الحوارات.
- footer.tsx: أزرار نسخ البريد (Copy→Check + toast + مسار execCommand احتياطي)، u-line تسطير متحرك للروابط، رابط «KEYBOARD — ؟» يفتح لوحة الاختصارات (متاح للجوال).
- جماليات: paper-grain (feTurbulence ثابت 0.045 فوق المحتوى وتحت الغطاءات)، .u-line (تسطير ينمو باتجاه القراءة 0.5s).
- إصلاح خادم: CSS قديم من كاش Turbopack — قتل العمليات + rm .next + إعادة تشغيل نظيفة (200).

Stage Summary:
- ESLint نظيف؛ لا أخطاء كونسول/صفحة؛ لا overflow أفقي على 390px (scrollW=innerW=390).
- CSS المُجمَّع مؤكد: font-synthesis وmono-ar وpaper-grain وu-line وfont-thmanyah فقط (لا Inter/Plex إطلاقًا).
- تحقق agent-browser + VLM: الهيرو والجدول PASS (عمود أوراكس مميز، عربية متصلة بلا فجوات)، لوحة الاختصارات كاملة (رقائق M/D/P/T/؟/?/Esc)، حوارا D وP يفتحان، زر القمة في موضعه، القائمة تعرض «05 الميزان» والرابط النشط aria-current عند قسم المقارنة، أسفل الفوتر (نسخ + KEYBOARD — ؟ + حقوق) PASS، الشريط اللاصق يختفي داخل الفوتر (تحقق برمجي للفئة).
- نسخ البريد: في الوضع بلا رأس تفشل الحافظة (صلاحيات) فيظهر توست الاحتياط الرشيق — المساران (نجاح/فشل) مُتحققان؛ في المتصفحات الحقيقية يعمل النسخ المباشر.
- أُرجئ للطلب القادم: تبديل AR/EN كامل.

---
Task ID: 5
Agent: Super Z (main)
Task: طلب المستخدم — بناء ما تم الاتفاق عليه: تبديل اللغة AR/EN كامل (RTL/LTR) + الوضع الليلي/النهاري + الهيدر الذكي + شريط قبل/بعد + أداة REC تفاعلية + شارات التصدير.

Work Log:
- فحص الشعار للوضع الليلي (PIL): أزرق/أحمر فقط، 0% بكسلات داكنة — يُقرأ بوضوح على الخلفيات الداكنة بلا رقعة بيضاء.
- globals.css: رموز دلالية جديدة --paper/--ink/--ink-soft (تُقلب في .dark إلى #10141B/#F2F4F8/#A9B0BD) + محاذاة رموز shadcn (popover/card/border/ring) + شريط التقدم ينمو من اليسار في LTR + حبيبات الورق تنعكس في الداكن + .header-bar (إخفاء/إظهار) + .rec-dot.is-rec (نبض أسرع) + مسار شريط التمرير يتبع الورق.
- src/lib/i18n.ts (جديد): المعجم الكامل AR+EN بنفس البنية المطبوعة (type Dict = typeof ar) — كل نص في الموقع: الهيدر/القائمة (9 روابط مع «قبل/بعد»)، الهيرو، الماركي، التيكر، البيان، الإحصاءات، الميزات (6)، قبل/بعد، الشهادات (4)، الأسعار (3)، الميزان (8 صفوف)، الأسئلة (6)، السجل (4×3)، النشرة، الفوتر، التحميل، المعاينة، الاختصارات، 404، ورسائل الـAPI.
- i18n-provider.tsx (جديد): سياق اللغة — SSR عبر كوكي orax-lang (يقرأه layout قبل الرسم فلا وميض)، التبديل يحدّث lang/dir/العنوان/الكوكي/localStorage، ومساعد monoLabel (mono-ar للعربية فقط كي لا تنكسر الاتصالات).
- theme-provider.tsx (جديد): next-themes (class, system, بلا وميض)؛ زر الشمس/القمر في شريط الفرق (فرق اللون يعمل في الوضعين) مع حارس mounted عبر useSyncExternalStore.
- layout.tsx: async + cookies() للغة؛ generateMetadata ديناميكي بالعنوان/الوصف لكل لغة؛ themeColor مزدوج؛ ThemeProvider + I18nProvider يلفّان الصفحة.
- header.tsx: زر لغة (EN/عربي) + زر وضع — كلاهما في شريط difference؛ الهيدر الذكي (ينزلق عند التمرير للأسفل >80px ويعود عند الصعود، لا يختفي والقائمة مفتوحة) عبر .header-bar.is-hidden على الشريطين؛ روابط القائمة i18n مع سهم واتجاه انزلاق شرطي (rtl:/ltr:)؛ ترقيم الأقسام أُعيد: الميزان 06، الأسئلة 07، السجل 08، الديوان 09، ابدأ 10، وقبل/بعد = 03.
- hero.tsx + rec-widget.tsx (جديد): حبة REC تفاعلية — اضغط فيعدّ الزمن الحقيقي ويتسارع النبض، أوقف فيظهر توست «حُفظ المقطع في المكتبة» بمدة المقطع؛ تعليق يشرح أنها محاكاة للزر الأحمر.
- before-after.tsx (جديد): قسم «من الخام إلى المبهر» — منزلق سحب (pointer/touch/لوحة مفاتيح، role=slider) يقصّ الطبقة الخام (رمادي باهت) عن المونتاج الملوّن، شارتا RAW/ORAX، شارات تصدير MP4/GIF/WEBM/4K/120FPS.
- كل المكونات أُعيدت كتابتها على i18n + الرموز الدلالية: bg-white→bg-paper، text-black→text-ink، border-black→border-ink، neutral→ink-soft، bg-neutral-100→bg-ink/5، hover:bg-black→hover:bg-ink مع نص paper؛ الأسهم الاتجاهية شرطية (ArrowUpLeft في RTL / ArrowUpRight في LTR)؛ علامات الاقتباس «»/""؛ أيقونة التشغيل تنعكس؛ النشرة ترسل lang إلى الـAPI؛ أزرار text-right→text-start.
- api/subscribe: رسائل مترجمة حسب lang في الطلب.
- not-found.tsx: عميل + i18n (نصا 404 بالعربية والإنجليزية).
- أخطاء أُصلحت: react-hooks/set-state-in-effect مرتين (mounted عبر useSyncExternalStore؛ حذف إعادة تعريف فهرس الشهادات — الطرفان 4 اصوات).

Stage Summary:
- ESLint نظيف؛ لا أخطاء صفحة/كونسول؛ لا overflow أفقي على 390px.
- تحقق agent-browser الشامل: تبديل اللغة يقلب الاتجاه والعنوان والميتا فوراً ويصمد بعد إعادة التحميل (كوكي SSR بلا وميض)؛ تبديل الوضع يعمل ويثبت (localStorage) ويمر عبر الفروق اللونية؛ تدقيق الداكن: صفر كتل بيضاء متسربة وألوان النصوص كلها فاتحة صحيحة؛ منزلق قبل/بعد يسحب بدقة (56% لـx=700)؛ REC يعدّ ويحفظ بتوست؛ الهيدر الذكي يختفي/يعود؛ النشرة ترد بالإنجليزية في EN؛ القائمة 9 روابط؛ 404 مترجمة؛ الشريط اللاصق يعمل.
- VLM (11 لقطة): عربي فاتح/داكن (هيرو/مقارنة/أقسام/جوال/قائمة) PASS، إنجليزي فاتح (هيرو/تحميل/404) PASS — العربية متصلة، الشعار سليم، لا تداخل.
- ملاحظة تفاوت اختباري: agent-browser find--name يطابق جزئياً بأسماء عربية متشابهة وقد ينقر زراً خاطئاً — استُخدمت نقرات DOM المباشرة للتحقق الحاسم (كل الأزرار تعمل).

---
Task ID: 6
Agent: Super Z (main)
Task: إصلاح خطأ Hydration في ThemeToggle — أبلغ المستخدم عن Console Error: mismatch بين الخادم والمتصفح في aria-label/title/data-cursor-label لزر الوضع (ليلي/نهاري).

Work Log:
- التشخيص: header.tsx (ThemeToggle) كان يحرس الأيقونة فقط بعلم mounted (useSyncExternalStore)، بينما تُحسب الصفات الثلاث مباشرة من resolvedTheme — وnext-themes يقرأ localStorage قبل الـhydration فعلى العميل dark=true بينما الخادم يفترض light → «الوضع النهاري» مقابل «الوضع الليلي».
- الإصلاح (سطر واحد جوهري): const dark = mounted && resolvedTheme === "dark" — بوابته كل القيم المشتقة من الثيم خلف علم الـmounted (يُرجع false خلال رسم الـhydration لأن React يستخدم getServerSnapshot على العميل أيضاً)، فيتطابق أول رسم مع HTML الخادم دائماً، ثم يتحدث الزر للحالة الفعلية بعد الـhydration.
- تحقق من عدم وجود نمط مماثل آخر: grep resolvedTheme/useTheme عبر src — الموقع الوحيد الذي يقرأ الثيم أثناء الرسم هو ThemeToggle؛ Toaster في layout نسخة Radix لا تقرأ الثيم، وsonner.tsx مكون معزول غير مستخدم.
- اختبار السيناريو المُخفق تحديداً (agent-browser): localStorage theme=dark + prefers-color-scheme:dark ثم reload → صفر أخطاء كونسول/صفحة، والزر بعد الـhydration «التبديل إلى الوضع النهاري» مع html.dark.
- وضع النهار: reload نظيف بلا أخطاء والملصق الصحيح؛ HTML الخادم الآن حتمي دائماً «التبديل إلى الوضع الليلي».
- وظيفياً: نقرتان متتابعتان تقلبان الثيم والملصق (dark↔light) بلا أي خطأ.
- ESLint على كامل src: نظيف (exit 0). لقطة تحقق داكنة: download/dark-mode-check.png.

Stage Summary:
- خطأ الـhydration حُلّ نهائياً بجعل كل مخرجات الثيم خلف حارس mounted الصالح للـhydration؛ السلوك الوظيفي للتبديل لم يتأثر (تحقق ثنائي الاتجاه).
