import { Button } from '@radix-ui/themes';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const CommunityCard = ({item}) => {
    const {_id, groupName, members, description, groupImage} = item;
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const [disable, setDisavle] = useState(false);

    // const {data} = useQuery({
    //     queryKey: ['data'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/groups/');
    //         const data = await res.json();
    //         const members = data.
    //     }
    // })

    

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

            fetch(`http://localhost:5000/joinGroup/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(member)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }
    return (
        <div className="card bg-[#FBADAF66] shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={groupImage} alt="Shoes" className="rounded-xl" />
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