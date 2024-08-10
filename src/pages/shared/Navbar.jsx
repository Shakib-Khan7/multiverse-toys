import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)

    
    

    const handleLogOut = () =>{
        logOut()
        .then(result=>{
            console.log(result);
        })
        .catch(err=>console.log(err))

    }

    
    const options = <>
        <li>
        <Link to='/'>
            Home
        </Link>
        </li>
         <li>
        <Link to='/allToys'>
            All toys
        </Link>
        </li>
        <li>
        <Link>
            Blogs
        </Link>
        
        </li>
        {user && 
        <li>
        <Link to='/addToy'>
            Add a toy
        </Link>
        
        </li>}
        {user && 
        <li>
        <Link to='/myToys'>
            My Toys
        </Link>
        
        </li>}
        {
            !user && <li>
            <Link to='/login'>
                Login
            </Link>
            </li>
        }
        {user && 
        <li>
        <button onClick={handleLogOut}>
            Logout
        </button>
        </li>}
    
        </>
    return (
        <div>
            <div className="navbar mb-10 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {options}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl italic">Multiverse <span className='text-red-600 italic'>Toys</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {options}
                    </ul>
                </div>
                {user&& <div className="navbar-end mr-10">
                    <div className='w-11 rounded-full hover:cursor-pointer border  tooltip tooltip-bottom ' data-tip={user.displayName? user.displayName : user.email}>
                        <img className='rounded-full' src="https://i.ibb.co/KxBgdF2/ironman.jpg" alt="" />
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;