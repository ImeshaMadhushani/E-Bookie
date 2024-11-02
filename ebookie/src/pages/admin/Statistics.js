// src/pages/Statistics.js

import React from 'react';

const Statistics = () => {
    // Example data; in a real application, this could be fetched from a server
    const totalBooks = 120; // This value should be dynamically fetched
    const totalUsers = 75;   // This value should be dynamically fetched
    const totalOrders = 200; // This value should be dynamically fetched

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Statistics Overview</h1>
            <p className="text-lg text-gray-700 mb-6">
                Here you can view key statistics about your library.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-blue-800">Total Books</h2>
                    <p className="text-2xl font-bold">{totalBooks}</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-blue-800">Total Users</h2>
                    <p className="text-2xl font-bold">{totalUsers}</p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4 text-center transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-blue-800">Total Orders</h2>
                    <p className="text-2xl font-bold">{totalOrders}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
