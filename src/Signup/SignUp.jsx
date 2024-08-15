import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const [error,setError] = useState('')

    const navigate = useNavigate()


    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const email = form.email.value;
        const password = form.password.value;

        if(password.length < 6){
            setError('Password must be at least 6 characters')
            return;
        }

        createUser(email,password)
        .then(result=>{
            const user = result.user
            user.photoURL = img;
            user.displayName = name
            const loggedUser = {
                email : user.email
            }
            console.log(user);
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
                    title: "Sign up successful & logged in",
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
            if(err.message === 'Firebase: Error (auth/email-already-in-use).'){
                setError('Email already in use')
            }
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
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-2xl text-center font-bold">Sign Up now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="Image url" name='img' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" name='email' required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />
                                
                            </div>
                            <div>
                                <p className='text-sm mt-2 text-red-500 font-semibold text-center'>{error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Sign up" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link className='text-orange-500 font-bold' to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;