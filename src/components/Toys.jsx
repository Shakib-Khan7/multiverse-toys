import React from 'react';

const Toys = ({toy}) => {
    const {img,name,price,rating} = toy
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
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Toys;