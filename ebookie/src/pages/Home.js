// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Welcome to E-Bookie!</h1>
            <p className="text-lg text-gray-700 mb-8">Your online book library awaits!</p>
            <Link to="/books" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700">
                Browse Books
            </Link>
        </div>
    );
};

export default Home;
