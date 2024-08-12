import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const Login = () => {
    const {login,googleSignIn} = useContext(AuthContext)
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email,password)
        .then(result=>{
            const user = result.user
            console.log(user);
            const loggedUser = {
                email : user.email
            }

            fetch('https://multiverse-server.vercel.app/jwt',{
                method : "POST",
                headers :{
                    "content-type" : 'application/json'
                },
                body : JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('jwt response',data);
                localStorage.setItem('toy-access-token',data.token)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log in successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
            })
            
        })
        .catch(err=>{
            console.log(err);
            setError('Invalid email or password')
        })
    }

    // https://multiverse-server.vercel.app/

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            const user = result.user
            console.log(result.user);
            const loggedUser = {
                email : user.email
            }

            fetch('https://multiverse-server.vercel.app/jwt',{
                method : "POST",
                headers :{
                    "content-type" : 'application/json'
                },
                body : JSON.stringify(loggedUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('jwt response',data);
                localStorage.setItem('toy-access-token',data.token)

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log in successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                
            })
            .then(()=>{
                navigate('/')
            })






            
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    






    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-16">

                        <img  alt="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-2xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                
                            </div>
                            <div>
                                <p className='text-red-500 font-semibold text-center'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                            <center>or</center>
                            
                        </form>
                        <button onClick={handleGoogleSignIn} className="btn w-5/6 mx-auto btn-outline -mt-6 mb-6"> <span><FaGoogle></FaGoogle></span> Sign in with Google</button>
                        <div>
                        
                        </div>
                        <p className='mb-3 text-center font-normal'>New to Multiverse Toys? <Link className='text-orange-500 font-bold ml-2' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;