import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import { FaSearch, FaUser } from 'react-icons/fa';

const AllAuthorBooks = () => {
    const [lastIndex, setLastIndex] = useState(4);
    const [search, setSearch] = useState('');
    const { data: authors = [], isLoading } = useQuery({
        queryKey: ['author'],
        queryFn: async () => {
            const res = await fetch('https://favebook-server-chi.vercel.app/authors/');
            const data = await res.json();
            return data;
        }
    })
    const handleLastIndex = () => {
        setLastIndex(lastIndex + 3);
    }
    return (
        <div>
            <div className='mx-[7%]'>
                <div className='bg-[#D0ECF1] rounded-lg'>
                    <div className=' lg:w-[757px] mx-auto py-24'>
                        <h1 className='text-2xl lg:text-5xl font-semibold text-center'>Find your Author & Discover Your Literary Explorer</h1>
                        <div className='mt-12 text-center'>
                            <input onChange={(e) => setSearch(e.target.value)} className='py-4 w-96 rounded-lg input input-bordered relative' placeholder='Author Name' type="search" name="" id="" /> <span className='absolute bg-[#03CCD9] px-3 py-2 rounded-lg -ml-3'><FaSearch className='text-3xl' /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-9 mx-[7%]'>
                <div>
                    <h1 className='text-xl lg:text-5xl font-medium'>All Authors Books</h1>
                    <p className='my-2'>Unveiling the World's Most Famous Authors</p>
                    <hr />
                </div>
                <div className='mt-16'>
                    {
                        authors.filter(author => {
                            return search.toLowerCase() === '' ? author : author.name.toLowerCase().includes(search)
                        }).slice(0, lastIndex).map((author, i) => <div className={` py-6 mt-6 odd:bg-[#FBADAF66] even:bg-[#D2EDF2]`}>
                        <div className='flex'>
                            <div className='px-4'>
                                {
                                    author.img ?
                                        <img src={author.img} alt="" className='h-[200px] w-[300px]' /> : <FaUser className='text-[200px]' />
                                }
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
        </div>
    );
};

export default AllAuthorBooks;