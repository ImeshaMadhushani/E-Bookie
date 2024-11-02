// src/components/AdminNavbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <nav className="bg-blue-800 p-4">
            <h1 className="text-white text-2xl font-bold">Admin Panel</h1>
            <div className="space-x-4">
                <Link to="/admin/dashboard" className="text-white hover:text-blue-300">Dashboard</Link>
                <Link to="/admin/manage-books" className="text-white hover:text-blue-300">Manage Books</Link>
                <Link to="/admin/manage-users" className="text-white hover:text-blue-300">Manage Users</Link>
            </div>
        </nav>
    );
};

export default AdminNavbar;
