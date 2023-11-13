import * as Tabs from '@radix-ui/react-tabs';
import '../../../styles.css'
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUser = () => {
    const [allUser, setAllUser] = useState([])
    const [author, setAuthor] = useState([]);
    const [authorRequest, setAuthorRequest] = useState([]);
    const [admin, setAdmin] = useState([]);


    const { data: users = [], isLoading } = useQuery({
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

    // users.map(async (user, i) => {
    //     if (await user.role === 'admin') {
    //         setAdmin([...admin, user]);
    //     }
    //     else if (await user.role === 'author') {
    //         setAuthor([...author, user])
    //     }
    //     else if (await user.role === 'authorRequest') {
    //         setAuthorRequest([...authorRequest, user])
    //     }
    //     else {
    //         setAllUser([...allUser, user]);  
    //     }

    // })

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
                                    authorRequest.length &&
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
                                            <th><img src={user.userImage} alt="" className='h-[60px] w[60px] rounded-full' /></th>
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
                                            <th><img src={user.userImage} alt="" className='h-[60px] w[60px] rounded-full' /></th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button className='btn btn-xs btn-error'>Delete</button></td>
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
                                            <th><img src={user.userImage} alt="" className='h-[60px] w[60px] rounded-full' /></th>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td><button className='btn btn-xs btn-success'>Confirm</button></td>
                                            <td><button className='btn btn-xs btn-error'>Delete</button></td>
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
                                            <th><img src={user.userImage} alt="" className='h-[60px] w[60px] rounded-full' /></th>
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
        </div>
    );
};

export default AllUser;