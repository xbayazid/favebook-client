import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../components/Loader/Loader';
import PostCard from '../../components/PostCard/PostCard';
// import Button from '../../components/Button';

const Reviews = () => {
    const {data: newsFeedItems = [], isLoading} = useQuery({
        queryKey: ['newsFeed'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/posts/');
            const data = await res.json();
            return data;
        }
    })
    
    if(isLoading){
        return <Loader/>
    }

    const posts = [...newsFeedItems].reverse();

    return (
        <div className="my-6 mx-[7%]">
            <div className='mb-2 lg:flex justify-between items-center'>
                <div>
                    <h1 className='text-xl lg:text-5xl font-medium mb-2'>Book News feed</h1>
                    <p>Explore your book and like comment share</p>
                </div>
                <div className='flex items-center gap-3 mt-3 lg:mt-0'>
                    <Link><Button>Post</Button></Link>
                </div>
            </div>
            <hr />
            <div>
            {
                posts.map( (post, i) =>  <PostCard key={i} postItem={post}/>)
               }
            </div>
            </div>
    );
};

export default Reviews;