// src/pages/FavoritesPage.js

import React from 'react';

// Use a common book image URL
const commonBookImage = "https://img.icons8.com/ios/452/open-book.png"; // Updated book vector image URL

const FavoritesPage = () => {
    // Sample placeholder data for favorite books (can be replaced with dynamic data in future)
    const favoriteBooks = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: commonBookImage },
        { id: 2, title: "1984", author: "George Orwell", image: commonBookImage },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", image: commonBookImage },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Your Favorites</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Browse through your collection of favorite books!
            </p>
            {favoriteBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favoriteBooks.map(book => (
                        <div key={book.id} className="bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition-transform duration-200">
                            <img src={book.image} alt={book.title} className="w-40 h-56 object-cover rounded-t-lg" />
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                                <p className="text-gray-600 mb-2">{book.author}</p>
                                <button className="mt-2 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-8">You haven't added any favorite books yet.</p>
            )}
        </div>
    );
};

export default FavoritesPage;
