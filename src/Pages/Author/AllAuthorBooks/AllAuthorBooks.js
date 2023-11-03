import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';

const AllAuthorBooks = () => {
    const allBooks = [
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
        {
            id: 1,
        },
    ]
    return (
        <div className='my-9 mx-[7%]'>
            <div>
                <h1 className='text-xl lg:text-5xl font-medium'>All Authors Books</h1>
                <p className='my-2'>Unveiling the World's Most Famous Authors</p>
                <hr />
            </div>
            <div className='mt-16'>
                {
                    allBooks.map((allBook, i) => <div className={` py-6 mt-6 odd:bg-[#FBADAF66] even:bg-[#D2EDF2]`}>
                    <div className='flex'>
                        <div className='px-4'>
                            <img src="https://i.ibb.co/8cyRwdk/author-4.png" alt="" />
                        </div>
                        <div className='px-3'>
                                <div className='flex justify-between items-center'>
                                    <h1>William Shakespeare</h1>
                                    <Link to=''><Button>Join</Button></Link>
                                </div>
                                <div>
                                    <p className='mt-10'><small>Books by:</small></p> 
                                    <p>"Romeo and Juliet ,Hamlet ,Macbeth , Othello he Hobbit ,The Lord of the Rings series, The Fellowship of the Ring, The Two Towers,The Return of the King"</p>  
                                </div>
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default AllAuthorBooks;