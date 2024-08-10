import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const { seller_name, name, sub_category, price, available_quantity,img,seller_email,rating,detail_description,_id } = toy

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const goTologin = () =>{
        return navigate('/login')
    }


    return (
        <tr>


            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-outline btn-primary w-full" onClick={user ? () => document.getElementById(`${_id}`).showModal() : goTologin }>View Details</button>
                <dialog id={_id} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                    <div>
                            <img className='mx-auto w-56' src={img} alt="" />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Toy name :</span>  {name}</h2>
                            <hr></hr>
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Seller name :</span>  {seller_name}</h2>
                            <hr></hr>
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Seller email :</span>  {seller_email}</h2>
                            <hr></hr>
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Price :</span>  {price}$</h2>
                            <hr></hr>
                            <div className='bg-slate-100 p-4  flex items-center'>
                            <h2 className=' text-md font-semibold '> <span className='text-md font-semibold font-serif'>Rating :</span>  {rating}</h2>
                            <hr></hr>
                            <FaStar className='text-orange-300 ml-2'></FaStar>
                            </div>
                            <hr />
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Available Quantity :</span>  {available_quantity}</h2>
                            <hr></hr>
                            <h2 className=' text-md font-semibold bg-slate-100 p-4 '> <span className='text-md font-semibold font-serif'>Description :</span>  {detail_description}</h2>
                            <hr></hr>
                        </div>









                        
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn btn-warning">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </td>
        </tr>
    );
};

export default AllToysRow;