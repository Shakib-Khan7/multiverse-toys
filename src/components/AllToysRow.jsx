import React from 'react';

const AllToysRow = ({toy}) => {
    const {seller_name,name,sub_category,price,available_quantity} = toy
    return (
        <tr>
            
            
            <td>{seller_name}</td>
            <td>{name}</td>
            <td>{sub_category}</td>
            <td>{price}</td>
            <td>{available_quantity}</td>
            <td><button className='btn btn-primary'>View Details</button></td>
        </tr>
    );
};

export default AllToysRow;