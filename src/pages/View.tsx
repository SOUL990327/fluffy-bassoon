import { useParams, Link } from "react-router-dom";
import { cardTextMap } from "../data/cardText";

const ViewPage = () => {
    const { id } = useParams<{ id: string }>();
    const card = cardTextMap[id || ""];

    return (
        <div className="flex min-h-screen items-center max-w-3xl mx-auto p-6">
            {card ? (
                <div className="border bg-slate-50 p-6 sm:p-12 rounded-xl shadow-md">
                    <h1 className="text-2xl font-bold mb-6">{card.title}</h1>

                    {card.verses.map((verse, idx) => (
                        <div key={idx} className="mb-6">
                            <pre className="whitespace-pre-wrap font-serif text-xl text-gray-800 mb-2 text-center">
                                {verse.sanskrit}
                            </pre>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                                {verse.translation}
                            </p>

                        </div>
                    ))}

                    <Link to="/" className="mt-4 inline-block text-blue-600 underline">
                        ← Back to More Prayers
                    </Link>
                </div>
            ) : (
                <><p className="text-red-500">Content not found.</p>
                    <Link to="/" className="mt-4 inline-block text-blue-600 underline">
                        ← Back to More Prayers
                    </Link>
                </>
            )}
        </div>
    );
};

export default ViewPage;

