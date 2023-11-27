import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import PostCard from '../../components/PostCard/PostCard';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    const {data: posts = [], isLoading} = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch(`https://favebook-server-chi.vercel.app/myPosts?email=${user?.email}`)
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h1 className="text-5xl font-semibold">My Posts</h1>
            {
                posts.map(post => <PostCard key={post._id} postItem={post}/>)
            }
        </div>
    );
};

export default Dashboard;