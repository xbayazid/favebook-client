import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const AuthorAppointment = () => {
    const { user } = useContext(AuthContext);
    const [meeting, setMeeting] = useState('');

    const { data: meetings = [], isLoading, refetch } = useQuery({
        queryKey: ['meeting'],
        queryFn: async () => {
            const res = await fetch(`https://favebook-server-chi.vercel.app/myMeeting?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };

    const handleConfirm = (event) => {
        event.preventDefault();
        console.log(meeting)

        const date = event.target.date.value;
        const time = event.target.time.value;

        const dateandtime = {
            date,
            time
        }

        fetch(`https://favebook-server-chi.vercel.app/meeting/${meeting._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(dateandtime)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledge) {
                    toast.success('meeting confirm')
                }
            })

    }

    const handleDelete = (id) => {
        fetch(`https://favebook-server-chi.vercel.app/meeting/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Appointment deleted successfully`)
                }
            })
    }
    return (
        <div>
            <div className="transform duration-500">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            meetings.map((user, i) => <tr className="hover" key={user._id}>
                                <th>{user.authorImage ?
                                    <img src={user.authorImage} alt="" className='h-[60px] w-[60px] rounded-full' /> : <FaUser className='text-4xl' />}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.date ? user.date : 'Not Confirm Yet'}</td>
                                <td>{user.time ? user.meet : 'Not Confirm Yet'}</td>
                                <td>
                                    {
                                        user.status === 'pending' ? <button onClick={() => {
                                            document.getElementById('meeting-modal').showModal();
                                            setMeeting(user)
                                        }
                                        } className='btn btn-xs btn-success'>confirm</button> :
                                        <a href={user.meet} target='_blank' className='btn btn-xs btn-success'> Join Meet</a>
                                    }
                                </td>
                                <td><button onClick={() => handleDelete(user._id)
                                } className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
            <dialog id="meeting-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h2 className="text-xl font-semibold mt-5 capitalize text-center">Do you really want to send a request for make you owner!!</h2>
                    <form className='my-5' onSubmit={handleConfirm}>
                        <input type="date" name='date' placeholder="Enter Your Meet Link" className="input input-bordered input-primary w-full" required />
                        <input type="time" name='time' placeholder="Enter Your Famous Books name" className="input input-bordered input-primary w-full mt-5" required />
                        <p className='text-right'><button type='submit' className="btn btn-outline btn-primary mt-5">Request</button></p>
                    </form>


                </div>
            </dialog>
        </div>
    );
};

export default AuthorAppointment;