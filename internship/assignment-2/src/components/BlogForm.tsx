"use client";

import { scrapeTextFromURL } from "@/lib/scrape";
import { summarizeText } from "@/lib/summarize";
import { translateToUrdu } from "@/lib/translate";
import { saveToSupabase } from "@/lib/supabase";
import { saveToMongo } from "@/lib/mongodb";
import { toast } from "sonner";
import { useState } from "react";

export default function BlogForm({ setSummary, setUrduTranslation }: any) {
    const [url, setUrl] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const content = await scrapeTextFromURL(url);
            const summary = summarizeText(content);
            const urdu = translateToUrdu(summary);

            await saveToSupabase({ url, summary, urdu });
            await saveToMongo({ url, content });

            setSummary(summary);
            setUrduTranslation(urdu);

            toast.success("✅ Blog summarized and translated successfully!");
        } catch (err: any) {
            toast.error("❌ " + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter blog URL..."
                className="input input-bordered w-full"
                required
            />
            <button type="submit" className="btn btn-rose w-full">
                Summarize
            </button>
        </form>
    );
}
