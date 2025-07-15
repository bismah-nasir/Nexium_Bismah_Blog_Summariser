"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

interface SummaryCardsProps {
    englishSummary: string;
    urduSummary: string;
    loading: boolean;
}

export default function SummaryCards({
    englishSummary,
    urduSummary,
    loading,
}: SummaryCardsProps) {
    const copyToClipboard = (text: string, lang: string) => {
        try {
            // Using document.execCommand('copy') for broader compatibility in iFrames
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            toast.success(`Copied ${lang} summary to clipboard!`);
        } catch (err) {
            console.error("Failed to copy text:", err);
            toast.error(`Failed to copy ${lang} summary.`);
        }
    };

    // Skeleton loader for when content is loading
    const SummarySkeleton = () => (
        <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
        </div>
    );

    return (
        <>
            {/* Conditional rendering for English Summary Card */}
            {(englishSummary || loading) && ( // Show card if summary exists or if loading
                <Card className="mb-8 shadow-xl rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <CardTitle className="text-xl font-semibold text-gray-800">
                            Summary (English)
                        </CardTitle>
                        {englishSummary && ( // Only show copy button if summary is available
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                    copyToClipboard(englishSummary, "English")
                                }
                                className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Copy className="h-4 w-4" />
                            </Button>
                        )}
                    </CardHeader>

                    <CardContent className="text-gray-700 leading-relaxed text-base prose prose-blue max-w-none">
                        {loading ? (
                            <SummarySkeleton />
                        ) : (
                            <ReactMarkdown>{englishSummary}</ReactMarkdown>
                        )}
                    </CardContent>
                </Card>
            )}

            {/* Conditional rendering for Urdu Summary Card */}
            {(urduSummary || loading) && ( // Show card if summary exists or if loading
                <Card className="shadow-xl rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                        <CardTitle className="text-xl font-semibold text-gray-800">
                            خلاصہ (اردو)
                        </CardTitle>
                        {urduSummary && ( // Only show copy button if summary is available
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() =>
                                    copyToClipboard(urduSummary, "Urdu")
                                }
                                className="text-gray-500 hover:text-blue-600 transition-colors">
                                <Copy className="h-4 w-4" />
                            </Button>
                        )}
                    </CardHeader>
                    <CardContent className="font-urdu rtl text-gray-700 leading-relaxed text-base prose prose-blue max-w-none">
                        {loading ? (
                            <SummarySkeleton />
                        ) : (
                            <ReactMarkdown>{urduSummary}</ReactMarkdown>
                        )}
                    </CardContent>
                </Card>
            )}
        </>
    );
}
