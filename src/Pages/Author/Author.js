import React from 'react';
import AuthorSearch from './AuthorSearch/AuthorSearch';
import FamousAuthors from './FamousAuthors/FamousAuthors';
import AllAuthorBooks from './AllAuthorBooks/AllAuthorBooks';

const Author = () => {
    return (
        <div>
           {/* <AuthorSearch/> */}
           <AllAuthorBooks/> 
           <FamousAuthors/>
        </div>
    );
};

export default Author;