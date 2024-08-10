import { Box, TextField } from '@mui/material';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToy = () => {
    

    const {user} = useContext(AuthContext)

    const [img, setImg] = useState('https://i.ibb.co/Jr7tyR4/yoda.jpg');
    const images = ['https://i.ibb.co/Jr7tyR4/yoda.jpg','https://i.ibb.co/89Bk9R4/joker.jpg','https://i.ibb.co/qntyN5t/thor.jpg'];
    const imgIndex = useRef(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setImg(images[imgIndex.current]);
            imgIndex.current = (imgIndex.current + 1) % images.length;  // loop back to the first image
        }, 2000);

        return () => clearInterval(intervalId);  // Cleanup the interval on component unmount
    }, [images]);

    const handleAddToy = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const sub_category = form.sub_category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const available_quantity = form.quantity.value;
        const detail_description = form.description.value;

        const addToy = {

            name,img,seller_name,seller_email,sub_category,price,rating,available_quantity,detail_description
        }

        fetch('http://localhost:5000/addToy',{
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(addToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            alert('added')
        })
        
    }






    return (
        <div className='mb-10'>
           <div className='w-5/6 mx-auto '>
           <Marquee className='text-2xl font-mono text-slate-700  p-3 rounded-xl ' speed={150}>
                Where Every Hero Finds a Home – Dive into the Ultimate Universe of Superhero Action Figures!
            </Marquee>
           </div>

            <div className='w-5/6 mx-auto mt-10'>
                <h2 className='text-2xl font-mono'>Add your toy</h2>
                <hr />
            </div>

            <div className='grid grid-cols-3'>

                <div className='my-auto'>
                    <img className='w-5/6' src={img} alt="" />
                </div>
            <form onSubmit={handleAddToy} className='col-span-2'>
                <div className='grid grid-cols-3 gap-5 w-5/6 mx-auto'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input name='name'
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image link</span>
                        </label>
                        <input name='img'
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md"  required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller name</span>
                        </label>
                        <input name='seller_name'
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input name='seller_email'
                            type="email"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md"
                            defaultValue={user.email} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <select name='sub_category' className='input input-bordered input-primary w-full max-w-xs shadow-md'>
                            <option>DC</option>
                            <option>MCU</option>
                            <option>Marvel</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price'
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input name='rating'
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity'
                            type="number"
                            placeholder="Type here"
                            className="input input-bordered input-primary w-full max-w-xs shadow-md" required />
                    </div>

                </div>
                <div className="form-control w-5/6 mx-auto">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description'
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-primary w-96 h-56 shadow-md" required>

                    </textarea>
                </div>
                <div className='w-5/6 mx-auto'><input className='btn btn-primary w-96 mt-10' type="submit" value="Add" /></div>
            </form>
            </div>

        </div>
    );
};

export default AddToy;