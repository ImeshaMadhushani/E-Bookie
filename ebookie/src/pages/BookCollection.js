// src/pages/BookCollection.js

import React from 'react';
import { Link } from 'react-router-dom';

const BookCollection = () => {
    return (
        <div className="p-4 bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Book Collection</h1>
            {/* Replace with your book list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Sample Book Item */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="font-semibold">Book Title</h2>
                    <p className="text-gray-600">Author: Author Name</p>
                    <p className="text-gray-600">Description: Short description of the book.</p>
                    <Link to="/books/1" className="text-blue-600 hover:underline">View Details</Link>
                </div>
                {/* Repeat for more books */}
            </div>
        </div>
    );
};

export default BookCollection;
