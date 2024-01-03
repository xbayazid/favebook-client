import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import PostCard from '../../components/PostCard/PostCard';
import { Link } from 'react-router-dom';
import ButtonUnFill from '../../components/ButtonUnFill/ButtonUnFill';
import { FaBookOpen } from "react-icons/fa";
import { FaUserClock, FaUsers } from 'react-icons/fa6';


const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const {data: posts = [], isLoading} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myPosts?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className='my-5 mx-3 bg-gray-300 p-3 rounded-xl'>
                <div className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-7'>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                    <Link to=''>
                    <img src="https://i.ibb.co/JWZ8WjT/37d8de4ea3d351be88e2933c43d7ba49.jpg" alt="" />
                    </Link>
                </div>
                <div className='w-1/2 mx-auto my-3'>
                    <Link to='/book'>
                    <ButtonUnFill>Recommanded Book for You</ButtonUnFill>
                 </Link>
                </div>
            </div>
            <div className="my-5 mx-3 bg-blue-300 px-3 py-6 rounded-xl">
                <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[10%] items-center">
                    <div className='justify-center'>
                    <FaBookOpen className='text-3xl lg:text-4xl' />
                    <p>All Post</p>
                    <h2 className='font-semibold text-2xl'>300</h2>
                    </div>
                    <div>
                    <FaUsers className='text-4xl' />
                    <p>All club</p>
                    <h2 className='font-semibold text-2xl'>450</h2>
                    </div>
                    <div>
                    <FaUserClock className='text-4xl' />
                    <p>Appointment</p>
                    <h2 className="font-semibold text-2xl">45</h2> 
                    </div>
                </div>
            </div>
            <h1 className="text-5xl font-semibold">My Posts</h1>
            {
                posts.map(post => <PostCard key={post._id} postItem={post}/>)
            }
        </div>
    );
};

export default Dashboard;