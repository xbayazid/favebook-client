import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CommentCard = ({comment}) => {
    const {name, img, userType, review} = comment;
    return (
        <div className='mx-[8%] bg-[#F6F4F4]'>
            <div className="card shadow-xl mt-16" >
                <div className="card-body">
                    {/* <h2 className="font-medium text-2xl">"{bookName}"</h2> */}
                    <div className='flex items-center gap-3'>
                        <div>
                            {
                                img ?
                                    <img src={img} alt="" /> : <FaUser className='text-4xl'/>
                            }

                        </div>
                        
                        <div>
                            <p>{name}</p>
                            <p className='text-gray-400'>{userType}</p>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <p className='lg:w-[65%] text-justify'>{review}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;