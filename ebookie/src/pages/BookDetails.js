// src/pages/BookDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams(); // Get the book ID from the URL parameters

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Book Details for ID: {id}</h1>
            {/* You can fetch and display book details here based on the ID */}
            <p>This is where the book details would go.</p>
        </div>
    );
};

export default BookDetails;
