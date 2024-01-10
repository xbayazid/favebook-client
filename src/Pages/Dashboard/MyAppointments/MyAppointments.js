import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { FaUser } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyAppointments = () => {
    const { user } = useContext(AuthContext)
    const { data: meeting = [], isLoading, refetch } = useQuery({
        queryKey: ['meeting'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/meeting?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/meeting/${id}`, {
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
                            meeting.map((user, i) => <tr className="hover" key={user._id}>
                                <th>{user.authorImage ?
                                    <img src={user.authorImage} alt="" className='h-[60px] w-[60px] rounded-full' /> : <FaUser className='text-4xl' />}</th>
                                <td>{user.authorName}</td>
                                <td>{user.authorEmail}</td>
                                <td>{user.date ? user.date : 'Not Confirm Yet'}</td>
                                <td>{user.time ? user.time : 'Not Confirm Yet'}</td>
                                <td>{user.status === 'pending' ? user.status : <a href={user.meet} target='_blank' className='btn btn-xs btn-success'> Join Meet</a>}</td>
                                <td><button onClick={() => handleDelete(user._id)
                                } className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default MyAppointments;