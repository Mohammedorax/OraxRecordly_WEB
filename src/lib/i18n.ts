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
      "لوحة تسجيل الشاشة مع زر تسجيل أحمر",
      "محرر فيديو بجدول زمني ملون",
      "فقاعة الكاميرا أثناء التسجيل",
      "محرر الصوت والموجة الصوتية",
      "أدوات التعليق التوضيحي على الشاشة",
      "قائمة المشاركة الفورية",
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
      "نقاءٌ يفوقُ حدّةَ البصر",
      "تصديرٌ يسبقُ لمحَ البصر",
      "ترسانةُ قوالبَ ومؤثرات",
      "علاماتٍ مائيّة — ولا واحدة",
    ],
  },

  features: {
    heading1: "كلُّ ما تحتاجهُ حكايتُك،",
    heading2: "تحتَ سقفٍ واحد.",
    side: "ستُّ أدواتٍ تعملُ بانسجامِ أوركسترا مُتقنة: كلٌّ يعرفُ دورَه، وجميعُها تصبو إلى إبهارِ جمهورك — من اللقطةِ الأولى حتى التصفيقِ الأخير.",
    items: [
      {
        title: "تسجيلُ الشاشة",
        category: "الشاشةُ كاملةً أو نافذةٌ بعينِها — بدقّةٍ تُخجِلُ الواقع",
        alt: "واجهة تسجيل الشاشة مع زر التسجيل",
      },
      {
        title: "محرِّرُ الجدولِ الزمنيّ",
        category: "قصَّ، ادمجْ، قسِّمْ — ومعاينةٌ فوريّةٌ لا تُبطئُ إيقاعَك",
        alt: "الجدول الزمني لمحرر الفيديو",
      },
      {
        title: "الكاميرا والصوت",
        category: "فقاعةُ حضورٍ ومؤشّرُ صوتٍ — أنتَ حاضرٌ في كلِّ مشهد",
        alt: "تسجيل بالكاميرا والصوت معاً",
      },
      {
        title: "التعليقُ التوضيحيّ",
        category: "أسهمٌ وأقلامٌ ترسمُ فوقَ الزمن — الفكرةُ تصلُ قبلَ الكلمة",
        alt: "أدوات الرسم والتعليق على الشاشة",
      },
      {
        title: "التصديرُ الفوريّ",
        category: "MP4 وGIF وWebM — بضغطةٍ واحدةٍ يخرجُ العملُ إلى النور",
        alt: "نافذة التصدير والصيغ المدعومة",
      },
      {
        title: "المؤثراتُ والقوالب",
        category: "أكثرُ من 120 قالباً ومؤثراً — عُدّةُ الإبهارِ كاملة",
        alt: "معرض المؤثرات والقوالب",
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
    exportsCaption: "يصدِّرُ بصيغٍ ومعدّلاتٍ تناسبُ كلَّ منصةٍ وكلَّ شاشة",
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
          "درّستُ عبر الشاشةِ سنواتٍ، ولم أجدْ أداةً تُحترِمُ وقتيَ كأوراكس: أضغطُ زرّاً واحداً، فيخرجُ الدرسُ مصقولاً كأنه فيلمٌ وثائقيّ. طلّابي ظنّوا أنني استأجرتُ مونتيراً — والسريرُ أزرقُ صغير.",
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
        label: "التسجيلُ بدقّةِ 4K و60 إطاراً في الثانية",
        cells: ["yes", "yes", "yes", "limited"],
      },
      { label: "محرِّرٌ بخطٍّ زمنيٍّ مدمج", cells: ["yes", "no", "yes", "limited"] },
      { label: "بلا علامةٍ مائيّةٍ — إطلاقاً", cells: ["yes", "yes", "no", "no"] },
      { label: "تعليقاتٌ وتظليلٌ أثناءَ التسجيل", cells: ["yes", "no", "yes", "no"] },
      { label: "تصدير MP4 وGIF وWebM", cells: ["yes", "yes", "yes", "no"] },
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
        a: "لا خدقةَ ولا حاشيةَ صغيرة. خطةُ «المجاني» لا تنتهي صلاحيتُها ولا تضعُ علامةً مائيّةً على عملِك ولا تحدُّ عددَ التسجيلات — إلى الأبد. نكسبُ من الخياراتِ الاحترافيّة (برو والاستوديو) التي تشتريها حين تنضجَ احتياجاتُك، لا من كسرِ إبداعِك في منتصفِ الطريق. البدءُ لا يطلبُ بطاقةَ ائتمان، بل ضغطةَ زرٍّ واحدة.",
      },
      {
        q: "هل يُثقِلُ التسجيلُ جهازي أو يبطئُ ألعابي؟",
        a: "محركُ الالتقاطِ يعملُ على البطاقةِ الرسوميّةِ لا على المعالج، ويستخدمُ ترميزاً عتاديّاً (GPU encoding) يحافظُ على إيقاعِ جهازِك. في اختباراتِنا على أجهزةٍ متوسطةٍ تعملُ الألعابُ بسرعةِ 60 إطاراً: لم يتجاوزْ أثرُ التسجيلِ 3% من الأداء. وإن كانَ جهازُكَ أقلَّ قدرةً، تخفّضُ الأداةُ الدقةَ تلقائيّاً لتحفظَ سلاسةَ التجربةِ لا كمالَ البيكسلات.",
      },
      {
        q: "أين تُحفَظُ تسجيلاتي؟ وهل ترونها؟",
        a: "على جهازِكَ حصراً، لحظةَ إيقافِ التسجيل. لا نرفعُ شيئاً إلى خوادمنا إلا إذا طلبتَ أنتَ مزامنةَ المكتبةِ بيدِك، وحينها تكونُ التشفيرُ من الطرفِ إلى الطرف. سياسةُ الخصوصيّةِ عندنا بسيطةٌ لأنَّ نموذجَ عملِنا لا يحتاجُ إلى بياناتِك — نبيعُك أداةً، لا نشتري منك محتوى.",
      },
      {
        q: "هل تدعمون العربيةُ في التعليقاتِ التوضيحيّةِ والنصوص؟",
        a: "الواجهةُ عربيّةٌ أصالةً لا ترجمةً: التحريرُ من اليمينِ إلى اليسار، والخطوطُ تحترمُ المدّاتِ والتشكيل، والتعليقاتُ التوضيحيّةُ تكتُبُ بالعربيّةِ اتصالاً سليماً لا حروفاً مقطّعة. أضفْ إلى ذلك اتجاهين كاملين (RTL/LTR) لمن ينتجُ بالإنجليزيّة، وواجهةً تتذكّرُ اختيارَك.",
      },
      {
        q: "ما الفرقُ بين «برو» و«الاستوديو»؟",
        a: "«برو» لصانعِ المحتوى الفرد: دقّةُ 4K، ومكتبةُ المؤثراتِ الكاملة، وتصديرٌ ثلاثيُّ السرعة. «الاستوديو» للفرق: مقاعدُ غيرُ محدودة، ومكتبةُ فريقٍ مشتركة، وتصديرُ دفعاتٍ للأرشيفِ الكامل، ودعمٌ ذو أولويّةٍ يجيبُ خلالَ ساعتين. القاعدةُ عمليّة: إن كانَ العملُ يخرجُ من جهازٍ واحد، فبرو؛ وإذا خرجَ من غرفةٍ كاملة، فالاستوديو.",
      },
      {
        q: "هل يمكنني الإلغاءُ متى شئت؟ وماذا يحدثُ لأعمالي؟",
        a: "الإلغاءُ بضغطةٍ واحدةٍ من الإعدادات، بلا مكالماتٍ ولا «عروضِ احتفاظ» محرجة. كلُّ ما صدّرتْهُ يبقى ملكَكَ على جهازِكَ بصيغتهِ النهائيّة — لا مفاتيحَ تُسحب، ولا ملفاتٍ تُقفل. وحتى إن أعدتَ الخطةَ المجانية، يظلُّ محررُكَ كاملاً وتصديرُكَ نظيفاً بلا علاماتٍ مائيّة.",
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
        version: "v1.4",
        date: "2026.09",
        changes: [
          { kind: "new", text: "تصديرٌ أسرعُ 3× بترميز H.265 — ساعةُ مونتاجٍ تُختصرُ إلى عشرينَ دقيقة" },
          { kind: "new", text: "جدولةُ النشرِ إلى يوتيوب ولينكدإن مباشرةً من نافذةِ التصدير" },
          { kind: "improve", text: "إقلاعُ التطبيقِ صارَ أسرعَ بـ40% على ويندوز" },
        ],
      },
      {
        version: "V2.3",
        date: "2026.06",
        changes: [
          { kind: "new", text: "أربعونَ مؤثراً انتقالياً جديداً بروحِ المونتاجِ السينمائي" },
          { kind: "new", text: "وضعُ الفرق: مكتبةٌ مشتركةٌ وتعليقاتٌ على الجدولِ الزمنيّ" },
          { kind: "improve", text: "استهلاكُ الذاكرةِ انخفضَ 25% في الجلساتِ الطويلة" },
        ],
      },
      {
        version: "V2.2",
        date: "2026.03",
        changes: [
          { kind: "new", text: "التعليقُ التوضيحيُّ الحيّ — ارسمْ فوقَ الشاشةِ أثناءَ التسجيلِ لا بعدَه" },
          { kind: "new", text: "مؤشّرُ مستوى الصوتِ التفاعليّ أثناءَ التسجيل" },
          { kind: "fix", text: "توافقٌ أوسعُ مع الكاميراتِ الخارجيّةِ ولوحاتِ الالتقاط" },
        ],
      },
      {
        version: "V2.1",
        date: "2025.12",
        changes: [
          { kind: "new", text: "تصديرُ GIF وWebM بضبطٍ دقيقٍ للأبعادِ والإطارات" },
          { kind: "new", text: "خمسةٌ وعشرونَ قالباً جاهزاً للدروسِ والعروضِ التقديميّة" },
          { kind: "fix", text: "مزامنةُ الصوتِ على أجهزةِ إم 1 وإم 2 صارتْ مثاليّةَ التطابق" },
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
    licenseNote: "ترخيصٌ مجانيٌّ للاستخدامِ الشخصيِّ والتّجاريِّ — وللإبداعِ بلا سقف",
    allReleases: "كلُّ الإصداراتِ على جيت هاب ↗",
    platforms: [
      { note: "إصدار سطح المكتب لويندوز" },
      { note: "عام لـ Apple Silicon وIntel" },
      { note: "دبيان، أوبونتو، وفيدورا" },
    ],
    toastTitle: "انطلقتْ رحلةُ التنزيل",
    toastDesc: "جارٍ إحضارُ OraxRecordly v1.4 إلى {platform} — أهلاً بك في الحكاية.",
  },

  demo: {
    button: "شاهد العرض — 01:24",
    play: "تشغيل",
    pause: "إيقاف مؤقت",
    timeline: "شريط التقدم",
    title: "معاينة حيّة لـ OraxRecordly",
    desc: "عرض تفاعلي يمثّل رحلة التسجيل والتحرير والتصدير.",
    scenes: ["المشهدُ الأول — التسجيل", "المشهدُ الثاني — التحرير", "المشهدُ الثالث — التصدير"],
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
    title: "OraxRecordly v1.4",
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
    langCursorEn: "عربي",
    langCursorAr: "English",
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
      "Screen recording panel with a red record button",
      "Video editor with a colorful timeline",
      "Camera bubble during recording",
      "Audio editor and waveform",
      "On-screen annotation tools",
      "Instant share menu",
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
      "Clarity beyond the eye's resolve",
      "Export that outruns the glance",
      "An arsenal of templates & effects",
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
        category: "The full screen or a single window — fidelity that embarrasses reality",
        alt: "Screen recording interface with the record button",
      },
      {
        title: "Timeline Editor",
        category: "Cut, merge, split — with instant preview that never slows your tempo",
        alt: "The video editor's timeline",
      },
      {
        title: "Camera & Sound",
        category: "A presence bubble and a voice meter — you are present in every scene",
        alt: "Recording camera and audio together",
      },
      {
        title: "Live Annotations",
        category: "Arrows and pens that draw over time — the idea lands before the word",
        alt: "Drawing and annotation tools over the screen",
      },
      {
        title: "Instant Export",
        category: "MP4, GIF and WebM — one click and the work steps into the light",
        alt: "The export window and supported formats",
      },
      {
        title: "Effects & Templates",
        category: "More than 120 templates and effects — the full arsenal of awe",
        alt: "The effects and templates gallery",
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
    exportsCaption: "Exports in formats and frame rates to fit every platform and every screen",
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
          "I have taught through screens for years and never found a tool that respects my time like Orax: one press of a button and the lesson comes out polished like a documentary. My students thought I hired an editor — the secret is a little blue button.",
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
        label: "4K recording at 60fps",
        cells: ["yes", "yes", "yes", "limited"],
      },
      { label: "Built-in timeline editor", cells: ["yes", "no", "yes", "limited"] },
      { label: "No watermark — ever", cells: ["yes", "yes", "no", "no"] },
      { label: "Annotations while recording", cells: ["yes", "no", "yes", "no"] },
      { label: "MP4, GIF & WebM export", cells: ["yes", "yes", "yes", "no"] },
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
        a: "No catch, and no fine print. The Free plan never expires, never watermarks your work and never caps your recordings — forever. We earn from the professional tiers (Pro and Studio) that you buy when your needs mature, not from breaking your creativity mid-journey. Getting started asks for no credit card — just one press of a button.",
      },
      {
        q: "Will recording weigh on my machine or slow my games?",
        a: "The capture engine runs on the graphics card, not the processor, and uses hardware encoding that preserves your machine's tempo. In our tests on mid-range hardware running games at 60fps, recording never cost more than 3% of performance. And if your machine is humbler, the tool lowers resolution automatically to protect the smoothness of the experience over the completeness of the pixels.",
      },
      {
        q: "Where are my recordings kept? Can you see them?",
        a: "On your machine, exclusively, the moment you stop recording. Nothing is uploaded to our servers unless you personally ask to sync your library — and then it is end-to-end encrypted. Our privacy policy is simple because our business model doesn't need your data: we sell you a tool; we don't buy your content.",
      },
      {
        q: "Do you support Arabic in annotations and text?",
        a: "The interface is Arabic by origin, not translation: editing runs right-to-left, the typography honours lengtheners and diacritics, and annotations write in properly connected Arabic — never chopped letters. Add to that full dual direction (RTL/LTR) for those who produce in English, and an interface that remembers your choice.",
      },
      {
        q: "What's the difference between Pro and Studio?",
        a: "Pro is for the individual content maker: 4K fidelity, the full effects library, triple-speed export. Studio is for teams: unlimited seats, a shared team library, batch export for the whole archive, and priority support that answers within two hours. The rule of thumb is practical: if the work leaves one machine, Pro; if it leaves a whole room, Studio.",
      },
      {
        q: "Can I cancel anytime? And what happens to my work?",
        a: "Cancellation is one press away in settings — no phone calls, no awkward retention offers. Everything you exported remains yours, on your machine, in its final format: no keys get revoked, no files get locked. And even if you return to the Free plan, your editor stays complete and your exports stay clean of watermarks.",
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
        version: "v1.4",
        date: "2026.09",
        changes: [
          { kind: "new", text: "3× faster export with H.265 — an hour of editing condensed to twenty minutes" },
          { kind: "new", text: "Publish scheduling to YouTube and LinkedIn straight from the export window" },
          { kind: "improve", text: "App launch is now 40% faster on Windows" },
        ],
      },
      {
        version: "V2.3",
        date: "2026.06",
        changes: [
          { kind: "new", text: "Forty new transition effects with the spirit of cinematic editing" },
          { kind: "new", text: "Team mode: shared library and comments on the timeline" },
          { kind: "improve", text: "Memory consumption down 25% in long sessions" },
        ],
      },
      {
        version: "V2.2",
        date: "2026.03",
        changes: [
          { kind: "new", text: "Live annotation — draw over the screen while recording, not after" },
          { kind: "new", text: "Interactive audio-level meter during recording" },
          { kind: "fix", text: "Broader compatibility with external cameras and capture cards" },
        ],
      },
      {
        version: "V2.1",
        date: "2025.12",
        changes: [
          { kind: "new", text: "GIF and WebM export with precise dimension and frame control" },
          { kind: "new", text: "Twenty-five ready-made templates for lessons and presentations" },
          { kind: "fix", text: "Audio sync on M1 and M2 machines is now perfectly aligned" },
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
    licenseNote: "Free licence for personal and commercial use — and for creativity without a ceiling",
    allReleases: "All releases on GitHub ↗",
    platforms: [
      { note: "The desktop build for Windows" },
      { note: "Universal for Apple Silicon & Intel" },
      { note: "Debian, Ubuntu and Fedora" },
    ],
    toastTitle: "The download has launched",
    toastDesc: "Bringing OraxRecordly v1.4 to {platform} — welcome to the story.",
  },

  demo: {
    button: "Watch the demo — 01:24",
    play: "Play",
    pause: "Pause",
    timeline: "Progress bar",
    title: "OraxRecordly live preview",
    desc: "An interactive walkthrough of the record, edit and export journey.",
    scenes: ["Scene one — Recording", "Scene two — Editing", "Scene three — Export"],
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
    title: "OraxRecordly v1.4",
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
