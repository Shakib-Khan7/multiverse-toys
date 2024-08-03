import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from '../../components/AllToysRow';

const AllToys = () => {

    
    const allToys = useLoaderData()




    return (
        <div>
            
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            // bookings.map(booking =>
                            //     <BookingRow key={booking._id}
                            //         booking={booking}
                            //         handleDelete={handleDelete}
                            //         handleBookingConfirm={handleBookingConfirm}

                            //     ></BookingRow>
                            // )
                            allToys.map(toy=> <AllToysRow
                                 key={toy._id}
                                 toy={toy}

                                 ></AllToysRow>)
                        }

                    </tbody>

                </table>
            
        </div>
    );
};

export default AllToys;