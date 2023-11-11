import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const postItem = useLoaderData();
    return (
        <div>
            <h1>This is post number {postItem._id}</h1>
        </div>
    );
};

export default PostDetails;