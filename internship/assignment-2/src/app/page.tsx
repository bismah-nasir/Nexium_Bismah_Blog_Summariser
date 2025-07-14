"use client";

import { useState } from "react";
import BlogForm from "../components/BlogForm"; // Import the new BlogForm component
import SummaryCards from "../components/SummaryCards"; // Import the new SummaryCards component

export default function Home() {
    const [summary, setSummary] = useState("");
    const [urduSummary, setUrduSummary] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Callback function to handle successful summarization from BlogForm
    const handleSummarizeSuccess = (
        englishSummary: string,
        urduSummary: string
    ) => {
        setSummary(englishSummary);
        setUrduSummary(urduSummary);
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-center my-8">
                Blog Summarizer
            </h1>

            {/* BlogForm component */}
            <BlogForm
                onSummarizeSuccess={handleSummarizeSuccess}
                setLoading={setLoading}
                setError={setError}
                loading={loading}
            />

            {/* Display global API error if any */}
            {error && (
                <p className="text-red-500 mt-2 text-sm text-center mb-8">
                    {error}
                </p>
            )}

            {/* SummaryCards component */}
            <SummaryCards englishSummary={summary} urduSummary={urduSummary} />
        </div>
    );
}
