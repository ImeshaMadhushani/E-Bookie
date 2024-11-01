// src/pages/BookCollection.js

import React from 'react';
import BookCard from '../components/BookCard';

const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        rating: 4.5,
        image: 'https://example.com/gatsby.jpg', // Replace with actual image URL
    },
    {
        title: '1984',
        author: 'George Orwell',
        rating: 4.8,
        image: 'https://example.com/1984.jpg', // Replace with actual image URL
    },
    // Add more books here...
];

const BookCollection = () => {
    return (
        <div className="p-4 bg-gray-100">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Book Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookCollection;
