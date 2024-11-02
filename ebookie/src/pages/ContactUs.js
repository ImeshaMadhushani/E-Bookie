// src/pages/ContactUs.js

import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                We would love to hear from you! Fill out the form below, and our team will get back to you soon.
            </p>
            <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        placeholder="Type your message here..."
                        className="border border-gray-300 rounded-lg p-3 w-full h-32 resize-none focus:border-blue-500 focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-800 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactUs;
