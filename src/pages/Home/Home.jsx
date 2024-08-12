import React, { useEffect, useState } from 'react';
import Heroes from '../../components/Heroes';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Link, useLoaderData } from 'react-router-dom';
import Toys from '../../components/Toys';
import LatestBlogs from '../../components/LatestBlogs';
import Reviews from '../../components/Reviews';
import Aos from 'aos';
import 'aos/dist/aos.css';




const Home = () => {
    Aos.init();

    const toys = useLoaderData()
    console.log(toys);

    const [alltoys, setAllToys] = useState(toys)

    
    

    const handleMcu = () => {
        fetch(`https://multiverse-server.vercel.app/toys?sub_category=MCU`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data);
            })
    }
    const handleDC = () => {
        fetch(`https://multiverse-server.vercel.app/toys?sub_category=DC`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data);
            })
    }
    const handleStarWars = () => {
        fetch(`https://multiverse-server.vercel.app/toys?sub_category=Star+Wars`)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
                console.log(data);
            })
    }










    return (
        <div className='mb-4'>
            <div className='relative mx-auto' >
                <img className='mx-auto w-5/6' src="https://i.ibb.co/F64mDcm/567772.jpg" alt="" />
                <div className="absolute w-5/6 mx-auto flex items-center right-0 top-0 left-0 bottom-0 bg-gradient-to-tr from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] rounded-lg">
                    <div className='text-white md:space-y-7 w-full md:w-1/2 pl-2 md:pl-12'>
                        <h2 className='text-[10px] md:text-5xl font-bold shadow-lg'>All your Super Heroes at one place!</h2>
                        <p className='text-[6px] md:text-xl font-bold mb-4 '>Find exclusive action figures of MCU,DC,STAR WARS & enjoy the multiverse of madness!</p>
                        <Link to='/alltoys'>
                            <button className='btn btn-xs md:btn-lg btn-outline btn-warning text-[8px] md:mt-10 '>Discover more</button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className='w-5/6 mx-auto mt-20'>
                <h3 className='font-bold font-mono text-2xl'>The Guardians of Multiverse</h3>
            </div>

            <div className='mt-10'>
                <Heroes></Heroes>
            </div>

            <div className='w-5/6 mx-auto mt-10'>
                <h2 className='font-bold text-2xl font-mono'>Shop By Category</h2>
            </div>








            <div className='md:w-5/6 mx-auto mt-10'>
                <Tabs>
                    <TabList className='grid grid-cols-2 md:grid-cols-8 gap-4 md:gap-0'>
                        <Tab onClick={() => setAllToys(toys)} className='btn btn-outline w-32'>All</Tab>
                        <Tab onClick={handleMcu} className='btn btn-outline btn-success w-32'>MCU</Tab>
                        <Tab onClick={handleDC} className='btn btn-outline btn-warning w-32'>DC</Tab>
                        <Tab onClick={handleStarWars} className='btn btn-outline btn-error w-32'>Star Wars</Tab>
                    </TabList>

                    <hr />



                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </Tabs>
            </div>

            <div data-aos="zoom-in" >
                <div className='w-5/6 mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 mt-10'>
                    {alltoys.map(toy => <Toys
                        key={toy._id}
                        toy={toy}

                    ></Toys>)}
                </div>
            </div>


            <LatestBlogs></LatestBlogs>










        </div>
    );
};

export default Home;