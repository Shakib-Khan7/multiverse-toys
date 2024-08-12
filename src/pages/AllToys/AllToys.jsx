import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from '../../components/AllToysRow';

const AllToys = () => {


    const allToys = useLoaderData()
    const [searched, setSearched] = useState(allToys)

    const handleSearch = event => {
        event.preventDefault()
        const form = event.target;
        const search = form.search.value;
        console.log(search === '');




        if(search === ''){
            return setSearched([])
        }
        fetch(`https://multiverse-server.vercel.app/searchToys?item=${search}`)
            .then(res => res.json())
            .then(data => {

                setSearched(data)
            })


    }




    return (
        <div>
            <div className='mt-10 mb-10'>
                
                <form onSubmit={handleSearch}>
                    <div >
                        <div className='w-1/2 mx-auto'>
                        <center className='flex justify-center'>
                        <input type="text" placeholder="Search Toy Name" className="input input-bordered border-r-0 w-96 rounded-none" name='search' />
                        <input className='btn rounded rounded-r-lg rounded-l-none bg-violet-500' type="submit" value="Search" />
                        </center>
                        </div>
                    </div>
                    
                </form>
            </div>




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
                    {searched.length !== 0 ?
                        // bookings.map(booking =>
                        //     <BookingRow key={booking._id}
                        //         booking={booking}
                        //         handleDelete={handleDelete}
                        //         handleBookingConfirm={handleBookingConfirm}

                        //     ></BookingRow>
                        // )
                        searched.map(toy => <AllToysRow
                            key={toy._id}
                            toy={toy}

                        ></AllToysRow>)
                        : <h2>NO MATCHED DATA FOUND</h2>
                    }

                </tbody>

            </table>

        </div>
    );
};

export default AllToys;