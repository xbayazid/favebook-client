import * as Tabs from '@radix-ui/react-tabs';
import '../../../styles.css'
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider';

const AllUser = () => {
    // const {user} = useContext(AuthContext);
    const [allUser, setAllUser] = useState([])
    const [author, setAuthor] = useState([]);
    const [authorRequest, setAuthorRequest] = useState([]);
    const [admin, setAdmin] = useState([]);
    const [requestEmail, setRequestEmail] = useState('');
    const [role, setRole] = useState('');
    const [userName, setUserName] = useState('');
    const [authorImage, setAuthorImage] = useState('');


    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };


    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            data.map(async (user, i) => {
                if (await user.role === 'admin') {
                    setAdmin([...admin, user]);
                }
                else if (await user.role === 'author') {
                    setAuthor([...author, user])
                }
                else if (await user.role === 'authorRequest') {
                    setAuthorRequest([...authorRequest, user])
                }
                else {
                    setAllUser([...allUser, user]);
                }
            })
            return data;
        }
    })

    const handleRole = () => {
        const url = `http://localhost:5000/users/update/${requestEmail}?action=${role}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    if (role === 'confirm') {
                        const author = {
                            name: userName,
                            email: requestEmail,
                            img: authorImage
                        }
                        fetch(`http://localhost:5000/authors`, {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(author)

                        })
                            .then(res => res.json)
                            .then(data => {
                                refetch();
                                closeModal('action-modal');
                                toast.success((role === 'confirm' ? 'Author Request Confirm Successfully' : 'Author Request Cancel Successfully'))
                            })
                    } else {
                        refetch();
                        closeModal('action-modal');
                        toast.success((role === 'confirm' ? 'Author Request Confirm Successfully' : 'Author Request Cancel Successfully'))
                    }

                }
            })
    }


    const handleMakeAdmin = () => {

    }
    return (
        <div>
            <div className='my-6 mx-[7%]'>
                <Tabs.Root className="TabsRoot" defaultValue="tab1">
                    <Tabs.List className="TabsList" aria-label="Manage your account">

                        <Tabs.Trigger className="TabsTrigger" value='tab1'>
                            Member
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger" value='author'>
                            Authors
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger" value='authorRequest'>
                            <div className="indicator">
                                {
                                    authorRequest.length > 0 &&
                                    <span className=" indicator-item text-white badge badge-error">new</span>
                                }
                                <div className="grid w-36">Author Request</div>
                            </div>
                        </Tabs.Trigger>
                        <Tabs.Trigger className="TabsTrigger" value='admin'>
                            Admin
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content className="TabsContent" value="tab1">
                        <div className="transform duration-500">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => user?.role === 'Member' ? <tr className="hover" key={user._id}>
                                            <th>{user.userImage ?
                                                <img src={user.userImage} alt="" className='h-[60px] w-[60px] rounded-full' /> : <FaUser className='text-4xl' />}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button className='btn btn-xs btn-error'>Delete</button></td>
                                        </tr> : <></>)
                                    }
                                </tbody>
                            </table>

                        </div>
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="author">
                        <div className="transform duration-500">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => user?.role === 'author' ? <tr className="hover" key={user._id}>
                                            <th>{user.userImage ?
                                                <img src={user.userImage} alt="" className='h-[60px] w-[60px] rounded-full' /> : <FaUser className='text-4xl' />}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button onClick={() => {
                                                document.getElementById('action-modal').showModal();
                                                setRequestEmail(user.email);
                                                setRole('delete');
                                                setUserName(user.name)
                                            }} className='btn btn-xs btn-error'>Delete</button></td>
                                        </tr> : <></>)
                                    }
                                </tbody>
                            </table>

                        </div>
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="authorRequest">
                        <div className="transform duration-500">

                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Confirm</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => user?.role === 'authorRequest' ? <tr className="hover" key={user._id}>
                                            <th>{user.userImage ?
                                                <img src={user.userImage} alt="" className='h-[60px] w-[60px] rounded-full' /> : <FaUser className='text-4xl' />}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button onClick={() => {
                                                document.getElementById('action-modal').showModal();
                                                setRequestEmail(user.email);
                                                setRole('confirm');
                                                setUserName(user.name);
                                                setAuthorImage(user.userImage);
                                            }} className='btn btn-xs btn-success'>Confirm</button></td>
                                            <td><button onClick={() => {
                                                document.getElementById('action-modal').showModal();
                                                setRequestEmail(user.email);
                                                setRole('cancel');
                                                setUserName(user.name)
                                                setAuthorImage(user.userImage)
                                            }} className='btn btn-xs btn-error'>Delete</button></td>
                                        </tr> : <></>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </Tabs.Content>
                    <Tabs.Content className="TabsContent" value="admin">
                        <div className="transform duration-500">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => user?.role === 'admin' ? <tr className="hover" key={user._id}>
                                            <th>{user.userImage ?
                                                <img src={user.userImage} alt="" className='h-[60px] w-[60px] rounded-full' /> : <FaUser className='text-4xl' />}</th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button className='btn btn-xs btn-error'>Delete</button></td>
                                        </tr> : <></>)
                                    }
                                </tbody>
                            </table>

                        </div>
                    </Tabs.Content>

                </Tabs.Root>
            </div>
            <dialog id="action-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg capitalize text-center my-10">do you want to {role} the {userName} {(role === 'confirm' || role === 'cancel') && 'request'} !!!</h3>

                    <p className='text-right'><button onClick={handleRole} className={`btn btn-outline ${role === 'confirm' ? 'btn-success' : 'btn-error'} mt-5`}>{role === 'confirm' ? 'Confirm' : 'Delete'}</button></p>
                </div>
            </dialog>
        </div>
    );
};

export default AllUser;