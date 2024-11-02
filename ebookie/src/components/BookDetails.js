// src/pages/BookDetails.js

import React from 'react';

const BookDetails = ({ book }) => {
    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-96 object-cover rounded-md mb-6 shadow-md transition-transform transform hover:scale-105"
                />
                <h1 className="text-4xl font-bold text-blue-800 mb-2">{book.title}</h1>
                <h2 className="text-2xl text-gray-700 mb-4">by {book.author}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {book.description}
                </p>
                <button className="bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
