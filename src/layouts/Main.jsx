import React from 'react';
import Navbar from '../pages/shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;