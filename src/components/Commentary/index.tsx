import React from 'react';
import CommentaryCard from './Card';

const Commentary: React.FC = () => {
    return (
        <div className="w-full py-16 px-[80px] bg-gradient-to-r from-gray-900 to-black text-white">
            {/* Section Titre et Bouton */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h4 className="text-4xl font-bold">
                        Here's what our <span className="text-green-400">customer</span> has to says
                    </h4>
                    <button className="mt-4 px-6 py-2 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition">
                        Read customer stories
                    </button>
                </div>
                <div className="flex items-center">
                    <img src="asterix_green.png" alt="astérix vert" className="h-8 w-8 mr-4" />
                    <p className="text-gray-400">
                        [short description goes in here] lorem ipsum is a placeholder text to demonstrate.
                    </p>
                </div>
            </div>

            {/* Grille des cartes de témoignages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CommentaryCard theme="gray">
                    <h4 className="text-xl font-semibold">Amazing tool! Saved me months</h4>
                    <p className="text-gray-400 mt-2">
                        This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.
                    </p>
                    <div className="flex items-center mt-4">
                        <img src="profil_picture.png" alt="" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <p className="font-bold">John Master</p>
                            <p className="text-gray-400">Director, UiFry.com</p>
                        </div>
                    </div>
                </CommentaryCard>

                <CommentaryCard theme="black">
                    <h4 className="text-xl font-semibold">Amazing tool! Saved me months</h4>
                    <p className="text-gray-400 mt-2">
                        This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.
                    </p>
                    <div className="flex items-center mt-4">
                        <img src="profil_picture.png" alt="" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <p className="font-bold">John Master</p>
                            <p className="text-gray-400">Director, UiFry.com</p>
                        </div>
                    </div>
                </CommentaryCard>

                <CommentaryCard theme="gray">
                    <h4 className="text-xl font-semibold">Amazing tool! Saved me months</h4>
                    <p className="text-gray-400 mt-2">
                        This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.
                    </p>
                    <div className="flex items-center mt-4">
                        <img src="profil_picture.png" alt="" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <p className="font-bold">John Master</p>
                            <p className="text-gray-400">Director, UiFry.com</p>
                        </div>
                    </div>
                </CommentaryCard>

                <CommentaryCard theme="black">
                    <h4 className="text-xl font-semibold">Amazing tool! Saved me months</h4>
                    <p className="text-gray-400 mt-2">
                        This is a placeholder for your testimonials and what your client has to say, put them here and make sure its 100% true and meaningful.
                    </p>
                    <div className="flex items-center mt-4">
                        <img src="profil_picture.png" alt="" className="w-10 h-10 rounded-full" />
                        <div className="ml-4">
                            <p className="font-bold">John Master</p>
                            <p className="text-gray-400">Director, UiFry.com</p>
                        </div>
                    </div>
                </CommentaryCard>
            </div>
        </div>
    );
};

export default Commentary;
