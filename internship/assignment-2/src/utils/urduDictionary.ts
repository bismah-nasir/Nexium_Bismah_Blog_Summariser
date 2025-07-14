// This is your word-based English to Urdu dictionary.
// You will need to expand this dictionary significantly with common words
// and technical terms relevant to the blogs you're summarizing.
// Prioritize common words and phrases.

const urduDictionary: { [key: string]: string } = {
    hello: "ہیلو",
    world: "دنیا",
    guide: "رہنما",
    install: "انسٹال کریں",
    on: "پر",
    ubuntu: "اوبنٹو",
    server: "سرور",
    and: "اور",
    the: "کے",
    in: "میں",
    this: "یہ",
    is: "ہے",
    how: "کیسے",
    to: "کو",
    a: "ایک",
    for: "کے لیے",
    you: "آپ",
    will: "گا",
    show: "دکھائیں",
    different: "مختلف",
    ways: "طریقے",
    getting: "حاصل کرنا",
    using: "استعمال کرنا",
    default: "ڈیفالٹ",
    repository: "ریپوزٹری",
    specific: "مخصوص",
    newer: "نئے",
    versions: "ورژنز",
    should: "چاہیے",
    use: "استعمال کریں",
    manager: "مینیجر",
    particularly: "خاص طور پر",
    flexible: "لچکدار",
    many: "بہت سے",
    independent: "آزاد",
    associated: "متعلقہ",
    packages: "پیکیجز",
    at: "پر",
    same: "ایک ہی",
    time: "وقت",
    visit: "ملاحظہ کریں",
    "project's": "پروجیکٹ کی",
    github: "گٹ ہب",
    page: "صفحہ",
    copy: "کاپی کریں",
    curl: "کرل",
    command: "کمانڈ",
    from: "سے",
    readme: "ریڈمی",
    file: "فائل",
    that: "کہ",
    displays: "دکھاتا ہے",
    main: "مین",
    get: "حاصل کریں",
    most: "سب سے زیادہ",
    recent: "حالیہ",
    version: "ورژن",
    installation: "انسٹالیشن",
    script: "اسکرپٹ",
    then: "پھر",
    enable: "فعال کریں",
    commands: "کمانڈز",
    switch: "سوئچ کریں",
    between: "کے درمیان",
    allows: "اجازت دیتا ہے",
    seamless: "ہموار",
    management: "انتظام",
    without: "بغیر",
    conflicts: "تنازعات",
    building: "بنانا",
    source: "ماخذ",
    advanced: "اعلی درجے کی",
    users: "صارفین",
    outlines: "خاکہ پیش کرتا ہے",
    compiling: "کمپائل کرنا",
    code: "کوڈ",
    offers: "پیش کرتا ہے",
    maximum: "زیادہ سے زیادہ",
    customization: "حسب ضرورت",
    requires: "ضرورت ہے",
    build: "بلڈ",
    tools: "اوزار",
    downloading: "ڈاؤن لوڈ کرنا",
    configuring: "کنفیگر کرنا",
    testing: "ٹیسٹ کرنا",
    uninstalling: "ان انسٹال کرنا",
    depending: "منحصر ہے",
    method: "طریقہ",
    faq: "اکثر پوچھے گئے سوالات",
    section: "سیکشن",
    addresses: "جواب دیتا ہے",
    common: "عام",
    questions: "سوالات",
    whether: "آیا",
    npm: "این پی ایم",
    included: "شامل",
    yes: "ہاں",
    update: "اپ ڈیٹ کریں",
    possibility: "امکان",
    installing: "انسٹال کرنا",
    multiple: "متعدد",
    easily: "آسانی سے",
    done: "ہو گیا",
    safety: "حفاظت",
    nodesource: "نوڈ سورس",
    installations: "انسٹالیشنز",
    deemed: "سمجھا جاتا ہے",
    safe: "محفوظ",
    reputable: "معتبر",
    post: "پوسٹ",
    concludes: "نتیجہ اخذ کرتا ہے",
    reiterating: "دہراتے ہوئے",
    best: "بہترین",
    depends: "منحصر ہے",
    individual: "انفرادی",
    needs: "ضروریات",
    recommending: "سفارش کرتا ہے",
    simplicity: "سادگی",
    managing: "انتظام کرنا",
    "Node.js": "نوڈ.جی ایس",
    css: "سی ایس ایس",
    flexbox: "فلیکس باکس",
    layout: "لے آؤٹ",
    module: "ماڈیول",
    properties: "خواص",
    functionalities: "افعال",
    w3c: "ڈبلیو تھری سی",
    candidate: "امیدوار",
    recommendation: "سفارش",
    october: "اکتوبر",
    designed: "ڈیزائن کیا گیا",
    efficiently: "موثر طریقے سے",
    manage: "انتظام کریں",
    alignment: "الائنمنٹ",
    space: "جگہ",
    distribution: "تقسیم",
    within: "کے اندر",
    container: "کنٹینر",
    even: "بھی",
    unknown: "نامعلوم",
    dynamic: "متحرک",
    item: "آئٹم",
    sizes: "سائز",
    key: "اہم",
    advantage: "فائدہ",
    over: "پر",
    traditional: "روایتی",
    block: "بلاک",
    inline: "ان لائن",
    its: "اس کی",
    "direction-agnostic": "سمت سے بے نیاز",
    nature: "فطرت",
    making: "بنانا",
    highly: "انتہائی",
    adaptable: "مطابق",
    various: "مختلف",
    devices: "آلات",
    screen: "اسکرین",
    clarifies: "واضح کرتا ہے",
    suited: "مناسب",
    application: "ایپلیکیشن",
    components: "اجزاء",
    smaller: "چھوٹے",
    while: "جبکہ",
    grid: "گرڈ",
    more: "زیادہ",
    appropriate: "مناسب",
    "larger-scale": "بڑے پیمانے پر",
    designs: "ڈیزائنز",
    delves: "گہرائی میں جاتا ہے",
    fundamental: "بنیادی",
    terminology: "اصطلاحات",
    defining: "تعریف کرنا",
    cross: "کراس",
    axes: "محور",
    along: "کے ساتھ",
    related: "متعلقہ",
    terms: "اصطلاحات",
    start: "شروع",
    end: "اختتام",
    size: "سائز",
    meticulously: "باریک بینی سے",
    parent: "والدین",
    flex: "فلیکس",
    children: "بچے",
    items: "آئٹمز",
    include: "شامل ہیں",
    display: "نمایش",
    "flex-direction": "فلیکس-ڈائریکشن",
    "flex-wrap": "فلیکس-ریپ",
    "flex-flow": "فلیکس-فلو",
    shorthand: "مختصر",
    "justify-content": "جسٹفائی-کونٹینٹ",
    "align-items": "الائن-آئٹمز",
    "align-content": "الائن-کونٹینٹ",
    gap: "گیپ",
    "row-gap": "رو-گیپ",
    "column-gap": "کالم-گیپ",
    each: "ہر",
    explained: "وضاحت کی گئی",
    clear: "واضح",
    definitions: "تعریفیں",
    examples: "مثالیں",
    highlighting: "اجاگر کرنا",
    options: "آپشنز",
    "flex-start": "فلیکس-اسٹارٹ",
    "flex-end": "فلیکس-اینڈ",
    center: "سینٹر",
    "space-between": "اسپیس-بیٹوین",
    "space-around": "اسپیس-اراؤنڈ",
    "space-evenly": "اسپیس-ایونلی",
    importance: "اہمیت",
    unsafe: "غیر محفوظ",
    modifiers: "ماڈیفائرز",
    preventing: "روکنا",
    data: "ڈیٹا",
    loss: "نقصان",
    noted: "نوٹ کیا گیا",
    child: "بچے",
    order: "آرڈر",
    "flex-grow": "فلیکس-گرو",
    "flex-shrink": "فلیکس-شرنک",
    "flex-basis": "فلیکس-بیسس",
    combining: "جوڑنا",
    three: "تین",
    previous: "پچھلے",
    "align-self": "الائن-سیلف",
    emphasizes: "زور دیتا ہے",
    intelligent: "ذہین",
    value: "ویلیو",
    setting: "سیٹنگ",
    vendor: "وینڈر",
    prefixing: "پریفکسنگ",
    addressed: "حل کیا گیا",
    autoprefixer: "آٹوپریفکسر",
    syntax: "سنٹیکس",
    across: "بھر میں",
    browsers: "براؤزرز",
    practical: "عملی",
    including: "بشمول",
    perfect: "کامل",
    centering: "سینٹرنگ",
    margin: "مارجن",
    auto: "آٹو",
    evenly: "یکساں طور پر",
    distributing: "تقسیم کرنا",
    responsive: "ریسپانسیو",
    navigation: "نیویگیشن",
    media: "میڈیا",
    queries: "کوئریز",
    constructing: "تعمیر کرنا",
    "mobile-first": "موبائل-فرسٹ",
    "three-column": "تین کالم",
    mentions: "ذکر کرتا ہے",
    known: "معلوم",
    bugs: "بگز",
    points: "اشارہ کرتا ہے",
    relevant: "متعلقہ",
    resources: "وسائل",
    finally: "آخر میں",
    provides: "فراہم کرتا ہے",
    links: "لنکس",
    further: "مزید",
    information: "معلومات",
    additional: "اضافی",
    sources: "ذرائع",
    downloadable: "ڈاؤن لوڈ کے قابل",
    poster: "پوسٹر",
    easy: "آسان",
    reference: "حوالہ",
    chart: "چارٹ",
    comments: "تبصرے",
    features: "خصوصیات",
    numerous: "متعدد",
    user: "صارف",
    answers: "جواب",
    offering: "پیشکش",
    insights: "بصیرت",
    troubleshooting: "مسائل حل کرنا",
    tips: "تجاویز",
    "css-tricks": "سی ایس ایس ٹرکس",
    "2017": "۲۰۱۷",
    "2022": "۲۰۲۲",
    "2024": "۲۰۲۴",
    "20": "۲۰",
    "04": "۰۴",
    // Common phrases
    digitalocean: "ڈیجیٹل اوشن",
    "node.js": "نوڈ.جی ایس",
    "css flexbox": "سی ایس ایس فلیکس باکس",
    "flex container": "فلیکس کنٹینر",
    "flex items": "فلیکس آئٹمز",
    "main axis": "مین ایکسس",
    "cross axis": "کراس ایکسس",
    "space between": "اسپیس بٹوین",
    "space around": "اسپیس اراؤنڈ",
    "space evenly": "اسپیس ایونلی",
    "three-column layout": "تین کالم لے آؤٹ",
    "vendor prefixing": "وینڈر پریفکسنگ",
    "browser support": "براؤزر سپورٹ",
    "downloadable poster": "ڈاؤن لوڈ کے قابل پوسٹر"
};


// --- Improved Basic Transliteration Mapping ---
// This mapping aims for slightly better phonetic approximations for Urdu.
// It prioritizes longer consonant clusters and common English vowel sounds.
const transliterationMap: { [key: string]: string } = {
    // Vowels and common vowel sounds
    ai: "ای",
    ay: "ای",
    ee: "ای",
    ea: "ی",
    ie: "ی",
    ey: "ای", // long E
    oo: "او",
    ou: "او",
    ow: "او", // long O/U
    au: "او",
    aw: "او", // long A (as in 'fall')
    oy: "اوئی",
    oi: "اوئی", // oi/oy sound
    a: "ا",
    e: "ای",
    i: "ای",
    o: "او",
    u: "یو", // basic vowels
    y: "ی", // as a vowel
    ae: "اے", // as in 'cat' (approx)

    // Consonants and common consonant blends/digraphs
    ch: "چ",
    sh: "ش",
    th: "تھ",
    gh: "غ",
    kh: "خ",
    ph: "ف",
    zh: "ژ",
    bh: "بھ",
    dh: "دھ",
    jh: "جھ",
    lh: "لھ",
    mh: "مھ",
    nh: "نھ",
    rh: "ڑھ",
    b: "ب",
    c: "س",
    d: "د",
    f: "ف",
    g: "گ",
    h: "ہ",
    j: "ج",
    k: "ک",
    l: "ل",
    m: "م",
    n: "ن",
    p: "پ",
    q: "ق",
    r: "ر",
    s: "س",
    t: "ٹ",
    v: "و",
    w: "و",
    x: "کس",
    z: "ز",

    // Common endings/suffixes (can make transliteration more natural)
    tion: "شن",
    sion: "ژن",
    able: "ایبل",
    ible: "ایبل",
    ment: "مینٹ",
    ing: "انگ",
    er: "ار",
    or: "اور",
    ly: "لی",
    ity: "ٹی",
    ive: "ایو",
    ous: "اوس",
    ence: "ینس",
    ance: "انس",
    al: "ال",
    ic: "ک",

    ed: "ڈ", // past tense (simplified)

    // Numbers (optional, but useful)
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
};

// Basic Transliteration Function
function transliterateToUrdu(word: string): string {
    let transliterated = "";
    let i = 0;
    while (i < word.length) {
        let matched = false;
        // Try to match longest possible phonetic patterns first
        const sortedKeys = Object.keys(transliterationMap).sort(
            (a, b) => b.length - a.length
        );

        for (const key of sortedKeys) {
            if (word.substring(i, i + key.length).toLowerCase() === key) {
                transliterated += transliterationMap[key];
                i += key.length;
                matched = true;
                break;
            }
        }
        if (!matched) {
            // If no mapping, just append the original character (or a placeholder)
            transliterated += word[i];
            i++;
        }
    }
    return transliterated;
}

// Main translation function
export function translateToUrdu(englishText: string): string {
    // Regex to split into words and non-word characters (including spaces and punctuation)
    // This allows us to preserve original spacing and punctuation
    const parts = englishText.match(/(\b\w+\b|\W+)/g) || [];

    const urduTranslation: string[] = [];

    for (const part of parts) {
        if (part.match(/\b\w+\b/)) {
            // If it's a word
            const lowerCaseWord = part.toLowerCase();
            // Check if the word or a common phrase exists in our dictionary
            // For phrases, we'd need a more advanced lookup (e.g., check 2-word, then 1-word)
            // For this simple implementation, we assume single-word lookup for now,
            // but the dictionary can contain multi-word keys if you implement phrase matching.
            // For now, we'll rely on the dictionary having single words and the transliteration for phrases.

            if (urduDictionary[lowerCaseWord]) {
                urduTranslation.push(urduDictionary[lowerCaseWord]);
            } else {
                // If not in dictionary, attempt basic transliteration
                urduTranslation.push(transliterateToUrdu(part)); // Use original casing for transliteration input
            }
        } else {
            // If it's punctuation or space
            urduTranslation.push(part);
        }
    }

    // Join parts and handle potential extra spaces from transliteration
    return urduTranslation.join("").replace(/\s+/g, " ").trim();
}
