"use client"; // This component is also a client component

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

interface SummaryCardsProps {
    englishSummary: string;
    urduSummary: string;
}

export default function SummaryCards({
    englishSummary,
    urduSummary,
}: SummaryCardsProps) {
    return (
        <>
            {englishSummary && (
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Summary (English)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{englishSummary}</p>
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
        </>
    );
}
