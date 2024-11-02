// src/components/Footer.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} E-Bookie. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaFacebookF size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
