
import React from 'react';
import { FaRegComments, FaRegHeart } from 'react-icons/fa';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const PostCard = ({postItem}) => {
    const {_id, name, userImage, userType, bookName, bookImage, post} = postItem;
    const slicePost = post.slice(0, 300);
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mt-16" style={{ background: '#F6F4F4', borderRadius: 8 }}>
                <div className="card-body">
                    <h2 className="font-medium text-2xl">"{bookName}"</h2>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src={userImage} alt="" />
                        </div>
                        <div>
                            <p>{name}</p>
                            <p className='text-gray-400'>{userType}</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='lg:w-[860px] text-justify'>{slicePost}....</p>
                    </div>
                    <div className="card-actions">
                        <div className='flex items-center gap-5 mt-5'>
                            <p className='text-3xl text-red-600'><FaRegHeart /></p>
                            <p className='text-3xl text-red-600'><FaRegComments /></p>
                            <Link to={`/postDetails/${_id}`}><Button>Read More</Button></Link>
                        </div>
                    </div>
                </div>

                <div className='-mt-20 py-12 px-12'>
                    <figure><img src={bookImage} alt="Movie" /></figure>
                </div>
            </div>
        </div>
    );
};

export default PostCard;