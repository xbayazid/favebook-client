import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loader from '../../../components/Loader/Loader';
import { BsSend } from "react-icons/bs";
import { useQuery } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';

const Message = () => {
    const { user, loading } = useContext(AuthContext)
    const data = useLoaderData();
    const { _id, message } = data;

    const { data: messages = [], isLoading, refetch } = useQuery({
        queryKey: ['message', _id],
        queryFn: async () => {
            const res = await fetch(`https://favebook-server-chi.vercel.app/groups/${_id}`);
            const data = await res.json();
            return data.message;
        }
    })

    if (loading) {
        return <Loader />
    }
    if (isLoading) {
        return <Loader />
    }
    const handleMessage = (event) => {
        event.preventDefault();

        const form = event.target;
        const text = form.text.value;
        const name = user?.displayName;
        const img = user?.photoUrl;
        const email = user?.email;

        const message = {
            name,
            img,
            email,
            text
        }

        fetch(`https://favebook-server-chi.vercel.app/groups/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                refetch();
            })

    }
    return (
        <div className='mt-10'>
            <div className='flex justify-end'>
            <label htmlFor="message-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <span className="btn btn-outline btn-accent">View Your Group</span>
      </label>
            </div>
            {
                
                <div>
                <div className='flex items-center gap-3 mb-5'>
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img alt='' src={data.groupImage} />
                        </div>
                    </div>
                    <h2 className="text-xl font-bold">{data.groupName}</h2>
                </div>
                <hr />
                <div className='max-h-[65vh] flex flex-col-reverse overflow-y-auto'>
                    <div className='h-full '>
                        {
                            messages.map((data, i) => (
                                <div key={i} className={`chat ${data.email === user?.email ? 'chat-end' : 'chat-start'}`}>
                                    <div className="chat-image avatar">
                                        <div className="w-10 rounded-full">
                                            {
                                                data.img ?
                                                    <img src={data.img} alt="" /> : <FaUser className='text-4xl' />
                                            }
                                        </div>
                                    </div>
                                    <div className="chat-header">
                                        {data.name}
                                    </div>
                                    <div className={`chat-bubble ${data.email === user?.email ? 'chat-bubble-primary' : 'chat-bubble-info'}`}>{data.text}</div>
                                    <div className="chat-footer opacity-50">
                                        {data.email === user?.email ? 'Delivered' : ''}
                                    </div>
                                </div>
                            ))
                        }
                        <div>
                            <form onSubmit={handleMessage} className='flex items-center'>
                                <textarea type="text" placeholder="Type here" name='text' className="textarea textarea-accent w-full text-justify pr-10 rounded-3xl" />
                                <button type='submit'><BsSend className='text-2xl -ml-10' /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                
            }
        </div>
    );
};

export default Message;