import React from 'react';

const AllToysRow = ({ toy }) => {
    const { seller_name, name, sub_category, price, available_quantity,img,seller_email,rating,detail_description,_id } = toy
    return (
        <tr>


            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
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
            </td>
        </tr>
    );
};

export default AllToysRow;