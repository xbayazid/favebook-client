import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           <Footer/> 
        </div>
    );
};

export default Main;