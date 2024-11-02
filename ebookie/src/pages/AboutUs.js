// src/pages/AboutUs.js

import React from 'react';

const AboutUs = () => {
    return (
        <div className="p-6 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
                E-Bookie is an online platform dedicated to providing readers with a vast collection of books across all genres. Our mission is to make reading accessible, enjoyable, and engaging for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Mission</h2>
                    <p className="text-gray-600">
                        To create a community of passionate readers by providing an extensive library that caters to all tastes and preferences.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Vision</h2>
                    <p className="text-gray-600">
                        We envision a world where everyone has access to the joy of reading and the transformative power of literature.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">Our Team</h2>
                    <p className="text-gray-600">
                        Our team consists of book enthusiasts, tech innovators, and creative thinkers dedicated to enhancing your reading experience.
                    </p>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">Meet Our Team</h2>
                <p className="text-md text-gray-600 text-center mb-8">
                    A group of passionate individuals who love books just as much as you do!
                </p>
                <div className="flex flex-wrap justify-center">
                    <div className="bg-white rounded-lg shadow-md m-2 p-4 transition-transform transform hover:scale-105">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="font-semibold text-lg text-blue-700 mt-2">John Doe</h3>
                        <p className="text-gray-600">Founder & CEO</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md m-2 p-4 transition-transform transform hover:scale-105">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="font-semibold text-lg text-blue-700 mt-2">Jane Smith</h3>
                        <p className="text-gray-600">CTO</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md m-2 p-4 transition-transform transform hover:scale-105">
                        <img src="https://via.placeholder.com/150" alt="Team Member 3" className="w-full h-40 object-cover rounded-t-lg" />
                        <h3 className="font-semibold text-lg text-blue-700 mt-2">Alice Johnson</h3>
                        <p className="text-gray-600">Marketing Director</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
