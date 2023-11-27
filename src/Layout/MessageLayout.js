import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MessageLayout = () => {
    const { data: groups = [], isLoading } = useQuery({
        queryKey: ['group'],
        queryFn: async () => {
            const res = await fetch('https://favebook-server-chi.vercel.app/groups/');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay btn btn-primary drawer-button lg:hidden"></label>
                    <ul className="p-4 text-base-content">
                        {
                            groups.map(group => (
                                <li className='font-semibold my-3 flex items-center gap-3'>
                                    <img src={group.groupImage} alt="" className='h-[60px] w-[60px] rounded-full' />
                                    <span><Link to={`/dashboard/message/${group._id}`}>{group.groupName.slice(0,15)}...</Link></span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MessageLayout;