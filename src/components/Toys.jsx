import React from 'react';

const Toys = ({toy}) => {
    const {img,name,price,rating,seller_name,seller_email,available_quantity,detail_description,_id} = toy
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className='w-72 h-72'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                    <p>Price : {price}$</p>
                    <p>Rating : {rating}</p>
                    <div className="card-actions justify-end">

                    <button className="btn btn-outline btn-primary" onClick={() => document.getElementById(`${_id}`).showModal()}>View Details</button>
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