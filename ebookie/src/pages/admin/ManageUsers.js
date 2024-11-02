// src/pages/ManageUsers.js

import React, { useState } from 'react';

const ManageUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ]);

    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [currentUserId, setCurrentUserId] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            setUsers(users.map(user => user.id === currentUserId ? { ...user, ...formData } : user));
            setIsEditing(false);
            setCurrentUserId(null);
        } else {
            setUsers([...users, { id: Date.now(), ...formData }]);
        }
        setFormData({ name: '', email: '' }); // Reset form
    };

    const handleEdit = (user) => {
        setFormData({ name: user.name, email: user.email });
        setIsEditing(true);
        setCurrentUserId(user.id);
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Manage Users</h1>

            <form className="mb-6" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="User Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded p-2 mb-2 w-full"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded p-2 mb-2 w-full"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700 transition">
                    {isEditing ? 'Update User' : 'Add User'}
                </button>
            </form>

            <h2 className="text-2xl font-bold mb-2">Users List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-gray-700">{user.email}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-yellow-500 text-white rounded px-4 py-2 hover:bg-yellow-600 transition"
                                onClick={() => handleEdit(user)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white rounded px-4 py-2 hover:bg-red-600 transition"
                                onClick={() => handleDelete(user.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageUsers;
