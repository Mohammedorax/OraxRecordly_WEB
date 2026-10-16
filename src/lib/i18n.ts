/**
 * The OraxRecordly lexicon — every word on the page, in both of its voices.
 * Arabic is the mother tongue; English is its formal echo. One dictionary
 * shape, two souls: `en` is type-checked against `ar` so nothing can ever
 * drift out of sync.
 */

export type Lang = "ar" | "en";

const ar = {
  meta: {
    title: "OraxRecordly — سجّل ما لا يُنسى، وحرّر ما يُروى",
    description:
      "استوديو تسجيل الشاشة وتحرير الفيديو من أوراكس: التقط شاشتك بدقة 4K وستين إطاراً في الثانية، وحرّر بإيقاع خيالك، وشارك تحفتك بلا علامات مائية.",
    ogTitle: "OraxRecordly — كل إبداع عظيم بدأ بلقطة واحدة",
    ogDescription:
      "من ضغطة زر واحدة إلى تحفة تُشار إليها بالبنان — سجّل، حرّر، وشارك بلا حدود.",
  },

  a11y: {
    skipToContent: "تخطَّ إلى المحتوى",
  },

  header: {
    home: "OraxRecordly — الرئيسية",
    logoAlt: "شعار OraxRecordly",
    openMenu: "فتح القائمة (M)",
    closeMenu: "إغلاق القائمة",
    menuLabel: "القائمة الرئيسية",
    download: "تحميل التطبيق (D)",
    toDark: "التبديل إلى الوضع الليلي",
    toLight: "التبديل إلى الوضع النهاري",
    darkCursor: "ليلي",
    lightCursor: "نهاري",
    toEnglish: "التبديل إلى الإنجليزية",
    toArabic: "التبديل إلى العربية",
    langCursorEn: "English",
    langCursorAr: "عربي",
    downloadCursor: "حمّل",
  },

  nav: [
    { label: "عن أوراكس", href: "#about" },
    { label: "الميزات", href: "#features" },
    { label: "قبل / بعد", href: "#contrast" },
    { label: "الميزان", href: "#compare" },
    { label: "الأسئلة الشائعة", href: "#faq" },
    { label: "سجلُّ الإصدارات", href: "#changelog" },
    { label: "التحميل", href: "#download" },
  ],

  hero: {
    logoAlt: "شعار OraxRecordly — إطار تسديد يحيط بنقطة حمراء ومؤشّر أزرق",
    line1: "سجِّلْ ما لا يُنسى.",
    line2: "وحرِّرْ ما يُروى.",
    sub: "من ضغطةِ زرٍّ واحدةٍ إلى عملٍ يُشارُ إليه بالبنان: التقطْ شاشتَك بدقّةِ 4K ونقاءٍ يُضاهي البلّور، وحرِّرْ بإيقاعِ خيالِك، ثم اتركْ عملَك يتحدّثُ عنك — بلا علاماتٍ مائيّةٍ تُطفئُ البريق، وبلا حدود.",
    scrollHint: "مرِّرْ لتُكملَ الحكاية",
    recStart: "سجّل",
    recStop: "أوقف",
    recAria: "محاكاة زر التسجيل — اضغط لبدء العدّ",
    recCaption: "محاكاةٌ صغيرةٌ لما يفعلهُ الزرُّ الأحمرُ داخلَ التطبيق",
    recToastTitle: "حُفِظَ المقطعُ في المكتبة",
  },

  marquee: {
    label: "ومضاتٌ من الاستوديو",
    alts: [
      "لوحة التسجيل العائمة في OraxRecordly مع زر التسجيل واختيار المصدر",
      "محرّر الفيديو في OraxRecordly مع المعاينة والجدول الزمني ولوحة خلفيات المظهر",
      "مكتبة لقطات الشاشة في لوحة التحكم مع البحث والمجلدات",
      "محرّر الصور مع أدوات القلم والسهم والتظليل والتمويه والنص",
      "لوحة الإعدادات: المظهر واللغة وصيغة اللقطات وقالب اسم الملف",
      "تحديد منطقة من الشاشة بالمقابض قبل تأكيد الالتقاط",
    ],
  },

  statement: {
    parts: [
      { text: "هنا لا تُسجَّلُ اللقطاتُ فحسب — " },
      { text: "بل تُصاغُ الحكاية.", highlight: true },
      {
        text: " ضغطةٌ واحدةٌ تلتقطُ ما تراهُ العين، ومحرِّرٌ يفهمُ إيقاعَ خيالِك يقصُّ ويَلمُّ ويُزيِّن، حتى يخرجَ العملُ من بوتقةِ التحريرِ ناصعاً — جاهزاً ليُروى للعالم.",
      },
    ],
  },

  stats: {
    aria: "أرقام أوراكس",
    labels: [
      "دقّةُ 4K وستّونَ إطاراً في الثانية",
      "صيغتا تصدير: MP4 وGIF",
      "ستّةُ أنماطٍ للمؤشّر",
      "علامةٌ مائيّة — ولا واحدة",
    ],
  },

  features: {
    heading1: "كلُّ ما تحتاجهُ حكايتُك،",
    heading2: "تحتَ سقفٍ واحد.",
    side: "سبعُ أدواتٍ تعملُ بانسجامِ.",
    items: [
      {
        title: "تسجيلُ الشاشة",
        category: "الشاشةُ كاملةً أو نافذةٌ بعينِها — بدقّةٍ تصلُ إلى 4K وستّينَ إطاراً",
        alt: "لوحة التسجيل العائمة في OraxRecordly مع زر التسجيل واختيار الشاشة",
      },
      {
        title: "محرِّرُ الجدولِ الزمنيّ",
        category: "قصَّ، ادمجْ، قسِّمْ وغيّرِ السرعة — مع خلفياتٍ وإطارٍ يليقانِ بالمشهد",
        alt: "محرّر الفيديو في OraxRecordly: المعاينة والجدول الزمني ولوحة خلفيات المظهر والإطار",
      },
      {
        title: "لقطاتُ الشاشة",
        category: "التقطْ ما تراهُ دونَ تسجيل، وابحثْ في مكتبتِك واستعِدْ كلَّ لقطة",
        alt: "مكتبة لقطات الشاشة في لوحة تحكم OraxRecordly مع البحث والمجلدات",
      },
      {
        title: "محرِّرُ الصورِ والتعليقات",
        category: "قصٌّ وقلمٌ وسهمٌ وتظليلٌ وتمويهٌ ونص — تصحيحٌ كاملٌ بلا فقدان",
        alt: "محرّر الصور في OraxRecordly مع أدوات القلم والسهم والتظليل والتمويه والنص",
      },
      {
        title: "عربيّةٌ من الأصل",
        category: "واجهةٌ عربيّةٌ بتخطيطٍ كاملٍ من اليمينِ إلى اليسار، واللغةُ فيها خيارُك",
        alt: "لوحة الإعدادات في OraxRecordly: المظهر واللغة وصيغة اللقطات",
      },
      {
        title: "التقاطُ منطقةٍ محدَّدة",
        category: "اسحبِ الإطارَ وحدِّدْ ما تريدُ بالضبط — ثم أكِّدْ بضغطةٍ واحدة",
        alt: "تحديد منطقة من الشاشة بالمقابض قبل تأكيد الالتقاط",
      },
      {
        title: "الاختصاراتُ على الشاشة",
        category:
          "المفاتيحُ التي تضغطُها تظهرُ كشارةِ مفاتيحَ وتُدمَجُ في MP4 أو GIF المصدَّر، ليُعلِّمَ الدرسُ الاختصارَ نفسَه — متوقّفةٌ افتراضيّاً وتُشغَّلُ من الإعدادات ← المؤشر. وهي تحتاجُ التقاطَ ضغطاتِ المفاتيح، ولا يشغّلُهُ التطبيقُ إلا على ويندوز ولينكس — لا على ماك",
        alt: "لوحة إعدادات المحرّر في OraxRecordly مع خيارات المؤشر والمظهر",
      },
    ],
  },

  beforeAfter: {
    heading1: "من الخامِ إلى المبهر.",
    dragHint: "اسحبِ الفاصلَ يميناً ويساراً — أو استخدمْ أسهمَ لوحةِ المفاتيح",
    sliderLabel: "شريط المقارنة بين اللقطة الخام والمونتاج النهائي",
    rawChip: "الخام — قبل",
    editChip: "أوراكس — بعد",
    exportsCaption:
      "يُصدِّرُ الفيديو بصيغتَي MP4 وGIF، ويحفظُ اللقطاتَ PNG أو JPEG — بصيغٍ تناسبُ كلَّ منصةٍ وكلَّ شاشة",
  },

  comparison: {
    heading1: "الكفّةُ راجحة،",
    heading2: "والأرقامُ لا تجامل.",
    side: "ضعِ الأدواتِ في ميزانٍ واحد: قدراتٍ لا وعوداً، وأسعاراً لا ضباباً. قارِنْ بعينِ الخبير، واخترْ ما يشبهُ احترامَك لوقتِك.",
    criterion: "المعيار",
    oraxCol: "أوراكس",
    mobileHint: "اسحبْ أفقياً لاستعراضِ الموازنةِ كاملة",
    footnote: "وفقَ القوائمِ المعلنةِ لدى كلِّ جهةٍ وقتَ الإعداد — الأسعارُ والقدراتُ تتغيّر، والصراحةُ تبقى.",
    caption: "مقارنةُ قدراتِ أوراكس وسعرِها مع OBS Studio وCamtasia وLoom",
    cellLabels: {
      yes: "متوفر",
      no: "غير متوفر",
      limited: "محدود",
      partial: "جزئي",
    },
    rows: [
      {
        label: "التسجيلُ بدقّةٍ تصلُ إلى 4K و60 إطاراً في الثانية",
        cells: ["yes", "yes", "yes", "limited"],
      },
      { label: "محرِّرٌ بخطٍّ زمنيٍّ مدمج", cells: ["yes", "no", "yes", "limited"] },
      { label: "بلا علامةٍ مائيّةٍ — إطلاقاً", cells: ["yes", "yes", "no", "no"] },
      { label: "تعليقاتٌ وسهامٌ وتظليلٌ داخلَ المحرِّر", cells: ["yes", "no", "yes", "no"] },
      { label: "تصدير MP4 وGIF", cells: ["yes", "partial", "yes", "partial"] },
      {
        label: "يُعلِّمُ الاختصارَ على الشاشة داخلَ الفيديو",
        cells: ["yes", "no", "no", "no"],
      },
      { label: "يعملُ دونَ اتصالٍ بالإنترنت", cells: ["yes", "yes", "yes", "no"] },
      { label: "واجهةٌ عربيّةٌ كاملةٌ (RTL)", cells: ["yes", "partial", "no", "no"] },
      {
        label: "يبدأُ السعرُ من",
        cells: [
          { text: "0$ — مجّاناً للأبد", orax: true },
          { text: "0$" },
          { text: "179$ / سنة" },
          { text: "15$ / شهر" },
        ],
      },
    ],
  },

  faq: {
    heading1: "أسئلةٌ تُطرح،",
    heading2: "وأجوبةٌ تُطمئن.",
    para: "جمعْنا أكثرَ ما يسألُ عنه صُنّاعُ المحتوى قبلَ الضغطِ على زرّ التحميل. لم تجدْ سؤالَك؟ راسلْنا — نقرأُ كلَّ رسالة، ونردُّ بلياقةِ صنّاعٍ لا ببرودِ روبوتات.",
    items: [
      {
        q: "هل أوراكس مجانيٌّ حقاً؟ وأين الخدعة؟",
        a: "لا خدعةَ ولا حاشيةَ صغيرة: التطبيقُ مجّانيٌّ بالكامل، ومفتوحُ المصدر. لا اشتراكاتٍ ولا خططَ مدفوعةً ولا بطاقةَ ائتمان، ولا حسابَ تُنشئُه لتبدأ. حمِّلْ، ثبِّتْ، وسجِّل.",
      },
      {
        q: "هل يُثقِلُ التسجيلُ جهازي أو يبطئُ ألعابي؟",
        a: "لا نَعِدُ بأرقامِ أداءٍ لا نستطيعُ إثباتَها: الالتقاطُ على ويندوز يجري عبر مساعدٍ أصليٍّ مخصّص، والتصديرُ يستطيعُ الاستعانةَ بتسريعِ NVIDIA CUDA. أمّا سقفُ الجودة فيتبعُ ما تسمحُ به شاشتُك وجهازُك: ما تراهُ العينُ هو ما يُلتقَط.",
      },
      {
        q: "أين تُحفَظُ تسجيلاتي؟ وهل ترونها؟",
        a: "على جهازِك حصراً، لحظةَ إيقافِ التسجيل. لا حسابَ ولا سحابةَ ولا خادمَ خلفيّ: مكتبتُك تعيشُ في مجلدِ التسجيلاتِ عندك، ولا يُرسَلُ منها شيءٌ إلى أيِّ جهة — لا إلينا ولا إلى غيرِنا.",
      },
      {
        q: "هل تدعمون العربيةَ في التعليقاتِ التوضيحيّةِ والنصوص؟",
        a: "الواجهةُ عربيّةٌ أصالةً لا ترجمةً: التحريرُ من اليمينِ إلى اليسار، والخطوطُ تحترمُ المدّاتِ والتشكيل، والتعليقاتُ التوضيحيّةُ تكتُبُ بالعربيّةِ اتصالاً سليماً لا حروفاً مقطّعة. واللغتانِ المدعومتانِ اثنتان: العربيّةُ والإنجليزيّة، وواجهةٌ تتذكّرُ اختيارَك.",
      },
      {
        q: "على أيِّ نظامٍ يعملُ التطبيق؟ وما متطلّباتُه؟",
        a: "الإصدارُ المنشورُ اليوم لويندوزَ وحدَه: ويندوز 10 (إصدار 19041 أو أحدث) أو ويندوز 11، بنسخة 64 بت. ولا يوجدُ حتى الآن مُثبِّتٌ منشورٌ لماك أو لينكس؛ وأيُّ بناءٍ جديدٍ يظهرُ أوّلاً في صفحةِ الإصدارات على جيت هاب.",
      },
      {
        q: "هل التطبيقُ مفتوحُ المصدر؟ وماذا يعني ذلك لي؟",
        a: "نعم — الشيفرةُ منشورةٌ برخصة AGPL-3.0، وهو فرعٌ مشتقٌّ من مشروع Recordly مفتوح المصدر تُحفَظُ نسبتُه كما هي. تستطيعُ أن تقرأَ ما يعملُ على جهازِك، وأن تبنيَه بنفسِك من المصدر. وليس في الطريقِ بابٌ خلفيٌّ للدفع: ما هو مجّانيٌّ يبقى مجّانياً.",
      },
    ],
  },

  changelog: {
    heading1: "سجلُّ الإصدارات:",
    heading2: "الشفافيّةُ عادةٌ أولاً.",
    para: "كلُّ إصدارٍ يمرُّ من هنا: ما أضفْناه، وما حسّنّاه، وما أصلحْناه — بتاريخه واسمه. لأنَّ الثقةَ لا تُشترى بالإعلانات، بل تُبنى سطراً فوقَ سطر.",
    kinds: { new: "جديد", improve: "تحسين", fix: "إصلاح" },
    releases: [
      {
        version: "v1.13.4",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "تصوير المنطقة على ماك: صار الاقتصاص ممكناً هناك أيضاً، فالمساعد يقصّ كل إطار كما يفعل مع نافذة متتبَّعة. ولهذا عاد خيار «تصوير منطقة» إلى القائمة على ماك بعد أن كان مقتصراً على ويندوز." },
          { kind: "new", text: "صوت النظام على لينكس — واي لاند أيضاً: تُفعَّل ميزتا التقاط PipeWire وحلقة PulseAudio، وهما شرط ظهور خيار «مشاركة صوت النظام» في بوابة لينكس. وإن أعادت البوابة بثّاً بلا مسار صوتي يقول البرنامج ذلك بوضوح ويُغلق الخيار بدل أن يُسجّل صمتاً." },
        ],
      },
      {
        version: "v1.13.3",
        date: "2026.10.16",
        changes: [
          { kind: "fix", text: "صدق التحديث: لم يعُد البرنامج يعرض تحديثاً لا يستطيع تطبيقه. تركيب ‎deb أو ‎rpm يملكه مدير الحزم لا التطبيق، ونسخة ويندوز المحمولة لا تستبدل نفسها، ونسخة ماك غير الموقّعة لا تستطيع تركيب بديل موقّع — فتُنزَّل الحزمة الجديدة بدل زر تحديث لا يفعل شيئاً." },
          { kind: "improve", text: "تقرير التصدير يشمل GIF أيضاً: الوقت ومعدّل الإطارات ونسبة كل مرحلة، لا للفيديو وحده." },
        ],
      },
      {
        version: "v1.13.2",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "تنوّع الإصدارات على كل الأجهزة: نسخة محمولة zip لويندوز تعمل من مجلد بلا تثبيت، ونسختا zip لماك (أبل سيليكون · إنتل) بجانب صورتَي dmg، وثلاث صيغ للينكس." },
          { kind: "new", text: "التشغيل عند بدء النظام على لينكس: يكتب البرنامج مدخلاً قياسياً في ~/.config/autostart كما تفعل كل أسطح مكتب لينكس، ويشير إلى ملف AppImage نفسه لا إلى مسار مؤقّت." },
          { kind: "fix", text: "خيار «تصوير منطقة» يُعرض فقط حيث يُقصّ الإطار فعلاً: كان يظهر على ماك بينما المساعد هناك لا يقصّ، فيختار المستخدمُ منطقةً وتُسجَّل الشاشةُ كاملةً بصمت. الآن يظهر على ويندوز وحده، ومُثبَّت باختبار وحدة واختبارَي واجهة." },
          { kind: "improve", text: "ملفّ تعليمات لكل منصة يُنشر مع الإصدار: اختيار الصيغة، وتجاوز عقبة FUSE في AppImage، وقيود AppArmor في أوبنتو 24.04، وأنّ التحديث الذاتي يخصّ AppImage وحده." },
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
    ],
  },

  labels: {
    tagline: "أوراكس — تأسّس 2026",
    recIndicator: "تسجيل —",
    brandTagline: "أوراكس — تسجيل / تحرير / مشاركة",
    keyboardFirst: "أوراكس — لوحة المفاتيح أولاً",
    keyboardHint: "لوحة المفاتيح — ؟",
    about: "( 01 — عن أوراكس )",
    features: "( 02 — الميزات )",
    rawToRemarkable: "( 03 — من الخام إلى المبهر )",
    balance: "( 04 — الميزان )",
    faq: "( 05 — الأسئلة الشائعة )",
    changelog: "( 06 — سجل الإصدارات )",
    getStarted: "( 07 — ابدأ الآن )",
    shippedContinuously: "يُشحَن باستمرار — منذ 2026",
    showcase: "معرض",
    noBuildYet: "لا إصدار بعد",
    tagWindows: "ويندوز",
    tag64Bit: "64 بت",
    statMetas: ["التقاط بدقة فائقة", "صيغ التصدير", "أنماط المؤشّر", "بلا علامة مائية"],
    showAllReleases: "كلُّ الإصدارات",
    showFewerReleases: "عرض أقل",
  },

  footer: {
    heading1: "كلُّ إبـــــــداعٍ",
    heading2: "بدأ بلقطةٍ.",
    bio: "استوديو التّسجيلِ والتّحريرِ لِمَن يرى الشاشةَ لوحةً والزّمنَ مادّةً خام: صُنّاعُ محتوى، ومعلّمون، ومطوّرون — يحوّلون ومضةَ الفكرِ إلى مشهدٍ خالد.",
    contactTitle: "البريد والدعم",
    privacy: "بلاغات الخصوصية",
    copyright: "© 2026 OraxRecordly — جميعُ الحقوقِ محفوظة",
    keyboard: "اختصاراتُ لوحةِ المفاتيح",
    madeIn: "صُنع في اليمن",
    logoAlt: "شعار OraxRecordly",
    copyToastTitle: "نُسِخَ البريد",
    copyToastDesc: "بين يديك الآن، بلا تحديدٍ ولا لَفٍّ ودوران.",
    copyFailTitle: "تعذّرَ النسخُ تلقائيّاً",
    copyFailDesc: "حدِّدِ العنوانَ وانسخه يدويّاً — يبقى طريقُنا مفتوحاً.",
    copyAria: "نسخ العنوان إلى الحافظة",
  },

  download: {
    button: "حمّلْ أوراكس — مجاناً",
    compact: "حمّل مجاناً",
    title: "اخترْ منصّتَك",
    desc: "مجانيٌّ بالكامل للتسجيلِ والتحرير — بلا علاماتٍ مائيّة، وبلا بطاقةٍ تدفعُ ثمنَ خيالِك.",
    licenseNote: "مجّانيٌّ للاستخدامِ الشخصيِّ والتجاريِّ، برخصة AGPL-3.0",
    allReleases: "كلُّ الإصداراتِ على جيت هاب ↗",
    choosePlatform: "اختر نظامك",
    packages: {
      windowsInstaller: "المثبّت — التحديث التلقائي يعمل معه",
      windowsPortable: "محمولة: تعمل من مجلد أو ذاكرة، بلا تثبيت",
      macArm64Dmg: "أبل سيليكون (M1 وما بعده) · غير موقّعة",
      macX64Dmg: "معالجات إنتل · غير موقّعة",
      macArm64Zip: "أبل سيليكون · بلا صورة قرص",
      macX64Zip: "معالجات إنتل · بلا صورة قرص",
      linuxAppImage: "كل التوزيعات: أوبنتو · فيدورا · آرتش · مانجارو · بلا تثبيت",
      linuxDeb: "أوبنتو · دبيان · منت · Pop!_OS · كالي",
      linuxRpm: "فيدورا · ريد هات · أوبن سوزي",
    },
    platforms: [
      { note: "مُثبِّتُ سطح المكتب لويندوز (64 بت)" },
      { note: "أبل سيليكون ومعالجات إنتل — dmg و zip" },
      { note: "AppImage لكل التوزيعات · deb لتلك العائلات" },
    ],
    portable: "محمولة — تعمل من مجلد بلا تثبيت",
    linuxFormats: {
      AppImage: "— يعمل في كل التوزيعات بلا تثبيت",
      deb: "— دبيان وأوبنتو وما يتفرّع عنها",
      rpm: "— فيدورا وريد هات وأوبن سوزي",
    },
    macFormats: {
      arm64: "— أبل سيليكون (غير موقّع)",
      x64: "— معالجات إنتل (غير موقّع)",
    },
    toastTitle: "انطلقتْ رحلةُ التنزيل",
    toastDesc: "جارٍ إحضارُ OraxRecordly v1.13.4 إلى {platform} — أهلاً بك في الحكاية.",
  },

  demo: {
    button: "شاهد العرض",
    play: "تشغيل",
    pause: "إيقاف مؤقت",
    timeline: "شريط التقدم",
    title: "معاينة حيّة لـ OraxRecordly",
    desc: "عرض تفاعلي يمثّل رحلة التسجيل والتحرير وحفظ اللقطات.",
    scenes: ["المشهدُ الأول — التسجيل", "المشهدُ الثاني — التحرير", "المشهدُ الثالث — اللقطات"],
  },

  shortcuts: {
    title: "أصابعُك أسرعُ من الفأرة.",
    desc: "قيادةُ الموقعِ من صفِّ الارتكازِ نفسِه الذي يقودُ التطبيق — حروفٌ قصيرةٌ تفتحُ الأبواب، وتُغنيكَ عن التقلّبِ في الصفحة.",
    footnote: "تعملُ في كلِّ صفحاتِ الموقع — بلا استثناءٍ وبلا انتظار",
    items: [
      { keys: ["M"], text: "القائمةُ الرئيسيّة — افتحْها أو أغلِقْها" },
      { keys: ["D"], text: "نافذةُ التحميل — اخترْ منصّتَك وانطلقْ" },
      { keys: ["P"], text: "المعاينةُ الحيّة — من التسجيلِ إلى التصدير" },
      { keys: ["T"], text: "إلى القمّة — عُدْ إلى العنوانِ الأوّل" },
      { keys: ["؟", "?"], text: "هذه اللوحةُ نفسُها" },
      { keys: ["Esc"], text: "أغلِقْ ما فتحتَه" },
    ],
  },

  sticky: {
    title: "OraxRecordly v1.13.4",
    sub: "مجانيٌّ — بلا علاماتٍ مائيّة",
  },

  backTop: {
    aria: "العودة إلى أعلى الصفحة (T)",
    cursor: "إلى القمة",
  },

  notFound: {
    title: "هذه اللقطةُ غيرُ موجودة.",
    para: "بحثَ محرِّرُنا في كلِّ الجداولِ الزمنيّةِ والمكتباتِ والأرشيفات، فلم يعثرْ على هذه الصفحةِ في أيِّ مشهد. ربّما حُذفتْ في المونتاجِ الأخير — يحدثُ هذا لأحسنِ الصنّاع.",
    cta: "عُدْ إلى الاستوديو",
    logoAlt: "شعار OraxRecordly",
  },
};

export type Dict = typeof ar;

const en: Dict = {
  meta: {
    title: "OraxRecordly — Record what stuns, edit what endures",
    description:
      "The OraxRecordly screen-recording and video-editing studio: capture your screen in crystalline 4K at sixty frames per second, edit at the pace of your imagination, and share your masterpiece with no watermarks.",
    ogTitle: "OraxRecordly — Every great creation began with a single frame",
    ogDescription:
      "From one click to a masterpiece people point at — record, edit, and share without limits.",
  },

  a11y: {
    skipToContent: "Skip to content",
  },

  header: {
    home: "OraxRecordly — Home",
    logoAlt: "OraxRecordly logo",
    openMenu: "Open menu (M)",
    closeMenu: "Close menu",
    menuLabel: "Main menu",
    download: "Download the app (D)",
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    darkCursor: "Dark",
    lightCursor: "Light",
    toEnglish: "Switch to English",
    toArabic: "Switch to Arabic",
    /* Same endonyms as the Arabic dictionary: the cursor label always names
       the language the button will switch TO. */
    langCursorEn: "English",
    langCursorAr: "عربي",
    downloadCursor: "Get",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Before / After", href: "#contrast" },
    { label: "The Balance", href: "#compare" },
    { label: "FAQ", href: "#faq" },
    { label: "Changelog", href: "#changelog" },
    { label: "Download", href: "#download" },
  ],

  hero: {
    logoAlt: "OraxRecordly logo — a viewfinder frame around a red target and a blue cursor",
    line1: "Record what stuns.",
    line2: "Edit what endures.",
    sub: "From a single click to a work people point at: capture your screen in 4K with glass-clear fidelity, edit at the pace of your imagination, then let the work speak for you — no watermarks dimming the shine, and no limits.",
    scrollHint: "Scroll to continue the story",
    recStart: "Record",
    recStop: "Stop",
    recAria: "Recording button simulation — press to start the count",
    recCaption: "A small simulation of what the red button does inside the app",
    recToastTitle: "Clip saved to your library",
  },

  marquee: {
    label: "Flashes from the studio",
    alts: [
      "OraxRecordly's floating recording HUD with the record button and source picker",
      "The OraxRecordly editor with the preview, the timeline and the appearance panel",
      "The screenshot library on the dashboard with search and folders",
      "The image editor with its pen, arrow, highlighter, pixelate and text tools",
      "The settings panel: appearance, language, screenshot format and file-name template",
      "Dragging the handles to select a screen region before confirming the capture",
    ],
  },

  statement: {
    parts: [
      { text: "Here, footage is not merely recorded — " },
      { text: "the story is forged.", highlight: true },
      {
        text: " One click captures what the eye sees, and an editor that understands the rhythm of your imagination cuts, gathers and polishes, until the work leaves the editing crucible radiant — ready to be told to the world.",
      },
    ],
  },

  stats: {
    aria: "Orax in numbers",
    labels: [
      "4K at sixty frames per second",
      "Two export formats: MP4 & GIF",
      "Six cursor styles",
      "Watermarks — not one",
    ],
  },

  features: {
    heading1: "Everything your story needs,",
    heading2: "under one roof.",
    side: "Seven instruments playing in the harmony of a polished orchestra: each knows its part, and all of them aspire to dazzle your audience — from the first frame to the final applause.",
    items: [
      {
        title: "Screen Recording",
        category: "The full screen or a single window — up to 4K at sixty frames per second",
        alt: "OraxRecordly's floating recording HUD with the record button and source picker",
      },
      {
        title: "Timeline Editor",
        category: "Cut, merge, split and change speed — with backgrounds and a frame worthy of the scene",
        alt: "The OraxRecordly editor: preview, timeline and the appearance panel with backgrounds and frame controls",
      },
      {
        title: "Screenshots",
        category: "Capture what you see without recording, then search and reopen every shot",
        alt: "The screenshot library on the OraxRecordly dashboard with search and folders",
      },
      {
        title: "Image Editor & Annotations",
        category: "Crop, pen, arrow, highlight, pixelate and text — with a full lossless undo",
        alt: "The OraxRecordly image editor with its pen, arrow, highlighter, pixelate and text tools",
      },
      {
        title: "Arabic by Origin",
        category: "An Arabic interface with a full right-to-left layout — and the language stays your choice",
        alt: "The OraxRecordly settings panel: appearance, language and screenshot options",
      },
      {
        title: "Region Capture",
        category: "Drag the frame and pick exactly what you mean — then confirm with one press",
        alt: "Dragging the handles to select a screen region before confirming the capture",
      },
      {
        title: "Shortcuts on Screen",
        category:
          "The keys you press appear as key caps and burn into the exported MP4 or GIF, so a lesson can teach the shortcut itself — off by default, set in Settings → Cursor. It needs keystroke capture, which the app runs on Windows and Linux only — not on macOS",
        alt: "The OraxRecordly editor settings panel with the Cursor and Appearance options",
      },
    ],
  },

  beforeAfter: {
    heading1: "From raw to remarkable.",
    dragHint: "Drag the divider left and right — or use your arrow keys",
    sliderLabel: "Comparison slider between raw footage and the final edit",
    rawChip: "RAW — BEFORE",
    editChip: "ORAX — AFTER",
    exportsCaption:
      "Exports video as MP4 or GIF, and saves stills as PNG or JPEG — in formats to fit every platform and every screen",
  },

  comparison: {
    heading1: "The scale tips,",
    heading2: "and numbers don't flatter.",
    side: "Put the tools on one scale: capabilities, not promises; prices, not fog. Compare with an expert's eye, and choose what matches your respect for your own time.",
    criterion: "Criterion",
    oraxCol: "Orax",
    mobileHint: "Drag sideways to browse the full balance",
    footnote: "Per each vendor's published listings at the time of writing — prices and capabilities change, candour stays.",
    caption: "Comparison of Orax's capabilities and price against OBS Studio, Camtasia and Loom",
    cellLabels: {
      yes: "Available",
      no: "Not available",
      limited: "Limited",
      partial: "Partial",
    },
    rows: [
      {
        label: "Recording up to 4K at 60fps",
        cells: ["yes", "yes", "yes", "limited"],
      },
      { label: "Built-in timeline editor", cells: ["yes", "no", "yes", "limited"] },
      { label: "No watermark — ever", cells: ["yes", "yes", "no", "no"] },
      { label: "Annotations and highlights inside the editor", cells: ["yes", "no", "yes", "no"] },
      { label: "MP4 & GIF export", cells: ["yes", "partial", "yes", "partial"] },
      {
        label: "Teaches the shortcut on screen, inside the video",
        cells: ["yes", "no", "no", "no"],
      },
      { label: "Works fully offline", cells: ["yes", "yes", "yes", "no"] },
      { label: "Complete Arabic interface (RTL)", cells: ["yes", "partial", "no", "no"] },
      {
        label: "Starting price",
        cells: [
          { text: "$0 — free forever", orax: true },
          { text: "$0" },
          { text: "$179 / yr" },
          { text: "$15 / mo" },
        ],
      },
    ],
  },

  faq: {
    heading1: "Questions asked,",
    heading2: "answers that reassure.",
    para: "We gathered what content makers ask most before pressing the download button. Didn't find your question? Write to us — we read every message and reply with makers' courtesy, not robots' chill.",
    items: [
      {
        q: "Is Orax really free? Where's the catch?",
        a: "No catch, and no fine print: the app is completely free and open source. No subscriptions, no paid plans, no credit card, and no account to create before you start. Download it, install it, record.",
      },
      {
        q: "Will recording weigh on my machine or slow my games?",
        a: "We won't promise performance figures we can't prove: on Windows the capture runs through a purpose-built native helper, and export can use NVIDIA CUDA acceleration. The quality ceiling is whatever your screen and machine can give: what your eye sees is what gets captured.",
      },
      {
        q: "Where are my recordings kept? Can you see them?",
        a: "On your machine, exclusively, the moment you stop recording. No account, no cloud, no backend: your library lives in the recordings folder on your own disk, and nothing is sent anywhere — not to us, not to anyone.",
      },
      {
        q: "Do you support Arabic in annotations and text?",
        a: "The interface is Arabic by origin, not translation: editing runs right-to-left, the typography honours lengtheners and diacritics, and annotations write in properly connected Arabic — never chopped letters. There are exactly two locales, Arabic and English, each with a complete layout, and the interface remembers your choice.",
      },
      {
        q: "Which systems does it run on, and what does it need?",
        a: "The published release is Windows only: Windows 10 (build 19041 or newer) or Windows 11, 64-bit. No macOS or Linux installer has been published yet; any new build shows up first on the GitHub releases page.",
      },
      {
        q: "Is the app open source? What does that mean for me?",
        a: "Yes — the source is published under the AGPL-3.0 licence. OraxRecordly is a fork of the open-source Recordly project, and that attribution is kept intact. You can read what runs on your machine, and build it yourself from source. And there is no hidden toll on the road: what is free stays free.",
      },
    ],
  },

  changelog: {
    heading1: "The changelog:",
    heading2: "transparency as a habit.",
    para: "Every release passes through here: what we added, what we improved, what we fixed — with its date and its name. Trust is not bought with ads; it is built one line atop another.",
    kinds: { new: "NEW", improve: "IMPROVED", fix: "FIXED" },
    releases: [
      {
        version: "v1.13.4",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "Region recording on macOS: the recorder now crops each frame the way it already cropped a tracked window, so the launch menu offers \"Record a region\" there again instead of withholding it on Windows alone." },
          { kind: "new", text: "System audio on Linux, Wayland included: PipeWire capture and PulseAudio loopback are switched on, which is what makes the system's share-audio option exist at all. If the portal still answers with a video-only stream, the app says so and turns the option off rather than recording silence." },
        ],
      },
      {
        version: "v1.13.3",
        date: "2026.10.16",
        changes: [
          { kind: "fix", text: "Honest updates: the app no longer offers an update it cannot install. A deb or rpm installation is owned by the package manager, the portable Windows build cannot replace itself, and the unsigned macOS build cannot install a signed replacement - those users download the newer package instead of pressing a button that does nothing." },
          { kind: "improve", text: "The export report now covers GIF as well: the same elapsed time, average frame rate and per-phase shares, not just for video." },
        ],
      },
      {
        version: "v1.13.2",
        date: "2026.10.16",
        changes: [
          { kind: "new", text: "More than one way to install on every platform: a portable Windows zip that runs from a folder without installing, macOS zips (Apple Silicon and Intel) beside the disk images, and three Linux formats." },
          { kind: "new", text: "Start at login on Linux: the app writes a standard entry to ~/.config/autostart, pointing at the AppImage itself rather than a temporary mount path." },
          { kind: "fix", text: "Region recording is offered only where frames are really cropped: it used to appear on macOS, where the recorder cannot crop, so a drawn area silently recorded the whole screen. It is now Windows-only, pinned by a unit test and two UI tests." },
          { kind: "improve", text: "A per-platform install note shipped with each release: which file to pick, the FUSE workaround for the AppImage, the AppArmor restriction on Ubuntu 24.04, and the fact that only the AppImage updates itself." },
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
    ],
  },

  labels: {
    tagline: "ORAXRECORDLY — EST. 2026",
    recIndicator: "REC —",
    brandTagline: "ORAXRECORDLY — REC / EDIT / SHARE",
    keyboardFirst: "ORAXRECORDLY — KEYBOARD FIRST",
    keyboardHint: "KEYBOARD — ?",
    about: "( 01 — ABOUT ORAXRECORDLY )",
    features: "( 02 — FEATURES )",
    rawToRemarkable: "( 03 — RAW TO REMARKABLE )",
    balance: "( 04 — THE BALANCE )",
    faq: "( 05 — FAQ )",
    changelog: "( 06 — CHANGELOG )",
    getStarted: "( 07 — GET STARTED )",
    shippedContinuously: "SHIPPED CONTINUOUSLY — SINCE 2026",
    showcase: "SHOWCASE",
    noBuildYet: "NO BUILD YET",
    tagWindows: "WINDOWS",
    tag64Bit: "64-BIT",
    statMetas: ["ULTRA HD CAPTURE", "EXPORT FORMATS", "CURSOR STYLES", "NO WATERMARKS"],
    showAllReleases: "All releases",
    showFewerReleases: "Show fewer",
  },

  footer: {
    heading1: "Every creation",
    heading2: "began with a single frame.",
    bio: "The recording and editing studio for those who see the screen as a canvas and time as raw material: content makers, educators and developers — turning the flash of an idea into a scene that lasts.",
    contactTitle: "Mail & support",
    privacy: "Privacy notices",
    copyright: "© 2026 OraxRecordly — All rights reserved",
    keyboard: "Keyboard shortcuts",
    madeIn: "MADE IN YEMEN",
    logoAlt: "OraxRecordly logo",
    copyToastTitle: "Address copied",
    copyToastDesc: "In your hands now — no selecting, no circling around.",
    copyFailTitle: "Automatic copy failed",
    copyFailDesc: "Select the address and copy it manually — our door stays open.",
    copyAria: "Copy the address to the clipboard",
  },

  download: {
    button: "Get Orax — free",
    compact: "Get it free",
    title: "Choose your platform",
    desc: "Fully free for recording and editing — no watermarks, and no card paying for your imagination.",
    licenseNote: "Free for personal and commercial use, under the AGPL-3.0 licence",
    allReleases: "All releases on GitHub ↗",
    choosePlatform: "Choose your system",
    packages: {
      windowsInstaller: "The installer - automatic updates work with it",
      windowsPortable: "Portable: runs from a folder or a stick, nothing to install",
      macArm64Dmg: "Apple Silicon (M1 and later) · unsigned",
      macX64Dmg: "Intel Macs · unsigned",
      macArm64Zip: "Apple Silicon · no disk image",
      macX64Zip: "Intel Macs · no disk image",
      linuxAppImage: "Every distribution: Ubuntu · Fedora · Arch · Manjaro · nothing to install",
      linuxDeb: "Ubuntu · Debian · Mint · Pop!_OS · Kali",
      linuxRpm: "Fedora · RHEL · openSUSE",
    },
    platforms: [
      { note: "The desktop installer for Windows (64-bit)" },
      { note: "Apple Silicon and Intel Macs - dmg and zip" },
      { note: "AppImage for every distribution · deb and rpm for their families" },
    ],
    portable: "portable - runs from a folder, nothing to install",
    linuxFormats: {
      AppImage: "- runs on every distribution, nothing to install",
      deb: "- Debian, Ubuntu and their descendants",
      rpm: "- Fedora, RHEL and openSUSE",
    },
    macFormats: {
      arm64: "- Apple Silicon (unsigned)",
      x64: "- Intel Macs (unsigned)",
    },
    toastTitle: "The download has launched",
    toastDesc: "Bringing OraxRecordly v1.13.4 to {platform} — welcome to the story.",
  },

  demo: {
    button: "Watch the demo",
    play: "Play",
    pause: "Pause",
    timeline: "Progress bar",
    title: "OraxRecordly live preview",
    desc: "An interactive walkthrough of the record, edit and capture journey.",
    scenes: ["Scene one — Recording", "Scene two — Editing", "Scene three — Screenshots"],
  },

  shortcuts: {
    title: "Your fingers are faster than the mouse.",
    desc: "Steer the site from the same home row that steers the app — short letters that open doors and spare you the scrolling.",
    footnote: "Works on every page of the site — no exceptions, no waiting",
    items: [
      { keys: ["M"], text: "The main menu — open it or close it" },
      { keys: ["D"], text: "The download window — pick your platform and go" },
      { keys: ["P"], text: "The live preview — from recording to export" },
      { keys: ["T"], text: "To the top — return to the headline" },
      { keys: ["?"], text: "This very panel" },
      { keys: ["Esc"], text: "Close what you opened" },
    ],
  },

  sticky: {
    title: "OraxRecordly v1.13.4",
    sub: "Free — no watermarks",
  },

  backTop: {
    aria: "Back to the top of the page (T)",
    cursor: "To the top",
  },

  notFound: {
    title: "This frame does not exist.",
    para: "Our editor searched every timeline, library and archive and could not find this page in any scene. It was probably cut in the final edit — it happens to the best of makers.",
    cta: "Back to the studio",
    logoAlt: "OraxRecordly logo",
  },
};

export const DICTS: Record<Lang, Dict> = { ar, en };
