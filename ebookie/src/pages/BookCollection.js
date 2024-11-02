// src/pages/BookCollection.js

import React from 'react';
import BookCard from '../components/BookCard';

// Replace this URL with your common book vector image URL
const commonBookImage = 'https://img.icons8.com/ios/452/open-book.png'; // Updated book vector image URL

const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        rating: 4.5,
        image: commonBookImage, // Using the common book vector image
    },
    {
        title: '1984',
        author: 'George Orwell',
        rating: 4.8,
        image: commonBookImage, // Using the common book vector image
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        rating: 4.7,
        image: commonBookImage, // Using the common book vector image
    },
    {
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        rating: 4.3,
        image: commonBookImage, // Using the common book vector image
    },
    // Add more books here...
];

const BookCollection = () => {
    return (
        <div className="p-4 bg-gradient-to-b from-blue-200 to-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Book Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book, index) => (
                    <BookCard key={index} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookCollection;
