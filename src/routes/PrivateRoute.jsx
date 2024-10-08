import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <><div className='my-auto'> <center>
            <span className="loading loading-spinner loading-lg"></span>
            </center></div></>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;