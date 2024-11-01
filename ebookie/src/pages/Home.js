// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100); // Delay to trigger fade-in animation
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-blue-100 to-gray-100 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl font-bold text-blue-800 mb-4 text-center animate-bounce">Welcome to E-Bookie!</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-xl animate-fade-in">
                Your online book library awaits! Explore a vast collection of books across various genres.
            </p>
            <Link
                to="/books"
                className="bg-blue-800 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-blue-700 animate-pulse"
            >
                Browse Books
            </Link>
        </div>
    );
};

export default Home;
