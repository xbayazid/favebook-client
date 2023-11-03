import React from 'react';
import favebookIcon from '../../assests/Faveb k.svg'
import { Link } from 'react-router-dom';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div style={{backgroundColor: "#D0ECF1"}} className='py-5 px-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <img className='w-3/4' src={favebookIcon} alt="" />
                    <p className='mt-4 w-64 text-justify'>Since the establishment of favebook in 2023, we have been offering book.</p>
                </div>
                <div>
                    <p className='font-semibold leading-8'>Links</p>
                    <div className='flex-col '>
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/author">Author</Link></p>
                    <p><Link to="/book">Books</Link></p>
                    <p><Link to="/reviews">Reviews</Link></p>
                    <p><Link to="/">Community</Link></p>
                    <p><Link to="/login">Login</Link></p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold leading-8">Contact</p>
                    <div>
                        <p className='flex items-center gap-2'><HiOutlinePhone/> +8801755707070</p>
                        <p className='flex items-center gap-2'><HiOutlineMail/> support@favebook.com</p>
                        <p className='flex items-center gap-2'><HiOutlineLocationMarker/> 152/2A-2, Dhaka - 1205, Bangladesh</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold leading-8">Social Media</p>
                    <div>
                        <div className='text-xl ml-6'>
                            <div className='flex gap-3'>
                                <Link><FaFacebook/></Link>
                                <Link><FaInstagram/></Link>
                            </div>
                            <div>
                                <div className='flex gap-3 mt-3'>
                                        <Link><FaTwitter/></Link>
                                        <Link><FaLinkedinIn/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;