import React from 'react';
import { FaSearch } from "react-icons/fa";

const BookSearch = () => {
    return (
        <div className='mx-[7%]'>
            <div className='bg-[#D0ECF1] rounded-lg'>
                <div className=' lg:w-[757px] mx-auto py-24'>
                    <h1 className='text-2xl lg:text-5xl font-semibold text-center'>Find your Books & Discover Your Literary Explorer</h1>
                    <div className='mt-12 text-center'>
                    <input className='py-4 w-96 rounded-lg input input-bordered relative' placeholder='Book Name' type="search" name="" id="" /> <span className='absolute bg-[#03CCD9] px-3 py-2 rounded-lg -ml-3'><FaSearch className='text-3xl'/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookSearch;