// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-4 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">E-Bookie</h1>
                <div className="flex space-x-6">
                    <Link to="/" className="text-white hover:text-blue-300 transition duration-300 no-underline">Home</Link>
                    <Link to="/books" className="text-white hover:text-blue-300 transition duration-300 no-underline">Books</Link>
                    <Link to="/cart" className="text-white hover:text-blue-300 transition duration-300 no-underline">Cart</Link>
                    <Link to="/favorites" className="text-white hover:text-blue-300 transition duration-300 no-underline">Favorites</Link>
                    <Link to="/about" className="text-white hover:text-blue-300 transition duration-300 no-underline">About Us</Link>
                    <Link to="/contact" className="text-white hover:text-blue-300 transition duration-300 no-underline">Contact</Link>
                    <Link to="/login" className="text-white hover:text-blue-300 transition duration-300 no-underline">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
