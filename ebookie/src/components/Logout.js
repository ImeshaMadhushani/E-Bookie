// src/components/Logout.js

import React from 'react';
import { useAuth } from '../context/AuthContext'; // Ensure this import points to your AuthContext file
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Clear the user context
        navigate('/login'); // Redirect to login page
    };

    return (
        <button onClick={handleLogout} className="text-blue-600 hover:underline">
            Logout
        </button>
    );
};

export default Logout;
