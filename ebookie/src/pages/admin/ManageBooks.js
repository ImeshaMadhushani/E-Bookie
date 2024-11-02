// src/pages/ManageBooks.js

import React, { useState } from 'react';

const ManageBooks = () => {
    const [books, setBooks] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, { ...formData, id: Date.now() }]);
        setFormData({ title: '', author: '', description: '', imageUrl: '' }); // Reset form
    };

    const handleDelete = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Manage Books</h1>

            <form className="mb-6" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Book Title"
                    value={formData.title}
                    onChange={handleChange}
                    className="border rounded p-2 mb-2 w-full"
                    required
                />
                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    value={formData.author}
                    onChange={handleChange}
                    className="border rounded p-2 mb-2 w-full"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="border rounded p-2 mb-2 w-full"
                    required
                />
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="border rounded p-2 mb-2 w-full"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition">
                    Add Book
                </button>
            </form>

            <h2 className="text-2xl font-bold mb-2">Books List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded" />
                        <h3 className="text-xl font-semibold">{book.title}</h3>
                        <p className="text-gray-700">{book.author}</p>
                        <p className="text-gray-600 mb-4">{book.description}</p>
                        <button
                            className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition"
                            onClick={() => handleDelete(book.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageBooks;
