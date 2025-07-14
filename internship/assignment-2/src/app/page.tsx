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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-2xl w-full">
                <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 drop-shadow-sm">
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
                    <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 mt-4 text-sm text-center mb-8 shadow-sm">
                        {error}
                    </p>
                )}

                {/* SummaryCards component */}
                <SummaryCards
                    englishSummary={summary}
                    urduSummary={urduSummary}
                    loading={loading}
                />
            </div>
        </div>
    );
}
