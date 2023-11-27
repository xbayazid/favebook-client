import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';
import useAdmin from '../hooks/useAdmin';
import useAuthor from '../hooks/useAuthor';
import useRequest from '../hooks/useRequest';

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
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay btn btn-primary drawer-button lg:hidden"></label>
          <ul className="menu p-4 w-80 text-base-content">
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
                  
                </li>

              
            }

          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;