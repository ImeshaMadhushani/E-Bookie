// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">E-Bookie</h1>
                <div className="space-x-4">
                    <Link to="/" className="text-white hover:text-blue-300">Home</Link>
                    <Link to="/books" className="text-white hover:text-blue-300">Books</Link>
                    <Link to="/cart" className="text-white hover:text-blue-300">Cart</Link>
                    <Link to="/favorites" className="text-white hover:text-blue-300">Favorites</Link>
                    <Link to="/about" className="text-white hover:text-blue-300">About Us</Link>
                    <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
                    <Link to="/login" className="text-white hover:text-blue-300">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
