// src/pages/BookDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    // Fetch book details by ID (mock data here; replace with actual data fetching logic)
    useEffect(() => {
        // Example mock book data - replace with actual API call if needed
        const mockBook = {
            id,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            description: "A classic novel that explores themes of wealth, society, and the American Dream.",
            image: "https://example.com/great-gatsby.jpg",
            rating: 4.5,
            price: "$12.99",
        };
        setBook(mockBook);
    }, [id]);

    if (!book) return <p>Loading...</p>;

    return (
        <div className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-md max-w-4xl mx-auto mt-10">
            <img
                src={book.image}
                alt={book.title}
                className="w-64 h-80 object-cover rounded-lg shadow-lg mb-6 md:mb-0 md:mr-8"
            />
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold text-blue-800 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                <div className="flex items-center mb-4">
                    <span className="text-yellow-500 font-bold">{book.rating} ★</span>
                    <span className="text-gray-500 ml-2">|</span>
                    <span className="text-gray-500 ml-2">{book.price}</span>
                </div>
                <p className="text-gray-700 mb-6 max-w-lg leading-relaxed">
                    {book.description}
                </p>
                <button className="bg-blue-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
