import React, { useEffect, useState } from 'react';
import Heroes from '../../components/Heroes';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { useLoaderData } from 'react-router-dom';
import Toys from '../../components/Toys';


const Home = () => {

    const toys = useLoaderData()
    console.log(toys);

    const [alltoys,setAllToys] = useState(toys)

    const handleMcu = () =>{
        fetch(`http://localhost:5000/toys?sub_category=MCU`)
        .then(res=>res.json())
        .then(data=>{
            setAllToys(data)
            console.log(data);
        })
    }
    const handleDC = () =>{
        fetch(`http://localhost:5000/toys?sub_category=DC`)
        .then(res=>res.json())
        .then(data=>{
            setAllToys(data)
            console.log(data);
        })
    }
    const handleStarWars = () =>{
        fetch(`http://localhost:5000/toys?sub_category=Star+Wars`)
        .then(res=>res.json())
        .then(data=>{
            setAllToys(data)
            console.log(data);
        })
    }









    
    return (
        <div className=''>
            <div className='relative mx-auto' >
                <img className='mx-auto w-5/6' src="https://i.ibb.co/F64mDcm/567772.jpg" alt="" />
                <div className="absolute w-5/6 mx-auto flex items-center right-0 top-0 left-0 bottom-0 bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'>All your Super Heroes at one place!</h2>
                        <p>Find exclusive action figures of MCU,DC,STAR WARS & enjoy the multiverse of madness</p>
                        <div>
                            <button className="btn btn-active btn-primary mr-5">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Projects</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-5/6 mx-auto mt-20'>
                <h3 className='font-bold'>The Guardians of Multiverse</h3>
            </div>

            <div className='mt-10'>
                <Heroes></Heroes>
            </div>


            <div className='w-5/6 mx-auto mt-20'>
                <Tabs>
                    <TabList className='flex'>
                        <Tab onClick={handleMcu} className='btn btn-outline btn-success w-32'>MCU</Tab>
                        <Tab onClick={handleDC} className='btn btn-outline btn-warning ml-4 w-32'>DC</Tab>
                        <Tab onClick={handleStarWars} className='btn btn-outline btn-error ml-4 w-32'>Star Wars</Tab>
                    </TabList>
                    <hr />

                    <TabPanel>
                        <h2>mcu content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>dc content</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>starwars content</h2>
                    </TabPanel>
                </Tabs>
            </div>

            <div className='w-5/6 mx-auto grid grid-cols-3'>
                {alltoys.map(toy=><Toys
                 key={toy._id}
                 toy = {toy}
                 
                 ></Toys>)}
            </div>
















        </div>
    );
};

export default Home;