// utils/urduDictionary.ts
export const urduDictionary: { [key: string]: string } = {
    "This is a blog post": "یہ ایک بلاگ پوسٹ ہے",
    "It talks about technology": "یہ ٹیکنالوجی کے بارے میں بات کرتا ہے",
    summary: "خلاصہ",
    hello: "ہیلو",
    // ... more mappings
};

export const translateToUrdu = (text: string): string => {
    let translatedText = text;
    for (const [english, urdu] of Object.entries(urduDictionary)) {
        translatedText = translatedText.replace(new RegExp(english, "g"), urdu);
    }
    return translatedText;
};
