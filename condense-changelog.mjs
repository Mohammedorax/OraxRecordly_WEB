import fs from "node:fs";

const file = "src/lib/i18n.ts";
let text = fs.readFileSync(file, "utf8");

const ar = `    releases: [
      {
        version: "v1.13.2",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "تنوّع الإصدارات على كل الأجهزة: نسخة محمولة zip لويندوز تعمل من مجلد بلا تثبيت، ونسختا zip لماك (أبل سيليكون · إنتل) بجانب صورتَي dmg، وثلاث صيغ للينكس." },
          { kind: "new", text: "التشغيل عند بدء النظام على لينكس: يكتب البرنامج مدخلاً قياسياً في ~/.config/autostart كما تفعل كل أسطح مكتب لينكس، ويشير إلى ملف AppImage نفسه لا إلى مسار مؤقّت." },
          { kind: "improve", text: "ملفّ تعليمات لكل منصة يُنشر مع الإصدار: اختيار الصيغة، وتجاوز عقبة FUSE في AppImage، وقيود AppArmor في أوبنتو 24.04، وأنّ التحديث الذاتي يخصّ AppImage وحده." },
        ],
      },
      {
        version: "v1.13.1",
        date: "2026.10.16",
        changes: [
          { kind: "fix", text: "خيار «تصوير منطقة» يُعرض فقط حيث يُقصّ الإطار فعلاً: كان يظهر على ماك بينما المساعد هناك لا يقصّ، فيختار المستخدمُ منطقةً وتُسجَّل الشاشةُ كاملةً بصمت. الآن يظهر على ويندوز وحده، ومُثبَّت باختبار وحدة واختبارَي واجهة." },
        ],
      },
      {
        version: "v1.13.0",
        date: "2026.10.15",
        changes: [
          { kind: "new", text: "إصدارات لينكس: AppImage يعمل في كل التوزيعات بلا تثبيت، و‎deb لأوبنتو ودبيان وما يتفرّع عنها، و‎rpm لفيدورا وريد هات وأوبن سوزي، مع قناة تحديث للينكس." },
          { kind: "new", text: "نسخة ماك غير موقّعة (أبل سيليكون · إنتل) لمن يريد تجربتها بلا حساب Apple، مع خطوات تجاوز حاجز Gatekeeper في ملف التعليمات." },
          { kind: "improve", text: "فحص آلي للحزم على لينكس: تُثبَّت وتُستخرَج وتُشغَّل فعلاً، وتُفحص كل مكتبة مشتركة (101 مكتبة) ومدخل قائمة التطبيقات والأيقونات — فلا يكون «البناء نجح» بديلاً عن «يعمل عندك»." },
        ],
      },
      {
        version: "v1.12.0",
        date: "2026.10.13",
        changes: [
          { kind: "new", text: "زرّ لقطة الشاشة صار زراً واحداً بخيارات داخله، مع تعليم آخر وضعٍ استخدمته — بدل زرّين متجاورين يبدوان مكرَّرين." },
          { kind: "improve", text: "تحرير أسلس: زمن التشغيل يُحدَّث 30 مرة/ث مع تصريف القيمة الأخيرة، فتهبط المعاينة بإطاراتها الكاملة. وقياسُ تجزّؤ الإطارات على مصدر 4K يعطي 41 إطاراً/ث عند p95 = 41 ملّي ثانية." },
          { kind: "fix", text: "مستويات الجودة صارت حقيقية: had medium وgood وhigh معدّلَ بتّ واحداً، فاختيار الجودة لم يكن يغيّر شيئاً." },
          { kind: "fix", text: "اسم المقطع وتاريخه لم يعودا يُحرقان في الفيديو المُصدَّر افتراضيّاً، وقد تُحقّق من ذلك على ملف مُصدَّر فعليّ." },
        ],
      },
      {
        version: "v1.11.0",
        date: "2026.10.13",
        changes: [
          { kind: "improve", text: "روابط المعاينة لم تعُد تحمل مسار ملفك: صار كل رابط رمزاً مبهمًا لا يكشف ترتيب مجلداتك." },
          { kind: "improve", text: "وُحِّدت خمس نسخٍ من قارئ الرابط في مكان واحد، وفشل القراءة لم يعُد يُسقط الملف." },
        ],
      },
      {
        version: "v1.10.0",
        date: "2026.10.13",
        changes: [
          { kind: "new", text: "الاستمرار في العمل بالخلفية: إغلاق النافذة يُبقي Recordly في منطقة الإشعارات مستعداً للتسجيل." },
          { kind: "new", text: "أيقونة النظام صارت مُعرَّبة بالكامل، ومنها إظهار التحكم أو إيقاف التسجيل أو إيقافه والخروج معاً." },
          { kind: "fix", text: "خيارات التلاشي والمزج انتقلت إلى قسم «المشهد» — مكانها الطبيعي — بعد أن كانت مخفية في تنسيق المؤشر." },
          { kind: "improve", text: "خطوط تنسيق النص من خطوط الجهاز فقط، بلا تنزيل أي شيء من الإنترنت." },
        ],
      },
      {
        version: "v1.9.0",
        date: "2026.10.13",
        changes: [
          { kind: "new", text: "تصوير منطقة ترسمها بنفسك في شريط الإطلاق، والاقتصاص يبقى ثابتاً طوال التسجيل." },
          { kind: "improve", text: "المنطقة تُرسَل بوحدات فيزيائية نسبةً إلى الشاشة، فتبقى دقيقة على الشاشات المُقاسة." },
        ],
      },
      {
        version: "v1.8.0",
        date: "2026.10.13",
        changes: [
          { kind: "fix", text: "استرداد التصدير الذي يخرج أسود بالكامل، وإصلاح مسارات الأصول التي كانت تنكسر بعد نقل الملفات." },
        ],
      },
    ],`;

const en = `    releases: [
      {
        version: "v1.13.2",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "More than one way to install on every platform: a portable Windows zip that runs from a folder without installing, macOS zips (Apple Silicon and Intel) beside the disk images, and three Linux formats." },
          { kind: "new", text: "Start at login on Linux: the app writes a standard entry to ~/.config/autostart, pointing at the AppImage itself rather than a temporary mount path." },
          { kind: "improve", text: "A per-platform install note shipped with each release: which file to pick, the FUSE workaround for the AppImage, the AppArmor restriction on Ubuntu 24.04, and the fact that only the AppImage updates itself." },
        ],
      },
      {
        version: "v1.13.1",
        date: "2026.10.16",
        changes: [
          { kind: "fix", text: "Region recording is offered only where frames are really cropped: it used to appear on macOS, where the recorder cannot crop, so a drawn area silently recorded the whole screen. It is now Windows-only, pinned by a unit test and two UI tests." },
        ],
      },
      {
        version: "v1.13.0",
        date: "2026.10.15",
        changes: [
          { kind: "new", text: "Linux builds: an AppImage that runs on any distribution without installing, a deb for Ubuntu and Debian, an rpm for Fedora and openSUSE, plus a Linux update feed." },
          { kind: "new", text: "An unsigned macOS build (Apple Silicon and Intel) for anyone who wants to try it without an Apple account, with the Gatekeeper steps written out in the install note." },
          { kind: "improve", text: "Automated package verification on Linux: each package is installed, unpacked and actually launched, with every shared library (101 of them), the desktop entry and the icons checked - so \"it built\" is never mistaken for \"it runs\"." },
        ],
      },
      {
        version: "v1.12.0",
        date: "2026.10.13",
        changes: [
          { kind: "new", text: "One screenshot button with the modes inside it, remembering the last one you used, instead of two buttons that looked duplicated." },
          { kind: "improve", text: "Smoother editing: the playhead updates 30 times a second with a trailing flush, so the preview keeps drawing at full frame rate. A playback measurement on a 4K source reports 41 fps at a p95 of 41 ms." },
          { kind: "fix", text: "Quality levels are real: medium, good and high produced one bitrate before, so the choice changed nothing." },
          { kind: "fix", text: "The clip name and date are no longer burned into the export by default, verified against a real encoded file." },
        ],
      },
      {
        version: "v1.11.0",
        date: "2026.10.13",
        changes: [
          { kind: "improve", text: "Preview URLs no longer carry your file paths: every URL is an opaque handle that reveals nothing about your folder layout." },
          { kind: "improve", text: "Five copies of the URL reader were consolidated into one, and a failure to read one no longer drops the file." },
        ],
      },
      {
        version: "v1.10.0",
        date: "2026.10.13",
        changes: [
          { kind: "new", text: "Keep working in the background: closing the window leaves Recordly in the notification area, ready to record." },
          { kind: "new", text: "The tray is fully localized, and offers to show the controls, stop recording, or stop and quit." },
          { kind: "fix", text: "Fade and cross-dissolve options moved to the Scene section where they belong, after being hidden inside cursor formatting." },
          { kind: "improve", text: "Text formatting uses device fonts only, and downloads nothing." },
        ],
      },
      {
        version: "v1.9.0",
        date: "2026.10.13",
        changes: [
          { kind: "new", text: "Record a region you draw yourself from the launch bar, with the crop held for the whole recording." },
          { kind: "improve", text: "The region is sent in physical units relative to the display, so it stays accurate on scaled screens." },
        ],
      },
      {
        version: "v1.8.0",
        date: "2026.10.13",
        changes: [
          { kind: "fix", text: "Recovered exports that came out completely black, and fixed asset paths that broke after moving files." },
        ],
      },
    ],`;

function replaceReleases(source, replacement) {
	const marker = "    releases: [";
	const start = source.indexOf(marker);
	if (start === -1) throw new Error("releases array not found");
	let depth = 0;
	let index = start + marker.length - 1; // position of the opening bracket
	let inString = false;
	let quote = "";
	let escaped = false;
	for (; index < source.length; index += 1) {
		const char = source[index];
		if (inString) {
			if (escaped) escaped = false;
			else if (char === "\\") escaped = true;
			else if (char === quote) inString = false;
			continue;
		}
		if (char === '"' || char === "'" || char === "`") {
			inString = true;
			quote = char;
			continue;
		}
		if (char === "[") depth += 1;
		else if (char === "]") {
			depth -= 1;
			if (depth === 0) {
				const end = index + 1;
				return source.slice(0, start) + replacement + source.slice(end);
			}
		}
	}
	throw new Error("releases array never closed");
}

function findArraySpans(source) {
	const marker = "    releases: [";
	const spans = [];
	let from = 0;
	while (true) {
		const start = source.indexOf(marker, from);
		if (start === -1) break;
		let depth = 0;
		let index = start + marker.length - 1;
		let inString = false;
		let quote = "";
		let escaped = false;
		for (; index < source.length; index += 1) {
			const char = source[index];
			if (inString) {
				if (escaped) escaped = false;
				else if (char === "\\") escaped = true;
				else if (char === quote) inString = false;
				continue;
			}
			if (char === '"' || char === "'" || char === "`") {
				inString = true;
				quote = char;
				continue;
			}
			if (char === "[") depth += 1;
			else if (char === "]") {
				depth -= 1;
				if (depth === 0) break;
			}
		}
		spans.push([start, index + 1]);
		from = index + 1;
	}
	return spans;
}

const spans = findArraySpans(text);
if (spans.length !== 2) throw new Error(`expected two releases arrays, found ${spans.length}`);

// Splice by exact spans from the original text: replacing one array first would
// move the marker and make the second lookup hit the array just written.
const updated =
	text.slice(0, spans[0][0]) +
	ar +
	text.slice(spans[0][1], spans[1][0]) +
	en +
	text.slice(spans[1][1]);

fs.writeFileSync(file, updated);
const versions = updated.match(/version: "v[\d.]+"/g) ?? [];
console.log(`entries now: ${versions.length}`);
console.log(versions.join(" "));