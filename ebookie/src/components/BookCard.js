// src/components/BookCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-xl">
            <img
                src={book.image}
                alt={book.title}
                className="w-32 h-48 object-contain mb-4 mx-auto"
            />
            <h2 className="text-xl font-bold text-blue-800">{book.title}</h2>
            <h3 className="text-gray-700">{book.author}</h3>
            <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold">{book.rating} ★</span>
            </div>
            <Link to={`/books/${book.title.replace(/\s+/g, '-').toLowerCase()}`} className="mt-4 block text-center text-white bg-blue-800 hover:bg-blue-700 py-2 px-4 rounded">
                View
            </Link>
        </div>
    );
};

export default BookCard;
