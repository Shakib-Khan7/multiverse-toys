import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysRow from '../../components/MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const {user} = useContext(AuthContext)

    const [mytoys,setMyToys] = useState([])

    const url = `https://multiverse-server.vercel.app/myToys?email=${user?.email}`

    useEffect(()=>{
        fetch(url,{
            method : "GET",
            headers : {
                authorization : `Bearer ${localStorage.getItem('toy-access-token')}`
            }

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyToys(data)
        })
    },[url])


    const handleDelete = id =>{
        
        Swal.fire({
            title: "Are you sure you want to delete?",
            
            showCancelButton: true,
            cancelButtonText : 'Cancel',
            cancelButtonColor : "red",
            confirmButtonText: "Yes",
            
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://multiverse-server.vercel.app/deleteToy/${id}`,{
                    method : 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    const remaining = mytoys.filter(mytoy=>mytoy._id !== id)
                    setMyToys(remaining)
                    
                })





              Swal.fire("Deleted Successfully");
            } 
          });


       
        

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