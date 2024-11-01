import React from 'react';

const BookDetails = ({ book }) => {
    return (
        <div className="p-4">
            <img src={book.image} alt={book.title} className="w-full h-96 object-cover" />
            <h1 className="text-2xl font-bold">{book.title}</h1>
            <h2 className="text-xl">{book.author}</h2>
            <p>{book.description}</p>
            <button className="bg-blue-500 text-white rounded p-2">Add to Cart</button>
        </div>
    );
};

export default BookDetails;
