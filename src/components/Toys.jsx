import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Toys = ({toy}) => {
    const {img,name,price,rating,seller_name,seller_email,available_quantity,detail_description,_id} = toy;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const goTologin = () =>{
        return navigate('/login')
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 w-32 h-72 md:w-72 md:h-96 shadow-sm border">
                <figure className=''>
                    <img className=' w-20 h-20 md:w-44 md:h-44'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-slate-50">
                    <h2 className="card-title text-[10px] md:text-xl">{name}</h2>
                    
                    <p className='text-[10px] md:text-base'>Price : {price}$</p>
                    <div className='flex items-center'>
                    <h2 className='text-[10px] md:text-base'>Rating : {rating}</h2>
                    <FaStar className='text-orange-300 ml-2'></FaStar>
                    </div>
                    <div className="card-actions justify-end">

                    <button className="btn btn-outline btn-primary w-full" onClick={user ? () => document.getElementById(`${_id}`).showModal() : goTologin }>View Details</button>
                <dialog id={_id} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div>
                            <img className='mx-auto w-56' src={img} alt="" />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Toy name :</span>  {name}</h2>
                            <hr />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Seller name :</span>  {seller_name}</h2>
                            <hr />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Seller email :</span>  {seller_email}</h2>
                            <hr />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Price :</span>  {price}$</h2>
                            <hr />
                            <div className='bg-slate-100 p-4  flex items-center'>
                            <h2 className=' text-md font-semibold '> <span className='text-md font-semibold font-serif'>Rating :</span>  {rating}</h2>
                            <FaStar className='text-orange-300 ml-2'></FaStar>
                            </div>
                            <hr />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Available Quantity :</span>  {available_quantity}</h2>
                            <hr />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Description :</span>  {detail_description}</h2>
                            <hr />
                        </div>









                        
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn btn-warning">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;