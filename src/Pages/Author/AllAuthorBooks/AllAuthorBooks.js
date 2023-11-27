import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { useQuery } from '@tanstack/react-query';

const AllAuthorBooks = () => {
    const [lastIndex, setLastIndex] = useState(4);
    const {data: authors = [], isLoading} = useQuery({
        queryKey: ['author'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/authors/');
            const data = await res.json();
            return data;
        }
    })
    const handleLastIndex = () => {
        setLastIndex(lastIndex + 3);
    }
    return (
        <div className='my-9 mx-[7%]'>
            <div>
                <h1 className='text-xl lg:text-5xl font-medium'>All Authors Books</h1>
                <p className='my-2'>Unveiling the World's Most Famous Authors</p>
                <hr />
            </div>
            <div className='mt-16'>
                {
                    authors.map((author, i) => <div className={` py-6 mt-6 odd:bg-[#FBADAF66] even:bg-[#D2EDF2]`}>
                    <div className='flex'>
                        <div className='px-4'>
                            <img src={author.img} alt="" />
                        </div>
                        <div className='px-3'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl font-semibold'>{author.name}</h1>
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
                <div className="text-center my-10"><button className='btn btn-outline btn-accent' onClick={handleLastIndex}>View More</button></div>
            </div>
        </div>
    );
};

export default AllAuthorBooks;