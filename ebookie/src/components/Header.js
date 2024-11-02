// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">E-Bookie</h1>
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:text-blue-200 transition duration-300">Home</Link>
                    <Link to="/books" className="hover:text-blue-200 transition duration-300">Book Collection</Link>
                    <Link to="/cart" className="hover:text-blue-200 transition duration-300">Cart</Link>
                    <Link to="/favorites" className="hover:text-blue-200 transition duration-300">Favorites</Link>
                    <Link to="/login" className="hover:text-blue-200 transition duration-300">Login</Link>
                    <Link to="/about" className="hover:text-blue-200 transition duration-300">About Us</Link>
                    <Link to="/contact" className="hover:text-blue-200 transition duration-300">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
