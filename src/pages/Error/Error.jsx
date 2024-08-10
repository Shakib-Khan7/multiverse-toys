import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='relative'>

            <center className=''>
                

                <h3 className='text-9xl'>404</h3>
                <h3 className='text-8xl'>PAGE NOT FOUND</h3>
                <Link to='/' className='btn btn-warning px-24 mt-52'> Go Back</Link>
            </center>
        </div>
    );
};

export default Error;