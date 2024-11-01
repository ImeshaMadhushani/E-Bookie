import React from 'react';

const BookCard = ({ book }) => {
    return (
        <div className="border rounded-lg p-4 m-2">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
            <h2 className="font-bold">{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.rating} ★</p>
            <button className="bg-blue-500 text-white rounded p-2">Add to Cart</button>
        </div>
    );
};

export default BookCard;
