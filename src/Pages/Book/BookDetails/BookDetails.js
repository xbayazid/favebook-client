import React from 'react';
import { Link } from 'react-router-dom';

const BookDetails = () => {
    return (
        <div className="container mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <div className="flex">
          <img
            src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg"
            alt="Book Cover"
            className="w-48 h-64 object-cover rounded"
          />
          <div className="ml-8">
            <h1 className="text-4xl font-bold mb-4">Book Title</h1>
            <p className="text-gray-600 mb-4">Author Name</p>
            <p className="text-gray-800">Book Description goes here.</p>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <Link to='' className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Join the Discussion
          </Link>
        </div>
      </div>
    );
};

export default BookDetails;