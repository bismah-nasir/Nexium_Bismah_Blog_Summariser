import { NextRequest, NextResponse } from "next/server";
import { translateToUrdu } from "../../../utils/urduDictionary";
import { supabase } from "../../../lib/supabase";
import { getFullTextCollection } from "@/models/FullText"; // Import the function to get the collection

export async function POST(req: NextRequest) {
    try {
        const { url } = await req.json();

        // Basic validation (though page.tsx also does this, it's good to double-check on the server)
        if (!url || !/^https?:\/\/.+\..+/.test(url)) {
            return NextResponse.json({ error: "Invalid URL format provided." }, { status: 400 });
        }

        // 1. Scrape Text (internal API call)
        const scrapeResponse = await fetch("http://localhost:3000/api/scrape", { // Use full URL in development
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
            return NextResponse.json({ error: "No content was scraped from the provided URL." }, { status: 404 });
        }

        // 2. Simulate AI Summary (Static Logic)
        // Taking the first two sentences as a simple summary
        const sentences = fullText.split(/(?<=[.?!])\s+/); // Split by sentence-ending punctuation followed by space
        const englishSummary = sentences.slice(0, Math.min(2, sentences.length)).join(". ") + (sentences.length > 0 ? "." : "");
        // Ensure summary ends with a period if sentences exist

        if (englishSummary.length < 10) { // Simple check for very short or empty summaries
            console.warn(`Generated summary is very short for URL: ${url}. Summary: "${englishSummary}"`);
            // You might decide to throw an error here or just proceed.
        }


        // 3. Translate to Urdu
        const urduSummary = translateToUrdu(englishSummary);
        if (!urduSummary) {
             console.warn(`Urdu translation resulted in an empty string for URL: ${url}`);
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
        // const insertedSupabaseId = supabaseData ? supabaseData[0].id : null; // Access the ID of the new record

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
            // supabaseId: insertedSupabaseId, // Optionally return Supabase ID
            mongoId: result.insertedId,
        });
    } catch (error: any) {
        console.error("Summarize API Error:", error); // Log the full error on the server
        return NextResponse.json(
            { error: error.message || "An unexpected error occurred during summarization." },
            { status: 500 }
        );
    }
}