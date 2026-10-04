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
    { label: "الأصوات", href: "#voices" },
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
      "محرّر الفيديو مع الجدول الزمني ولوحة الخلفيات والإطار",
      "مكتبة لقطات الشاشة في لوحة التحكم مع البحث والمجلدات",
      "محرّر الصور مع أدوات القلم والسهم والتظليل والتمويه والنص",
      "لوحة الإعدادات: المظهر واللغة وصيغة اللقطات وقالب اسم الملف",
      "تحديد منطقة من الشاشة بالمقابض قبل تأكيد الالتقاط",
    ],
  },

  ticker: {
    aria: "شريط عبارات أوراكس",
    phrases: ["سجِّلْ بحرِّيَّة", "حرِّرْ بذكاء", "شارِكْ بثقة", "أبْهِرْ بلا حدود"],
  },

  statement: {
    parts: [
      { text: "هنا لا تُسجَّلُ اللقطاتُ فحسب — " },
      { text: "بل تُصاغُ الحكاية.", highlight: true },
      {
        text: " ضغطةٌ واحدةٌ تلتقطُ ما تراهُ العين، ومحرِّرٌ يفهمُ إيقاعَ خيالِك يقصُّ ويَلمُّ ويُزيِّن، حتى يخرجَ العملُ من بوتقةِ التحريرِ ناصعاً — جاهزاً ليُروى للعالم.",
      },
    ],
    para: "صنعْنا كلَّ تفصيلةٍ في أوراكس لتؤدّيَ دورَها بصمتٍ وكفاءة: خوارزمياتُ ضغطٍ تحفظُ نقاءَ كلِّ إطارٍ كما التقطتْهُ العين، وأدواتُ قصٍّ أمضى من مبضعِ الجرّاح، وواجهةٌ تعرفُ متى تختفي ليتقدَّمَ فنُّك إلى الواجهة. أنتَ تحكي — ونحنْ نتكفَّلُ بالباقي.",
  },

  stats: {
    aria: "أرقام أوراكس",
    labels: [
      "دقّةُ 4K وستّونَ إطاراً في الثانية",
      "صيغتا تصدير: MP4 وGIF",
      "أحدَ عشرَ نمطاً للمؤشّر",
      "علامةٌ مائيّة — ولا واحدة",
    ],
  },

  features: {
    heading1: "كلُّ ما تحتاجهُ حكايتُك،",
    heading2: "تحتَ سقفٍ واحد.",
    side: "ستُّ أدواتٍ تعملُ بانسجامِ أوركسترا مُتقنة: كلٌّ يعرفُ دورَه، وجميعُها تصبو إلى إبهارِ جمهورك — من اللقطةِ الأولى حتى التصفيقِ الأخير.",
    items: [
      {
        title: "تسجيلُ الشاشة",
        category: "الشاشةُ كاملةً أو نافذةٌ بعينِها — بدقّةٍ تصلُ إلى 4K وستّينَ إطاراً",
        alt: "لوحة التسجيل العائمة في OraxRecordly مع زر التسجيل واختيار الشاشة",
      },
      {
        title: "محرِّرُ الجدولِ الزمنيّ",
        category: "قصَّ، ادمجْ، قسِّمْ وغيّرِ السرعة — مع خلفياتٍ وإطارٍ يليقانِ بالمشهد",
        alt: "محرّر الفيديو في OraxRecordly: الجدول الزمني ولوحة الخلفيات والإطار",
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
    ],
  },

  beforeAfter: {
    heading1: "من الخامِ،",
    heading2: "إلى المبهر.",
    side: "اسحبِ الفاصلَ بيدِك وشاهدْ: هذا ما تفعلهُ أوراكس بلقطةٍ خامٍ في ثوانٍ — المشهدُ نفسُه، بعد أن مرَّ على يدِ المونتير.",
    dragHint: "اسحبِ الفاصلَ يميناً ويساراً — أو استخدمْ أسهمَ لوحةِ المفاتيح",
    sliderLabel: "شريط المقارنة بين اللقطة الخام والمونتاج النهائي",
    rawChip: "RAW — BEFORE",
    editChip: "ORAX — AFTER",
    exportsCaption:
      "يُصدِّرُ الفيديو بصيغتَي MP4 وGIF، ويحفظُ اللقطاتَ PNG أو JPEG — بصيغٍ تناسبُ كلَّ منصةٍ وكلَّ شاشة",
  },

  testimonials: {
    heading1: "قالوا عن أوراكس،",
    heading2: "وتركوا الشهادة.",
    side: "أربعةُ أصواتٍ من صنّاعِ المحتوى والتعليمِ والهندسة — يحكونَ تجربتَهم مع الأداةِ التي وعدْنا بأن تختفيَ أمامَ فنِّهم.",
    prev: "الشهادة السابقة",
    next: "الشهادة التالية",
    items: [
      {
        quote:
          "درّستُ عبر الشاشةِ سنواتٍ، ولم أجدْ أداةً تُحترِمُ وقتيَ كأوراكس: أضغطُ زرّاً واحداً، فيخرجُ الدرسُ مصقولاً كأنه فيلمٌ وثائقيّ. طلّابي ظنّوا أنني استأجرتُ مونتيراً — والسرُّ زرٌّ أزرقُ صغير.",
        name: "ريم الحربي",
        role: "مؤسِّسة أكاديميّة «نُقطة» التعليميّة",
        initials: "رح",
      },
      {
        quote:
          "أرفعُ للفريقِ أخطاءَ الألعابِ التي أكتشفُها يوميّاً: قصٌّ على مرمى الإطار، وتصديرٌ يسبقُ أن يبردَ فنجانُ قهوتي. أوراكس ليس أداةً في سلسلةِ عملي — لقد صارَ العملي.",
        name: "يوسف عبدالرحمن",
        role: "مهندسُ برمجياتٍ ومُختبرُ ألعاب",
        initials: "يع",
      },
      {
        quote:
          "المؤشّراتُ والتعليقاتُ التوضيحيّةُ وحدها اختصرتْ عليَّ ساعاتِ مونتاج. جمهوري صار يسألني: بأيِّ استوديو تُصوِّرين؟ أبتسمُ وأقول: الاستوديوُ كلُّهُ في نافذةٍ واحدة.",
        name: "مها القحطاني",
        role: "صانعةُ محتوىً تعليميّ — 2.4 مليون متابع",
        initials: "مق",
      },
      {
        quote:
          "سجّلتُ دورةً كاملةً بمئةٍ وعشرينَ محاضرةً دون أن أعيدَ لقطةً واحدةً بسببِ الأداة. هذا هو المديحُ الحقيقيّ: أن تختفيَ الأداة، وتبقى المادة.",
        name: "د. سلطان العامري",
        role: "أستاذُ هندسةِ الحاسوب ومدرِّبٌ تقنيّ",
        initials: "سع",
      },
    ],
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
        version: "v1.4.2",
        date: "2026.10.04",
        changes: [
          { kind: "new", text: "خطُّ SA Hazm يحلُّ محلَّ ثماريان سيريف ديسبلاي في الواجهة كلِّها" },
          { kind: "improve", text: "اختباراتُ الإلكترون صارت مستقلّةً عن المنصّة، فلا تتوقّفُ على نظامِ البناء" },
        ],
      },
      {
        version: "v1.4.1",
        date: "2026.10.04",
        changes: [
          { kind: "new", text: "إصداراتُ ويندوز تُنشَرُ آليّاً من الوسم مباشرةً" },
          { kind: "improve", text: "إزالةُ موادِّ التمويلِ من المستودع — لا طلبَ مالٍ في أيِّ مكان" },
        ],
      },
      {
        version: "v1.4.0",
        date: "2026.10.02",
        changes: [
          { kind: "new", text: "لقطاتُ الشاشة: التقاطٌ كاملٌ أو منطقةٌ محدَّدةٌ أو مصدرٌ بعينه، بمُختصَرٍ عامٍّ يعملُ من أيِّ تطبيق" },
          { kind: "new", text: "محرّرُ صورٍ مدمج: قصٌّ وقلمٌ وسهمٌ وأشكالٌ وتظليلٌ وتمويهٌ ونص، بتراجعٍ كامل" },
          { kind: "new", text: "واجهةٌ عربيّةٌ أولاً بتخطيطٍ كاملٍ من اليمينِ إلى اليسار، ولغتانِ فقط: العربيّةُ والإنجليزيّة" },
          { kind: "improve", text: "إيقافُ التسجيلِ بعد خمولٍ طويل: من 23–42 ثانيةً إلى 0.1–1.3 ثانية، ومقطعُ 20 ثانيةً من 57.9 إلى 3.1 ميجابايت" },
          { kind: "improve", text: "إزالةُ تسجيلِ الدخولِ والسحابةِ نهائيّاً — التطبيقُ يعملُ محليّاً على جهازِك" },
          { kind: "fix", text: "كتابةُ ذيلِ ملفِّ التسجيلِ قبل إنهاءِ مساعدِ الالتقاط، فلا يُفقَدُ مقطعٌ بعد شاشةٍ ساكنة" },
        ],
      },
    ],
  },

  newsletter: {
    heading1: "ديوانُ أوراكس:",
    heading2: "رسالةٌ شهريّةٌ تليقُ بصانعِ المحتوى.",
    para: "أسرارُ المونتاج، وقوالبُ حصريّةٌ قبلَ صدورِها، ودروسٌ مصغّرةٌ في فنِّ الحكاية البصريّة — تصلُكْ في رسالةٍ واحدةٍ أنيقةٍ كلَّ شهر، لا مزعجةً في كلِّ ساعة.",
    emailLabel: "بريدك الإلكتروني",
    button: "انضمْ إلى الديوان",
    footnote: "رسالةٌ واحدةٌ شهريّاً — لا إزعاج، ولا مشاركةُ بريدِك مع أحد، وإلغاءٌ بضغطة",
    toastTitle: "وصلتَ الديوان",
    errorUnexpected: "حدثَ خطأٌ غيرُ متوقع",
    errorNetwork: "تعذَّرَ الوصولُ إلى الخادم — جرِّبْ بعدَ لحظات",
    api: {
      invalid: "صيغةُ البريدِ الإلكترونيِّ غيرُ صحيحة",
      duplicate: "بريدُك في الديوانِ من قبلُ — لا تنسَ أن تتفقّدَ رسائلَك",
      welcome: "أهلاً بك في الديوان — أولُ رسالةٍ في طريقِها إليك",
      server: "تعذَّر إكمالُ الطلب — جرِّبْ بعدَ لحظات",
    },
  },

  footer: {
    heading1: "كلُّ إبداعٍ عظيمٍ",
    heading2: "بدأ بلقطةٍ واحدة.",
    bio: "استوديو التّسجيلِ والتّحريرِ لِمَن يرى الشاشةَ لوحةً والزّمنَ مادّةً خام: صُنّاعُ محتوى، ومعلّمون، ومطوّرون — يحوّلون ومضةَ الفكرِ إلى مشهدٍ خالد.",
    socialsTitle: "تواصل معنا",
    contactTitle: "البريد والدعم",
    privacy: "بلاغات الخصوصية",
    copyright: "© 2026 OraxRecordly — جميعُ الحقوقِ محفوظة",
    keyboard: "اختصاراتُ لوحةِ المفاتيح",
    logoAlt: "شعار OraxRecordly",
    socials: [
      { label: "X / تويتر", href: "https://x.com" },
      { label: "يوتيوب", href: "https://youtube.com" },
      { label: "إنستغرام", href: "https://instagram.com" },
      { label: "دريبل", href: "https://dribbble.com" },
      { label: "جيت هاب", href: "https://github.com" },
    ],
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
    platforms: [
      { note: "مُثبِّتُ سطح المكتب لويندوز (64 بت)" },
      { note: "لا يوجد إصدار منشور بعد — تابِعْ صفحةَ الإصدارات" },
      { note: "لا يوجد إصدار منشور بعد — تابِعْ صفحةَ الإصدارات" },
    ],
    toastTitle: "انطلقتْ رحلةُ التنزيل",
    toastDesc: "جارٍ إحضارُ OraxRecordly v1.4.2 إلى {platform} — أهلاً بك في الحكاية.",
  },

  demo: {
    button: "شاهد العرض — 01:24",
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
    title: "OraxRecordly v1.4.2",
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
    { label: "Voices", href: "#voices" },
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
      "The video editor with the timeline, background panel and frame controls",
      "The screenshot library on the dashboard with search and folders",
      "The image editor with its pen, arrow, highlighter, pixelate and text tools",
      "The settings panel: appearance, language, screenshot format and file-name template",
      "Dragging the handles to select a screen region before confirming the capture",
    ],
  },

  ticker: {
    aria: "Orax phrases ribbon",
    phrases: ["Record freely", "Edit wisely", "Share confidently", "Dazzle without limits"],
  },

  statement: {
    parts: [
      { text: "Here, footage is not merely recorded — " },
      { text: "the story is forged.", highlight: true },
      {
        text: " One click captures what the eye sees, and an editor that understands the rhythm of your imagination cuts, gathers and polishes, until the work leaves the editing crucible radiant — ready to be told to the world.",
      },
    ],
    para: "We built every detail of Orax to do its job in silence and with efficiency: compression algorithms that keep every frame as pure as the eye caught it, cutting tools sharper than a surgeon's scalpel, and an interface that knows when to step aside so your art takes the stage. You tell the story — we carry the rest.",
  },

  stats: {
    aria: "Orax in numbers",
    labels: [
      "4K at sixty frames per second",
      "Two export formats: MP4 & GIF",
      "Eleven cursor styles",
      "Watermarks — not one",
    ],
  },

  features: {
    heading1: "Everything your story needs,",
    heading2: "under one roof.",
    side: "Six instruments playing in the harmony of a polished orchestra: each knows its part, and all of them aspire to dazzle your audience — from the first frame to the final applause.",
    items: [
      {
        title: "Screen Recording",
        category: "The full screen or a single window — up to 4K at sixty frames per second",
        alt: "OraxRecordly's floating recording HUD with the record button and source picker",
      },
      {
        title: "Timeline Editor",
        category: "Cut, merge, split and change speed — with backgrounds and a frame worthy of the scene",
        alt: "The OraxRecordly video editor: timeline, background panel and frame controls",
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
    ],
  },

  beforeAfter: {
    heading1: "From the raw,",
    heading2: "to the remarkable.",
    side: "Drag the divider with your own hand and watch: this is what Orax does to raw footage in seconds — the very same scene, after it passed through the editor's hands.",
    dragHint: "Drag the divider left and right — or use your arrow keys",
    sliderLabel: "Comparison slider between raw footage and the final edit",
    rawChip: "RAW — BEFORE",
    editChip: "ORAX — AFTER",
    exportsCaption:
      "Exports video as MP4 or GIF, and saves stills as PNG or JPEG — in formats to fit every platform and every screen",
  },

  testimonials: {
    heading1: "They spoke of Orax,",
    heading2: "and left their testimony.",
    side: "Four voices from content makers, educators and engineers — telling of the tool we promised would disappear before their art.",
    prev: "Previous testimonial",
    next: "Next testimonial",
    items: [
      {
        quote:
          "I have taught through screens for years and never found a tool that respects my time like Orax: one press of a button and the lesson comes out polished like a documentary. My students thought I hired an editor — the secret is one little blue button.",
        name: "Reem Al-Harbi",
        role: "Founder of Nuqta Academy",
        initials: "RH",
      },
      {
        quote:
          "I file the game bugs I discover daily to my team: cuts to the exact frame, exports faster than my coffee cools. Orax is not a link in my workflow — it has become the workflow.",
        name: "Yousef Abdulrahman",
        role: "Software engineer & game tester",
        initials: "YA",
      },
      {
        quote:
          "The cursors and annotations alone saved me hours of editing. My audience started asking which studio I shoot in. I smile and say: the whole studio fits in one window.",
        name: "Maha Al-Qahtani",
        role: "Educational content maker — 2.4M followers",
        initials: "MQ",
      },
      {
        quote:
          "I recorded an entire course of a hundred and twenty lectures without re-shooting a single take because of the tool. That is real praise: the tool disappears, and the material remains.",
        name: "Dr. Sultan Al-Amri",
        role: "Professor of computer engineering & technical trainer",
        initials: "SA",
      },
    ],
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
        version: "v1.4.2",
        date: "2026.10.04",
        changes: [
          { kind: "new", text: "The SA Hazm typeface replaces Thmanyah Serif Display across the whole interface" },
          { kind: "improve", text: "Electron tests are now platform-agnostic, so they no longer depend on the build machine" },
        ],
      },
      {
        version: "v1.4.1",
        date: "2026.10.04",
        changes: [
          { kind: "new", text: "Windows releases publish automatically straight from a tag" },
          { kind: "improve", text: "All funding material removed from the repository — no money is asked for anywhere" },
        ],
      },
      {
        version: "v1.4.0",
        date: "2026.10.02",
        changes: [
          { kind: "new", text: "Screenshots: full screen, a selected area or a chosen source, with a global shortcut that works from any app" },
          { kind: "new", text: "A built-in image editor: crop, pen, arrow, shapes, highlight, pixelate and text, with full undo" },
          { kind: "new", text: "Arabic-first interface with a complete right-to-left layout, and exactly two locales: Arabic and English" },
          { kind: "improve", text: "Stopping a recording after a long idle: from 23–42 seconds down to 0.1–1.3 seconds, and a 20-second clip from 57.9 MB to 3.1 MB" },
          { kind: "improve", text: "Sign-in and cloud removed entirely — the app runs locally on your machine" },
          { kind: "fix", text: "The recording file's tail is written before the capture helper exits, so a take after a static screen is never lost" },
        ],
      },
    ],
  },

  newsletter: {
    heading1: "The Orax divan:",
    heading2: "a monthly letter worthy of its maker.",
    para: "Editing secrets, exclusive templates before release, and miniature lessons in the art of visual storytelling — delivered in one elegant message each month, not an annoying one every hour.",
    emailLabel: "Your email address",
    button: "Join the divan",
    footnote: "One message a month — no noise, your address shared with no one, cancel in one press",
    toastTitle: "Welcome to the divan",
    errorUnexpected: "An unexpected error occurred",
    errorNetwork: "The server could not be reached — try again in a moment",
    api: {
      invalid: "That email address doesn't look right",
      duplicate: "Your address is already in the divan — don't forget to check your inbox",
      welcome: "Welcome to the divan — the first letter is on its way",
      server: "The request could not be completed — try again in a moment",
    },
  },

  footer: {
    heading1: "Every great creation",
    heading2: "began with a single frame.",
    bio: "The recording and editing studio for those who see the screen as a canvas and time as raw material: content makers, educators and developers — turning the flash of an idea into a scene that lasts.",
    socialsTitle: "Follow along",
    contactTitle: "Mail & support",
    privacy: "Privacy notices",
    copyright: "© 2026 OraxRecordly — All rights reserved",
    keyboard: "Keyboard shortcuts",
    logoAlt: "OraxRecordly logo",
    socials: [
      { label: "X / Twitter", href: "https://x.com" },
      { label: "YouTube", href: "https://youtube.com" },
      { label: "Instagram", href: "https://instagram.com" },
      { label: "Dribbble", href: "https://dribbble.com" },
      { label: "GitHub", href: "https://github.com" },
    ],
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
    platforms: [
      { note: "The desktop installer for Windows (64-bit)" },
      { note: "No build published yet — watch the releases page" },
      { note: "No build published yet — watch the releases page" },
    ],
    toastTitle: "The download has launched",
    toastDesc: "Bringing OraxRecordly v1.4.2 to {platform} — welcome to the story.",
  },

  demo: {
    button: "Watch the demo — 01:24",
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
    title: "OraxRecordly v1.4.2",
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
