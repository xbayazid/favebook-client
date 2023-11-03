import React from 'react';
import BookSearch from './BookSearch/BookSearch';
import BookCategory from './BookCategory/BookCategory';
import MyPassion from '../Home/MyPassion/MyPassion';

const Book = () => {
    return (
        <div>
            <BookSearch/>
            <BookCategory/>
            <MyPassion/>
        </div>
    );
};

export default Book;