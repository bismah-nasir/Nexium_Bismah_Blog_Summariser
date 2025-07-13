export default function SummaryCard({ summary, urdu }: any) {
    return (
        <div className="bg-white/60 backdrop-blur-lg p-6 mt-6 rounded-lg shadow-md max-w-xl mx-auto space-y-4">
            <div>
                <h2 className="font-semibold text-lg text-rose-500">Summary</h2>
                <p className="text-gray-800">{summary}</p>
            </div>
            <div>
                <h2 className="font-semibold text-lg text-green-600">
                    Urdu Translation
                </h2>
                <p className="text-gray-700">{urdu}</p>
            </div>
        </div>
    );
}
