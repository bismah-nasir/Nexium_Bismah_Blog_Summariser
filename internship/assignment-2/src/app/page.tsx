"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function Home() {
    const [blogUrl, setBlogUrl] = useState("");
    const [summary, setSummary] = useState("");
    const [urduSummary, setUrduSummary] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSummary("");
        setUrduSummary("");

        // Basic URL validation
        if (!blogUrl || !/^https?:\/\/.+\..+/.test(blogUrl)) {
            setError(
                "Please enter a valid URL (e.g., https://example.com/blog)."
            );
            toast.error("Invalid URL", {
                description:
                    "Please enter a valid URL starting with http:// or https://",
            });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch("/api/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: blogUrl }),
            });

            if (!response.ok) {
                // If the response is not OK (e.g., 400, 500 status code)
                const errorData = await response.json();
                throw new Error(
                    errorData.error || "Failed to process blog URL."
                );
            }

            const data = await response.json(); // Parse the successful response

            setSummary(data.englishSummary);
            setUrduSummary(data.urduSummary);

            toast.success("Summarization Successful!", {
                description:
                    "Your blog has been summarized and translated. Data saved!",
            });

            // Optionally clear the input after successful submission
            setBlogUrl("");
        } catch (err: any) {
            setError(err.message);
            toast.error("Error Summarizing", {
                description: err.message || "An unexpected error occurred.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-4xl font-bold text-center my-8">
                Blog Summarizer
            </h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Enter Blog URL</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex gap-4">
                        <Input
                            type="url"
                            placeholder="e.g., https://example.com/blog-post"
                            value={blogUrl}
                            onChange={(e) => setBlogUrl(e.target.value)}
                            required
                            className="flex-grow"
                            disabled={loading} // Disable input while loading
                        />
                        <Button type="submit" disabled={loading}>
                            {loading ? "Processing..." : "Summarize"}
                        </Button>
                    </form>
                    {error && (
                        <p className="text-red-500 mt-2 text-sm">{error}</p>
                    )}
                </CardContent>
            </Card>

            {summary && (
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Summary (English)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{summary}</p>
                    </CardContent>
                </Card>
            )}

            {urduSummary && (
                <Card>
                    <CardHeader>
                        <CardTitle>خلاصہ (اردو)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-urdu rtl">{urduSummary}</p>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
