/* eslint-disable react/prop-types */
import { Button } from '@mui/material';
import { useState } from 'react';


const MyToysRow = ({ mytoy, handleDelete, mytoys, setMyToys }) => {
    const { detail_description, seller_name, name, sub_category, price, available_quantity, _id } = mytoy;



    const handleUpdate = (id, updatedForm) => {









        fetch(`http://localhost:5000/update/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedForm)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = mytoys.filter(mytoy => mytoy._id !== id)
                    const updated = mytoys.find(mytoy => mytoy._id === id)
                    console.log(updated);


                    updated.price = updatedForm.price;
                    updated.detail_description = updatedForm.detail_description;
                    updated.available_quantity = updatedForm.available_quantity;


                    const newToysList = [updated, ...remaining]

                    setMyToys(newToysList)
                    


                }
            })
    }





    const handleUpdateForm = event => {
        event.preventDefault()

        const form = event.target;
        const price = parseInt(form.price.value)
        const detail_description = form.detail_description.value;
        const available_quantity = parseInt(form.available_quantity.value)
        console.log(price, detail_description, available_quantity);

        const updatedForm = { price, detail_description, available_quantity }

        handleUpdate(_id, updatedForm)






        document.getElementById(`${_id}`).close();
    }








    return (
        <tr>

            <td><button onClick={() => handleDelete(_id)} className='btn btn-circle btn-sm'>X</button></td>
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <Button variant='contained' onClick={() => document.getElementById(`${_id}`).showModal()}>Update</Button>
                <dialog id={_id} className="modal text-black">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className=''>
                            <form method='dialog' onSubmit={handleUpdateForm} className='col-span-2'>
                                <div className='grid grid-cols-3 gap-5 w-5/6 mx-auto'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input name='price'

                                            type="number"
                                            placeholder="Type here"
                                            className="input input-bordered input-primary w-full max-w-xs shadow-md" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input name='available_quantity'

                                            type="number"
                                            placeholder="Type here"
                                            className="input input-bordered input-primary w-full max-w-xs shadow-md" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Detail Description</span>
                                        </label>
                                        <input name='detail_description'

                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered input-primary w-full max-w-xs shadow-md" />
                                    </div>
                                </div>
                                <div className='modal-action'>
                                    <button className='btn'><input className='' type="submit" value="Confirm" /></button>
                                </div>

                            </form>
                        </div>




                        <div className="-mt-12">

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

export default MyToysRow;




