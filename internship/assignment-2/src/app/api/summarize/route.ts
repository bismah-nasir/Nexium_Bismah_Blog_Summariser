import { NextRequest, NextResponse } from "next/server";
import { translateToUrdu } from "../../../utils/urduDictionary";
import { supabase } from "../../../lib/supabase";
import { getFullTextCollection } from "../../../models/FullText";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        // Basic validation (though page.tsx also does this, it's good to double-check on the server)
        if (!url || !/^https?:\/\/.+\..+/.test(url)) {
            return NextResponse.json(
                { error: "Invalid URL format provided." },
                { status: 400 }
            );
        }

        // 1. Scrape Text (internal API call)
        const scrapeResponse = await fetch("http://localhost:3000/api/scrape", {
            // Use full URL in development
            // For production on Vercel, this will typically resolve correctly without http://localhost:3000
            // You might need to adjust this depending on your Vercel setup (e.g., process.env.VERCEL_URL)
            // or just use '/api/scrape' and rely on Vercel's internal routing.
            // For local development, 'http://localhost:3000' is necessary.
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url }),
        });

        if (!scrapeResponse.ok) {
            const errorData = await scrapeResponse.json();
            throw new Error(errorData.error || "Failed to scrape blog post.");
        }

        const { fullText } = await scrapeResponse.json();

        if (!fullText) {
            return NextResponse.json(
                { error: "No content was scraped from the provided URL." },
                { status: 404 }
            );
        }

        // 2. Simulate AI Summary
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Craft a good prompt for summarization
        const prompt = `Summarize the following blog post content in English.
        Provide a detailed and comprehensive summary that covers all the key arguments, steps, and conclusions presented in the article.
        Format the summary as a bulleted list. Each main point should be a separate bullet.

        Blog Post Content:
        """
        ${fullText}
        """

        Detailed Summary (Bulleted List):`;

        const model_result = await model.generateContent(prompt);
        const response = await model_result.response;
        const englishSummary = response.text().trim(); // Get the text from the model's response

        // 3. Translate to Urdu
        const urduSummary = translateToUrdu(englishSummary);
        if (!urduSummary) {
            console.warn(
                `Urdu translation resulted in an empty string for URL: ${url}`
            );
        }

        // 4. Save summary in Supabase
        const { data: supabaseData, error: supabaseError } = await supabase
            .from("summaries")
            .insert([
                {
                    original_url: url,
                    english_summary: englishSummary,
                    urdu_summary: urduSummary,
                },
            ])
            .select(); // Add .select() to get back the inserted data, including ID if needed

        if (supabaseError) {
            console.error("Supabase Error:", supabaseError);
            throw new Error(
                `Failed to save summary to Supabase: ${supabaseError.message}`
            );
        }

        const insertedSupabaseId = supabaseData ? supabaseData[0].id : null; // Access the ID of the new record

        // 5. Save full text in MongoDB
        const fullTextCollection = await getFullTextCollection();
        const result = await fullTextCollection.insertOne({
            url: url,
            fullTextContent: fullText,
            createdAt: new Date(),
        });

        return NextResponse.json({
            englishSummary,
            urduSummary,
            message: "Blog summarized and saved successfully!",
            supabaseId: insertedSupabaseId, // Optionally return Supabase ID
            mongoId: result.insertedId,
        });
    } catch (error: unknown) {
        console.error("Summarize API Error:", error); // Log the full error on the server

        let errorMessage = "An unexpected error occurred during scraping.";

        if (
            typeof error === "object" &&
            error !== null &&
            "message" in error &&
            typeof error.message === "string"
        ) {
            errorMessage = error.message;
        }

        return NextResponse.json(
            {
                error: errorMessage,
            },
            { status: 500 }
        );
    }
}
