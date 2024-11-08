// src/pages/Home.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100); // Delay to trigger fade-in animation
        return () => clearTimeout(timer);
    }, []);

    const genres = [
        { name: 'Fiction', image: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg' },
        { name: 'Non-Fiction', image: 'https://images.pexels.com/photos/3184404/pexels-photo-3184404.jpeg' },
        { name: 'Science', image: 'https://images.pexels.com/photos/356038/pexels-photo-356038.jpeg' },
        { name: 'Fantasy', image: 'https://images.pexels.com/photos/1467334/pexels-photo-1467334.jpeg' }, 
        { name: 'Mystery', image: 'https://images.pexels.com/photos/5325475/pexels-photo-5325475.jpeg' },
        { name: 'Romance', image: 'https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg' },
        { name: 'Thriller', image: 'https://images.pexels.com/photos/258164/pexels-photo-258164.jpeg' },
        { name: 'History', image: 'https://images.pexels.com/photos/257733/pexels-photo-257733.jpeg' },
    ];

    const latestBooks = [
        { title: 'Book 1', description: 'Description of Book 1', image: 'https://img.icons8.com/ios/452/open-book.png' },
        { title: 'Book 2', description: 'Description of Book 2', image: 'https://img.icons8.com/ios/452/open-book.png' },
        { title: 'Book 3', description: 'Description of Book 3', image: 'https://img.icons8.com/ios/452/open-book.png' },
        { title: 'Book 4', description: 'Description of Book 4', image: 'https://img.icons8.com/ios/452/open-book.png' },
    ];

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-blue-200 via-blue-100 to-gray-100 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className={`text-6xl font-extrabold text-blue-900 mb-6 text-center transition-transform duration-700 transform ${fade ? 'scale-100' : 'scale-50'}`}>
                Welcome to <span className="text-blue-600">E-Bookie</span>!
            </h1>
            <p className={`text-lg text-gray-800 mb-10 text-center max-w-2xl transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                Discover, explore, and immerse yourself in a world of books across all genres. Your next great read is just a click away!
            </p>
            <Link
                to="/books"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
                Browse Books
            </Link>

            <div className={`mt-12 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Featured Genres</h2>
                <p className="text-md text-gray-600 mb-8 text-center max-w-2xl">Explore our collection of popular genres, tailored just for you!</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {genres.map((genre) => (
                        <div key={genre.name} className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
                            <img src={genre.image} alt={genre.name} className="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 className="text-xl font-semibold text-blue-700">{genre.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className={`mt-12 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Latest Releases</h2>
                <p className="text-md text-gray-600 mb-8 text-center max-w-2xl">Stay updated with the latest books in the market!</p>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {latestBooks.map((book, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg m-2 transition-transform transform hover:scale-105 hover:shadow-xl" style={{ height: '400px', width: '250px' }}>
                            <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-2" />
                            <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                            <p className="text-gray-600">{book.description}</p>
                            <Link to={`/books/${book.title.toLowerCase().replace(' ', '-')}`} className="mt-2 inline-block text-blue-600 hover:underline">View Details</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
