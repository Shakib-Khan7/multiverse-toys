import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from '../../components/MyToysRow';

const MyToys = () => {
    const {user} = useContext(AuthContext)

    const [mytoys,setMyToys] = useState([])

    const url = `http://localhost:5000/myToys?email=${user?.email}`

    useEffect(()=>{
        fetch(url,{
            method : "GET"

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyToys(data)
        })
    },[url])


    const handleDelete = id =>{
        const proceed = confirm('Are you sure you want to delete?')
        if(proceed){
            fetch(`http://localhost:5000/deleteToy/${id}`,{
                method : 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = mytoys.filter(mytoy=>mytoy._id !== id)
                setMyToys(remaining)
            })
        }

        

    }


    


















    return (
        <div>
            <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                           <th></th>
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
                            mytoys.map(toy=> <MyToysRow key={toy._id}
                            mytoy={toy}
                            mytoys={mytoys}
                            setMyToys={setMyToys}
                            handleDelete={handleDelete}
                            
                            ></MyToysRow>
                                 )
                        }

                    </tbody>

                </table>
        </div>
    );
};

export default MyToys;