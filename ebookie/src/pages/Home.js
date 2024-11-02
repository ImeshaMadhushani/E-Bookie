import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../services/api'; // Ensure this import points to your API service file
import { useAuth } from '../context/AuthContext'; // Importing useAuth

const Home = () => {
    const { logout } = useAuth(); // Accessing logout function
    const [fade, setFade] = useState(false);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFade(true);
        }, 100); // Delay to trigger fade-in animation
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const booksData = await fetchBooks();
                console.log("Fetched books:", booksData); // Log to verify the fetched data
                setBooks(booksData);
            } catch (error) {
                console.error("Failed to load books:", error);
            } finally {
                setLoading(false);
            }
        };

        loadBooks();
    }, []);

    const genres = [
        { name: 'Fiction', image: 'https://example.com/fiction.jpg' },
        { name: 'Non-Fiction', image: 'https://example.com/non-fiction.jpg' },
        { name: 'Science', image: 'https://example.com/science.jpg' },
        { name: 'Fantasy', image: 'https://example.com/fantasy.jpg' },
        { name: 'Mystery', image: 'https://example.com/mystery.jpg' },
        { name: 'Romance', image: 'https://example.com/romance.jpg' },
        { name: 'Thriller', image: 'https://example.com/thriller.jpg' },
        { name: 'History', image: 'https://example.com/history.jpg' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-200 via-blue-100 to-gray-100">
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-gradient-to-b from-blue-200 to-blue-100 shadow-md p-4">
                <div className="flex-grow text-center">
                    {/* This div keeps the logo or title space without displaying it */}
                </div>
                <div className="flex items-center">
                    <Link to="/profile" className="text-blue-600 hover:text-blue-800 px-4">Profile</Link>
                    <button
                        onClick={logout}
                        className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-md transition duration-200"
                    >
                        Logout
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <div className={`flex flex-col items-center justify-center flex-1 p-6 transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className={`text-6xl font-extrabold text-blue-900 mb-6 transition-transform duration-700 transform ${fade ? 'scale-100' : 'scale-50'}`}>
                    Welcome to <span className="text-blue-600">E-Bookie</span>!
                </h2>
                <p className={`text-lg text-gray-800 mb-10 text-center max-w-2xl transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    Discover, explore, and immerse yourself in a world of books across all genres. Your next great read is just a click away!
                </p>

                <Link
                    to="/books"
                    className={`bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={(e) => loading && e.preventDefault()} // Prevent click if loading
                >
                    {loading ? 'Loading...' : 'Browse Books'}
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
                        {loading ? (
                            <p>Loading books...</p>
                        ) : books.length === 0 ? (
                            <p>No books available.</p>
                        ) : (
                            books.map((book) => (
                                <div key={book._id} className="bg-white p-4 rounded-lg shadow-lg m-2 transition-transform transform hover:scale-105 hover:shadow-xl">
                                    <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-2" />
                                    <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
                                    <p className="text-gray-600">{book.description}</p>
                                    <Link to={`/books/${book._id}`} className="mt-2 inline-block text-blue-600 hover:underline transition duration-300 hover:text-blue-800">
                                        View Details
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
