import React from 'react';
import Card from '../Card';

const Features: React.FC = () => {

    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Fonction pour faire défiler vers la gauche
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -300, // Valeur du défilement (à ajuster selon la largeur des cartes)
                behavior: 'smooth'
            });
        }
    };

    // Fonction pour faire défiler vers la droite
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 300, // Valeur du défilement (à ajuster selon la largeur des cartes)
                behavior: 'smooth'
            });
        }
    };


    return (
        <div className="w-full py-16  bg-gradient-to-r from-gray-900 to-black text-white px-[80px]">
            {/* Titre et bouton */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Choose from over 10+ cutting-edge products</h2>
                <button className="px-6 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition">See all products</button>
            </div>

            {/* Conteneur scrollable */}
            <div ref={scrollRef} className="flex overflow-x-scroll overflow-y-hidden space-x-4 scrollbar-hide">
                <Card theme="black" img="circle.png" title="Product title" subTitle="Short description goes here" />
                <Card theme="white" img="diagramme.png" title="Product title" subTitle="Short description goes here" />
                <Card theme="black" img="camembert.png" title="Product title" subTitle="Short description goes here" />
                <Card theme="black" img="profil.png" title="Product title" subTitle="Short description goes here" />
                {/* Ajoute d'autres cartes si nécessaire */}
            </div>

            <div className="flex space-x-2 mt-4">
                <button
                    onClick={scrollLeft}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={scrollRight}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Features;
