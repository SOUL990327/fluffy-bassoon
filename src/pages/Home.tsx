import { useNavigate } from 'react-router-dom';
// home.tsx
import { cards } from "../data/cards"


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#fdfdfd] to-[#f0f4f8] p-6">
            <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
                ✨ Important Prayers
            </h1>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {cards.map(card => (
                    <div
                        key={card.id}
                        onClick={() => navigate(`/view/${card.id}`)}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-5 flex flex-col space-y-2"
                    >
                        <h2 className="text-xl font-medium text-gray-800">{card.title}</h2>
                        <p className="text-sm text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;