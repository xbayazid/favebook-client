import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const MessageLayout = () => {
    const {user} = useContext(AuthContext);
    const { data: groups = [], isLoading } = useQuery({
        queryKey: ['group'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/groups/');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            {/* <div className="drawer lg:drawer-open">
                <input id="message-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="message-drawer" className="drawer-overlay btn btn-primary drawer-button lg:hidden"></label>
                    <ul className="p-4 text-base-content">
                        

                    </ul>
                </div>
            </div> */}
            <div className="drawer lg:drawer-open">
        <input id="message-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-screen lg:sticky lg:top-2">
          <label htmlFor="message-drawer" className="drawer-overlay  drawer-button lg:hidden"></label>
          <ul className="p-4 w-80 text-base-content bg-[#D0ECF1] lg:bg-white min-h-full mt-14 lg:mt-2 rounded-md">
          {
                            groups.map(group => 
                                group.members.map(member => member.email === user?.email && 
                                    <li className='font-semibold my-3 flex items-center gap-3'>
                                     <img src={group.groupImage} alt="" className='h-[60px] w-[60px] rounded-full' />
                                    <span><Link to={`/dashboard/message/${group._id}`}>{group.groupName.slice(0,15)}...</Link></span>
                                </li>
                                    )
                            )
                        }

          </ul>
        </div>
      </div>
        </div>
    );
};

export default MessageLayout;