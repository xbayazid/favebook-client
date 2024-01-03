import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { useQuery } from '@tanstack/react-query';
import { FaSearch, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const AllAuthorBooks = () => {
    const {user} = useContext(AuthContext)
    const location = useLocation();
    const [lastIndex, setLastIndex] = useState(4);
    const [search, setSearch] = useState('');
    const { data: authors = [], isLoading } = useQuery({
        queryKey: ['author'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/authors/');
            const data = await res.json();
            return data;
        }
    })
    const handleLastIndex = () => {
        setLastIndex(lastIndex + 3);
    }
    const handleReqMeeting = (authorEmail,authorImage, authorName, authorMeet) => {
        
        const meeting = {
            name: user?.displayName,
            email: user?.email,
            authorEmail,
            authorName,
            authorImage,
            img: user?.photoURL,
            status: "pending",
            meet: authorMeet
        }
        console.log(meeting)

        if(!user){
            <Navigate to="/authentication" state={{from: location}} replace></Navigate>
        }else{
            fetch(`http://localhost:5000/meeting`, {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(meeting)

                        })
                            .then(res => res.json)
                            .then(data => {
                                toast.success('Meeting Request Send Successfully')
                            })
        }
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
                        <div className='flex items-center gap-6 relative'>
                            <div className='px-4 h-[200px] w-[300px]'>
                                {
                                    author.img ?
                                        <img src={author.img} alt="" className='h-[200px] w-full' /> : <FaUser className='text-[200px]' />
                                }
                            </div>
                            <div className='px-3'>
                                <div className=''>
                                    <h1 className='text-xl font-semibold'>{author.name}</h1>
                                    
                                </div>
                                <Link onClick={() => handleReqMeeting(author.email, author.img, author.name, author.meet)} className='absolute right-5'><Button >Join</Button></Link>
                                <div>
                                    <p className='mt-10'><small>Books by:</small></p>
                                    <p>"{
                                        author.bookNames ? author.bookNames : 'Romeo and Juliet ,Hamlet ,Macbeth , Othello he Hobbit ,The Lord of the Rings series, The Fellowship of the Ring, The Two Towers,The Return of the King'
                                        }"</p>
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