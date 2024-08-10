import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Toys = ({toy}) => {
    const {img,name,price,rating,seller_name,seller_email,available_quantity,detail_description,_id} = toy;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const goTologin = () =>{
        return navigate('/login')
    }
    return (
        <div>
            <div className="card card-compact bg-base-100 w-72 h-96 shadow-sm border">
                <figure className=''>
                    <img className='w-44 h-44'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-slate-50">
                    <h2 className="card-title">{name}</h2>
                    
                    <p>Price : {price}$</p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions justify-end">

                    <button className="btn btn-outline btn-primary" onClick={user ? () => document.getElementById(`${_id}`).showModal() : goTologin }>View Details</button>
                <dialog id={_id} className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div>
                            <img className='mx-auto w-56' src={img} alt="" />
                            <h2>{name}</h2>
                            <h2>{seller_name}</h2>
                            <h2>{seller_email}</h2>
                            <h2>{price}</h2>
                            <h2>{rating}</h2>
                            <h2>{available_quantity}</h2>
                            <h2>{detail_description}</h2>
                        </div>









                        
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
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