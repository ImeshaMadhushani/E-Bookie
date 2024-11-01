import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <h1 className="text-xl font-bold">E-Bookie</h1>
            <nav>
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/books" className="mr-4">Book Collection</Link>
                <Link to="/cart" className="mr-4">Cart</Link>
                <Link to="/favorites" className="mr-4">Favorites</Link>
                <Link to="/login" className="mr-4">Login</Link>
                <Link to="/about" className="mr-4">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </header>
    );
};

export default Header;
