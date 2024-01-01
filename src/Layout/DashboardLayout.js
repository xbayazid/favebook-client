import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';
import useAdmin from '../hooks/useAdmin';
import useAuthor from '../hooks/useAuthor';
import useRequest from '../hooks/useRequest';
import { FaUserAlt } from 'react-icons/fa';

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [ isAuthor ] = useAuthor(user?.email);
  const [ isRequest ] = useRequest(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-5">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side min-h-screen lg:sticky lg:top-2">
          <label htmlFor="dashboard-drawer" className="drawer-overlay  drawer-button lg:hidden"></label>
          <ul className="menu p-4 w-80 text-base-content bg-[#D0ECF1] min-h-full mt-14 lg:mt-2 rounded-md">
            <div className='mt-5 md:w-[280px] px-5  border-b-2 pb-5 '>
              <div className="avatar">
                <div className="w-20 ml-[78px] rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                  {
                    user?.photoURL ?
                      <img src={user?.photoURL} alt='' /> :
                      <FaUserAlt className='text-[65px] ml-2 mt-4' />
                  }
                </div>
                {/* <MdEdit className='-ml-5 text-2xl cursor-pointer' onClick={() => document.getElementById('image-modal').showModal()} /> */}
              </div>
              <h3 className="text-lg font-semibold  text-center" data-tip={`${user?.displayName}`}>{user?.displayName.length > 15 ? user.displayName.slice(0, 15) + '...' : user.displayName}</h3>
              <p className='flex justify-between items-center mt-5'><span>Type : {
                (isAdmin || isAuthor || isRequest) ? <>{isAdmin && 'Admin'} {isAuthor && 'Owner'} {isRequest && 'Requested'}</> : 'User'
              }
              </span>
                {/* {
                  (!isAdmin && !isAuthor && !isRequest) &&
                  // <button className="btn btn-xs" onClick={() => document.getElementById('owner-modal').showModal()} disabled={disabled}>Owner Request</button>
                } */}


              </p>
              </div>
              <div className='h-[2px] bg-black rounded-lg my-5'></div>
            <li>
              <Link to='/dashboard'>My Posts</Link>
            </li>
            <li>
              <Link to='/dashboard/message'>My Message</Link>
            </li>
            { (isAdmin || isAuthor) &&
              <>
                <li>
                  <Link to='/dashboard/addBook'>Add A Book</Link>
                  <Link to='/dashboard/authorAppointment'>My Appointment</Link>
                </li>
              </>
            }
            {
             isAdmin &&
                <li>
                  <Link to='/dashboard/allUsers'>All Users</Link>
                  <Link to='/dashboard/createGroup'>Create A Group</Link>
                </li>

              
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;