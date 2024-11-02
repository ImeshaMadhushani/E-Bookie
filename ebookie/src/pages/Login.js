// src/pages/Login.js

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Make sure to adjust the import path according to your structure
import { useNavigate } from 'react-router-dom'; // for redirecting after login

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset error

        // Simulate an API call to login
        try {
            // Replace with your actual login API call
            const userData = await fakeLogin(email, password); // Replace this with your API call
            login(userData);
            navigate('/'); // Redirect to home after successful login
        } catch (err) {
            setError('Invalid email or password.'); // Handle error accordingly
        } finally {
            setLoading(false);
        }
    };

    const fakeLogin = (email, password) => {
        return new Promise((resolve, reject) => {
            // Fake API delay
            setTimeout(() => {
                if (email === 'test@example.com' && password === 'password') {
                    resolve({ email }); // Simulate successful login
                } else {
                    reject(new Error('Invalid credentials')); // Simulate failed login
                }
            }, 1000);
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">Login to E-Bookie</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        required
                    />
                    <button
                        type="submit"
                        className={`w-full bg-blue-800 text-white font-semibold py-3 rounded-md shadow-lg transition-transform transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Don’t have an account? <a href="/register" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
