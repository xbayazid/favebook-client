import React from 'react';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {

    const {img, author} = book;
    return (
        <div>
            <div className="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
                <div className="h-[350px] overflow-hidden">
                    <img className="w-full h-full" src={img} alt=""/>
                </div>
                <div className="p-7 h-[200px] my-auto pb-12 ">
                    <p>by <span className='text-gray-400'>{author}</span></p>
                    <div className="mt-[18px] font-medium">
                        <Link className='flex items-center gap-3'>Read & Discussion <span><HiArrowSmallRight /></span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;