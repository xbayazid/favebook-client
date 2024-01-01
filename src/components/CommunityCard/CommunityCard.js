import { Button } from '@radix-ui/themes';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const CommunityCard = ({item}) => {
    const {_id, groupName, members, description, groupImage} = item;
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const [disable, setDisavle] = useState(false);
    const navigate = useNavigate()

    // const {data: gropuMembers = []} = useQuery({
    //     queryKey: ['member'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://favebook-server-chi.vercel.app/groups/${_id}`);
    //         const data = await res.json();
    //         const members = await data.members;
    //         const joined = await members.filter(member => member.email === user?.email);
    //         console.log(joined.length)
    //         if(await joined.length){
    //             setDisavle(true)
    //         }
    //         return members;
    //     }
    // })


    const joined = members.filter(member => member.email === user?.email);
    console.log(groupName, joined.length)
    useEffect(() => {
        if(joined.length > 0){
            setDisavle(true);
        }
    }, [joined])

    

    const handleJoinGroup = (id) =>{
        if(!user){
            <Navigate to="/authentication" state={{from: location}} replace></Navigate>
        }
        else{
            const name = user?.displayName;
            const email = user?.email;
            const img = user?.photoURL;

            const member = {
                name,
                email,
                img
            }

            fetch(`https://favebook-server-chi.vercel.app/joinGroup/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(member)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    navigate('/dashboard/message')
                }
            })
        }
    }
    return (
        <div className="card h-[600px]">
                    <figure className="px-5 pt-5">
                        <img src={groupImage} alt="Shoes" className="rounded-xl h-[250px]" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-center">{groupName}</h2>
                        <p className='text-gray-600 text-center'>{members.length} members</p>
                        <p className='my-2'>{description}</p>
                        <div className="card-actions">
                            <button  className='border-2 px-6 py-2 cursor-pointer rounded border-indigo-600 hover:bg-indigo-600 hover:text-white duration-700' onClick={() => handleJoinGroup(_id)} disabled={disable}>Join as a book Lover</button>
                        </div>

                    </div>
                </div>
    );
};

export default CommunityCard;