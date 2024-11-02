// src/pages/CartPage.js

import React from 'react';

// Use a common book image
const commonBookImage = "https://img.icons8.com/ios/452/open-book.png"; // Updated book vector image URL

const CartPage = () => {
    // Mock data for cart items (replace with actual cart state or backend data)
    const cartItems = [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            price: 12.99,
            quantity: 1,
            image: commonBookImage, // Using the common book image
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            price: 14.99,
            quantity: 2,
            image: commonBookImage, // Using the common book image
        },
    ];

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Your Cart</h1>
            {cartItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-2">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-28 object-cover rounded-lg mr-4"
                                />
                                <div className="flex-grow">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600">by {item.author}</p>
                                    <p className="text-blue-600 font-bold">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center mt-2">
                                        <button className="bg-gray-200 px-2 rounded-md mr-2">-</button>
                                        <span className="text-gray-800">{item.quantity}</span>
                                        <button className="bg-gray-200 px-2 rounded-md ml-2">+</button>
                                        <button className="ml-4 text-red-600 hover:text-red-800">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
                        <p className="text-gray-700 mb-2">
                            Total Items: <span className="font-bold">{cartItems.length}</span>
                        </p>
                        <p className="text-gray-700 mb-4">
                            Total Price: <span className="font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
                        </p>
                        <button className="w-full bg-blue-800 text-white py-2 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-gray-600 text-center mt-10">Your cart is currently empty.</p>
            )}
        </div>
    );
};

export default CartPage;
