import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <img className='w-full h-screen relative' src="https://i.ibb.co/4KwjL0D/16304722-Na-June-37.jpg" alt="" />
            <Link to='/' className='btn btn-warning px-24 absolute top-10 left-10 mt-4 '> Go Back</Link>
        </div>
    );
};

export default Error;