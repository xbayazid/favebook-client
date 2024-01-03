import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';
import useAdmin from '../hooks/useAdmin';
import useAuthor from '../hooks/useAuthor';
import useRequest from '../hooks/useRequest';
import { FaUserAlt } from 'react-icons/fa';
import useMember from '../hooks/useMember';
import toast from 'react-hot-toast';

const DashboardLayout = () => {

  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isAuthor] = useAuthor(user?.email);
  const [isRequest] = useRequest(user?.email);
  const [isMember] = useMember(user?.email);

  const closeModal = (name) => {
    // Get the modal element
    const modal = document.getElementById(name);

    // Hide the modal
    modal.close();
  };


  const makeMeOwner = (event) => {
    event.preventDefault();

    const meetLink = event.target.meet.value;
    const book = event.target.book.value;
    const meet = {
      meet: meetLink,
      bookName: book
    }

    const url = `http://localhost:5000/users/update/${user?.email}?action=request`;
    fetch(url, {
      method: 'PUT',
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify(meet)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
            closeModal('owner-modal');
            toast.success('Owner Request Send Successfully!!');
        }
      })
  }

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
              <p className='text-center mt-5'><span>Type : {
                (isAdmin || isAuthor || isRequest) ? <>{isAdmin && 'Admin'} {isAuthor && 'Author'} {isRequest && 'Requested'}</> : 'User'
              }
              </span>
                {/* {
                  (!isAdmin && !isAuthor && !isRequest) &&
                  // <button className="btn btn-xs" onClick={() => document.getElementById('owner-modal').showModal()} disabled={disabled}>Owner Request</button>
                } */}


              </p>
              <p className='text-center'>{(!isAdmin && !isAuthor && !isRequest) &&
                <button className="btn btn-xs mt-5" onClick={() => document.getElementById('owner-modal').showModal()} >Make me Author</button>}</p>
            </div>
            <div className='h-[2px] bg-black rounded-lg my-5'></div>
            <li>
              <Link to='/dashboard'>My Posts</Link>
            </li>
            <li>
              <Link to='/dashboard/message'>My Message</Link>
            </li>
            <li>
              <Link to='/dashboard/appointments'>My Appointments</Link>
            </li>
            {(isAdmin || isAuthor) &&
              <>
                <li>
                  <Link to='/dashboard/addBook'>Add A Book</Link>
                  <Link to='/dashboard/authorAppointment'>My Meetings</Link>
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
      <dialog id="owner-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h2 className="text-xl font-semibold mt-5 capitalize text-center">Do you really want to send a request for make you owner!!</h2>
          <form className='my-5' onSubmit={makeMeOwner}>
            <input type="text" name='meet' placeholder="Enter Your Meet Link" className="input input-bordered input-primary w-full" required />
            <input type="text" name='book' placeholder="Enter Your Famous Books name" className="input input-bordered input-primary w-full mt-5" required />
            <p className='text-right'><button type='submit' className="btn btn-outline btn-primary mt-5">Request</button></p>
          </form>


        </div>
      </dialog>
    </div>
  );
};

export default DashboardLayout;