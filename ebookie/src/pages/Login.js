// src/pages/Login.js

import React from 'react';

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">Login to E-Bookie</h1>
                <form className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-800 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                    >
                        Login
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
