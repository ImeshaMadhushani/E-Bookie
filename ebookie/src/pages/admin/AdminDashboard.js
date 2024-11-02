// src/pages/admin/AdminDashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className="bg-blue-800 text-white w-1/4 p-4 min-h-screen">
                <h2 className="text-2xl font-bold mb-4">Admin Menu</h2>
                <ul>
                    <li className="mb-2">
                        <Link to="/admin/dashboard" className="hover:text-blue-300">Dashboard</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/admin/manage-books" className="hover:text-blue-300">Manage Books</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/admin/manage-users" className="hover:text-blue-300">Manage Users</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="/admin/statistics" className="hover:text-blue-300">Statistics</Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4">
                <h1 className="text-3xl font-bold text-blue-900 mb-6">Admin Dashboard</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to the admin panel! Here you can manage your books, users, and view statistics.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-blue-800">Manage Books</h2>
                        <p>View, add, or edit your book collection.</p>
                        <Link to="/admin/manage-books" className="mt-2 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
                            Go to Books
                        </Link>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-blue-800">Manage Users</h2>
                        <p>View and manage user accounts.</p>
                        <Link to="/admin/manage-users" className="mt-2 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
                            Go to Users
                        </Link>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                        <h2 className="text-xl font-semibold text-blue-800">Statistics</h2>
                        <p>View insights about your library.</p>
                        <Link to="/admin/statistics" className="mt-2 inline-block bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700">
                            View Stats
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
