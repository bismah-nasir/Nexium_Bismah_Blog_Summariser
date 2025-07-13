import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json(
                { error: "URL is required" },
                { status: 400 }
            );
        }

        const response = await fetch(url);
        if (!response.ok) {
            // Handle HTTP errors specifically
            if (response.status === 404) {
                throw new Error(`Blog post not found at URL: ${url}`);
            }
            throw new Error(
                `Failed to fetch URL: ${response.statusText} (Status: ${response.status})`
            );
        }
        const html = await response.text();
        const $ = cheerio.load(html);

        // --- IMPROVEMENT START ---
        // Extract text from a wider range of common content areas.
        // This is a more robust attempt to get the main article content.
        // You can refine this selector based on common patterns of blogs you test.
        const contentSelectors = [
            "article", // Semantic HTML for main content
            ".blog-content", // Common class for blog post content
            ".entry-content", // Another common class
            ".post-body", // Yet another common class
            "main", // Main content area of the document
            "p", // Paragraphs
            "h1",
            "h2",
            "h3",
            "h4", // Headings
            "ul",
            "ol", // Lists (for list items)
        ];

        let articleText = "";
        contentSelectors.forEach((selector) => {
            $(selector).each((i, el) => {
                const text = $(el).text().trim();
                if (text) {
                    articleText += text + "\n\n"; // Add spacing between different elements
                }
            });
        });

        // Basic clean-up: remove multiple newlines, trim whitespace
        articleText = articleText.replace(/(\n\s*){2,}/g, "\n\n").trim();
        // --- IMPROVEMENT END ---

        if (!articleText) {
            return NextResponse.json(
                {
                    error: "Could not extract main content from the URL. The page might be empty or use an uncommon structure.",
                },
                { status: 404 }
            );
        }

        return NextResponse.json({ fullText: articleText });
    } catch (error: any) {
        console.error("Scraping API Error:", error); // Log the full error on the server
        return NextResponse.json(
            {
                error:
                    error.message ||
                    "An unexpected error occurred during scraping.",
            },
            { status: 500 }
        );
    }
}
