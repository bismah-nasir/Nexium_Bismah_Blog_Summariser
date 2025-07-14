# 📝 Blog Summarizer App

A powerful and elegant **Blog Summarizer Web App** that condenses lengthy blog posts into concise summaries, available in both English and Urdu. Built with modern web technologies, it offers a seamless user experience for quick content digestion.

---

## ✨ Features

- 🌐 **URL-based Summarization**: Simply paste a blog post URL to get a summary.
- 🇬🇧 **English Summaries**: Generates clear and concise English summaries using advanced AI.
- 🇵🇰 **Urdu Translations**: Provides an Urdu translation of the summary, utilizing a custom JavaScript dictionary with phonetic transliteration for unknown words.
- 🧠 **AI-Powered**: Leverages the capabilities of Gemini 1.5 Flash for intelligent content summarization.
- 🔍 **Robust Web Scraping**: Employs Cheerio to intelligently extract main content from diverse webpage structures.
- ⚡ **Fast & Responsive**: Built for speed and optimal viewing across all devices.
- 🎨 **Aesthetic UI**: Professional, clean, and modern user interface with subtle gradients and rounded corners.
- 📋 **Copy to Clipboard**: Easily copy generated summaries to your clipboard.
- 🔄 **Loading Skeletons**: Provides visual feedback during processing with elegant loading states.
- 🔔 **Toast Notifications**: User-friendly notifications for success and error messages.

---

## 🛠️ Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **AI Model**: Gemini 1.5 Flash API
- **Web Scraping**: Cheerio
- **Notifications**: Sonner
- **Icons**: Lucide React
- **Package Manager**: pnpm

---

## 📁 Project Structure

```
Nexium_Bismah_Blog_Summariser/internship/assignment-2
├── .next/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── summarize/
│   │   │   │   └── route.ts  # Main API endpoint for summarization
│   │   │   └── scrape/
│   │   │       └── route.ts  # API endpoint for web scraping
│   │   ├── globals.css       # Global CSS including Urdu font & RTL
│   │   ├── layout.tsx        # Root layout (where Toaster might be)
│   │   └── page.tsx          # Main application page
│   ├── components/
│   │   ├── ui/               # ShadCN UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── sonner.tsx
│   │   ├── BlogForm.tsx      # Component for URL input and submission
│   │   └── SummaryCards.tsx  # Component for displaying summaries
│   ├── lib/
│   │   ├── mongodb.tsx
│   │   └── supabase.ts 
│   ├── models/
│   │   └── FullText.ts       
│   └── utils/
│       └── urduDictionary.ts # Urdu translation and transliteration logic
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json

```

---

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/bismah-nasir/Nexium_Bismah_Blog_Summariser.git
cd Nexium_Bismah_Blog_Summariser/internship/assignment-2
```

### 2. Install dependencies
Make sure you are inside the ```assignment-2/``` folder and have [pnpm](https://pnpm.io/) installed:

```
pnpm install
```

### 3. Set up Environment Variables
Create a .env.local file in the root of your project and add your keys:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY

MONGODB_URI

GEMINI_API_KEY

### 4. Run the development server

```
pnpm dev
```

The app will be running at http://localhost:3000

---

## 📦 Build for Production

```
pnpm build
pnpm start
```

---

## 🧪 Key Files
- ```src/app/api/summarize/route.ts```: The main API endpoint that orchestrates scraping, AI summarization, and Urdu translation.

- ```src/app/api/scrape/route.ts```: Handles fetching and extracting the main text content from a given URL.

- ```src/utils/urduDictionary.ts```: Contains the logic for loading the Urdu dictionary and performing word-based translation with basic transliteration fallback.

- ```src/components/BlogForm.tsx```: The UI component for inputting the blog URL and triggering the summarization process.

- ```src/components/SummaryCards.tsx```: The UI component responsible for displaying the English and Urdu summaries.

---

## 📸 Screenshot

![image_alt](https://github.com/bismah-nasir/Nexium_Bismah_Blog_Summariser/blob/65e31e3bfeaf102cd1abca2e25a12fa6e3d6609d/internship/assignment-2/src/public/blog_summarizer.PNG)

---

## 🌐 Live Demo

You can view the live version of the **Blog Summariser App** deployed on Vercel here:

https://nexium-bismah-blog-summariser.vercel.app/

---

Live Demo Link

## 💖 Credits
Built by **Bismah Nasir** as part of Nexium Internship

Made with 💗 using **Next.js**, **Tailwind CSS**, and **Google Gemini API**

---
