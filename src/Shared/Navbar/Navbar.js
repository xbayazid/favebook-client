import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../../assests/navbar-logo.png'
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error))
  }

    const menuItem = (
        <React.Fragment>
            <li>
                <Link to='/' className='hover:text-blue-200'>Home</Link>
            </li>
            <li>
                <Link to='/author' className='hover:text-blue-200'>Author</Link>
            </li>
            <li>
                <Link to='/book' className='hover:text-blue-200'>Book</Link>
            </li>
            <li>
                <Link to='/reviews' className='hover:text-blue-200'>Posts</Link>
            </li>
        </React.Fragment>
    )
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className=" normal-case text-xl">
                        <img src={navbarLogo} alt="" width={200}/>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    { user?.uid ?
                    <>
                    <Link className='mr-4' to="/dashboard">Dashboard</Link>
                    <div onClick={handleLogOut}><Button>Log out</Button></div>
                  </>  
                        :
                        <Link to='/authentication'><Button>Login</Button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;