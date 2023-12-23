import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import FillButton from '../../../components/FillButton/FillButton';
import { FaRegComments, FaRegHeart } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import { async } from 'q';
import Loader from '../../../components/Loader/Loader';
import PostCard from '../../../components/PostCard/PostCard';
import PostsModal from '../../../components/PostsModal/PostsModal';

const NewsFeed = () => {
    const [postModal, setPostModal] = useState(null);

    const { data: newsFeedItems = [], isLoading } = useQuery({
        queryKey: ['newsFeed'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/posts/');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loader />
    }

    const posts = [...newsFeedItems].reverse().slice(0, 3);

    return (
        <div>
            <div className='my-6 mx-[7%]'>
                <div className='mb-2 lg:flex justify-between items-center'>
                    <div>
                        <h1 className='text-xl lg:text-5xl font-medium mb-2'>Book News feed</h1>
                        <p>Explore your book and like comment share</p>
                    </div>

                    <div className='flex items-center z-[50] gap-3 mt-3 lg:mt-0'>


                            <label
                                htmlFor="post-modal"
                                onClick={() => setPostModal('hello')}
                                className='border-2 px-6 py-2 rounded border-indigo-600 hover:bg-indigo-600 hover:text-white duration-700'
                            >
                                Post
                            </label>
                        

                        <div>
                            {/* <FillButton>Recent</FillButton> */}
                        </div>
                    </div>
                </div>

                <hr />

                <div>
                    {
                        posts.map((post, i) => <PostCard key={i} postItem={post}></PostCard>)
                    }
                </div>
                <div className='flex justify-center mt-6'>
                    <Link to='/reviews'><Button>View More</Button></Link>
                </div>


            </div>
            {
                postModal &&
                <PostsModal setPostModal={setPostModal}/>
            }
        </div>
    );
};

export default NewsFeed;