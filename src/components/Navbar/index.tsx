import React from 'react';

const NavBar: React.FC = () => {
    return (
        <div className="px-[80px] border-b border-gray-500 py-4 flex items-center justify-between w-full bg-black text-white">
            <img src="logo/logo.png" alt="Logo" className="h-10" />

            <div className="flex space-x-8">
                <div className="flex items-center space-x-2 cursor-pointer hover:text-green-400">
                    <p>About UIFry?</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-green-400">
                    <p>Features</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-green-400">
                    <p>Resources</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer hover:text-green-400">
                    <p>Company</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>

            <div className="flex space-x-4">
                <button className="px-4 py-2 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition duration-300">
                    Get Demo
                </button>
                <button className="px-4 py-2 border border-white text-white rounded hover:bg-gray-200 hover:text-black transition duration-300">
                    Contact Sales
                </button>
            </div>
        </div>
    );
};

export default NavBar;
