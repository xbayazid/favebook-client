import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import ReviewModal from '../../components/ReviewModal/ReviewModal';
import PostsModal from '../../components/PostsModal/PostsModal';

const PostDetails = () => {
    const posts = useLoaderData();
    const [postModal, setPostModal] = useState(null);
    const [reviewModal, setReviewModal] = useState(null);


    const { bookName, userImage, name, userType, bookImage, post } = posts;

    return (
        <div className='my-6 mx-[7%]'>
            {/* <h1>This is post number {postItem._id}</h1> */}
            <div>
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

                    </div>
                </div>
                <hr />
                <div>
                    <div className="card md:relative bg-base-100 shadow-xl mt-16" style={{ background: '#F6F4F4', borderRadius: 8 }}>
                        <div className="card-body">
                            <h2 className="font-medium text-2xl">"{bookName}"</h2>
                            <div className='flex items-center gap-3'>
                                <div>
                                    {
                                        userImage ?
                                            <img src={userImage} alt="" /> : <FaUser className='text-4xl' />
                                    }

                                </div>

                                <div>
                                    <p>{name}</p>
                                    <p className='text-gray-400'>{userType}</p>
                                </div>
                            </div>
                            <div className='mt-5 '>
                                <p className='lg:w-[65%] text-justify'>{post}</p>
                            </div>
                            <div>
                                <div className='flex items-center z-[50] gap-3 mt-3 lg:mt-0'>
                                    <label
                                        htmlFor="review-modal"
                                        onClick={() => setReviewModal('hi')}
                                        className='border-2 px-6 py-2 rounded bg-indigo-600 text-white cursor-pointer'
                                    >
                                        Write your review
                                    </label>

                                </div>
                            </div>
                            <div className="my-3">
                            <hr />
                            <div>
                                <h1 className="text-2xl font-semibold my-3">Community Reviews</h1>
                                <div className='flex items-center gap-3'>
                                <div>
                                    {
                                        userImage ?
                                            <img src={userImage} alt="" /> : <FaUser className='text-4xl' />
                                    }

                                </div>
                                <div>
                                    <p>{name}</p>
                                    <p className='text-gray-400'>{userType}</p>
                                </div>
                            </div>
                            <p className='text-justify mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla perspiciatis fugit, dicta nihil autem consequuntur error vel, aliquam architecto quaerat voluptatum omnis hic voluptatibus amet. Dignissimos impedit consectetur nemo quibusdam sunt, illo alias ratione harum dolorem modi recusandae minus nobis ipsa tenetur, asperiores totam ad cupiditate odio quisquam veniam.</p>
                            </div>
                            </div>
                        </div>

                        <div className='-mt-20 py-12 px-12 md:absolute md:right-5'>
                            <figure><img src={bookImage} alt="Movie" className='h-[250px] w-auto' /></figure>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewModal />
            <PostsModal />
        </div>
    );
};

export default PostDetails;