"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "../components/ui/card";
import { toast } from "sonner"; // Assuming sonner is already set up in your project

// Define props for BlogForm
interface BlogFormProps {
    onSummarizeSuccess: (englishSummary: string, urduSummary: string) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (errorMessage: string) => void;
    loading: boolean; // Receive loading state from parent to disable input/button
}

export default function BlogForm({
    onSummarizeSuccess,
    setLoading,
    setError,
    loading,
}: BlogFormProps) {
    const [blogUrl, setBlogUrl] = useState("");
    // The 'error' state for the form itself will be managed here,
    // while the overall API error is passed to the parent.
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Start parent loading
        setError(""); // Clear parent error
        setFormError(""); // Clear local form error

        // Basic URL validation
        if (!blogUrl || !/^https?:\/\/.+\..+/.test(blogUrl)) {
            setFormError(
                "Please enter a valid URL (e.g., https://example.com/blog)."
            );
            toast.error("Invalid URL", {
                description:
                    "Please enter a valid URL starting with http:// or https://",
            });
            setLoading(false); // Stop parent loading
            return;
        }

        try {
            const response = await fetch("/api/summarize", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: blogUrl }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.error || "Failed to process blog URL."
                );
            }

            const data = await response.json();

            // Call the parent's success handler
            onSummarizeSuccess(data.englishSummary, data.urduSummary);

            toast.success("Summarization Successful!", {
                description:
                    "Your blog has been summarized and translated. Data saved!",
            });

            setBlogUrl(""); // Clear the input after successful submission
        } catch (error: unknown) {
            let errorMessage = "An unexpected error occurred during scraping.";

            if (
                typeof error === "object" &&
                error !== null &&
                "message" in error &&
                typeof error.message === "string"
            ) {
                errorMessage = error.message;
            }
            setError(errorMessage); // Set parent error
            toast.error("Error Summarizing", {
                description: errorMessage,
            });
        } finally {
            setLoading(false); // Stop parent loading
        }
    };

    return (
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
                {formError && (
                    <p className="text-red-500 mt-2 text-sm">{formError}</p>
                )}
            </CardContent>
        </Card>
    );
}
