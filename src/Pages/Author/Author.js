import React from 'react';
import AuthorSearch from './AuthorSearch/AuthorSearch';
import FamousAuthors from './FamousAuthors/FamousAuthors';

const Author = () => {
    return (
        <div>
           <AuthorSearch/>
           <FamousAuthors/> 
        </div>
    );
};

export default Author;