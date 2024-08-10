import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col min-h-screen'>
            <div className='w-5/6 mx-auto flex-grow'>
                
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
        </div>
    );
};

export default Main;