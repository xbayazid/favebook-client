import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../../assests/navbar-logo.png'
import Button from '../../components/Button/Button';
import { AuthContext } from '../../context/AuthProvider';
import ButtonUnFill from '../../components/ButtonUnFill/ButtonUnFill';

const Navbar = () => {
    const {user} = useContext(AuthContext);

    const menuItem = (
        <React.Fragment>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/author'>Author</Link>
            </li>
            <li>
                <Link to='/book'>Book</Link>
            </li>
            <li>
                <Link to='/reviews'>Reviews</Link>
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
                    <Link to='/' className=" normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    { user?.uid ?
                        <Link to='/authentication'><ButtonUnFill>Log out</ButtonUnFill></Link>:
                        <Link to='/authentication'><Button>Login</Button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;