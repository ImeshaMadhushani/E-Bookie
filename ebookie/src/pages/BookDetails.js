import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null); // Set initial state to null

    useEffect(() => {
        // Simulate an API call
        const fetchBook = async () => {
            // Simulate a delay for fetching
            const mockBook = {
                id,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                description: "A classic novel that explores themes of wealth, society, and the American Dream.",
                image: "https://img.icons8.com/ios/452/open-book.png",
                rating: 4.5,
                price: "$12.99",
            };
            setBook(mockBook);
        };

        fetchBook();
    }, [id]);

    // Add loading state
    if (!book) return <p>Loading...</p>;

    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-b from-blue-200 to-gray-100 min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">
                <img
                    src={book.image}
                    alt={book.title}
                    className="w-48 h-64 object-contain rounded-md mb-6 shadow-md transition-transform transform hover:scale-105"
                />
                <h1 className="text-4xl font-bold text-blue-800 mb-2">{book.title}</h1>
                <h2 className="text-2xl text-gray-700 mb-4">by {book.author}</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {book.description}
                </p>
                <div className="flex items-center mb-4">
                    <span className="text-yellow-500 font-bold">{book.rating} ★</span>
                    <span className="text-gray-500 ml-2">|</span>
                    <span className="text-gray-500 ml-2">{book.price}</span>
                </div>
                <button className="bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default BookDetails;
