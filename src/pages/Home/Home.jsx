import React from 'react';
import Heroes from '../../components/Heroes';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';


const Home = () => {
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
                        <Tab className='btn btn-outline btn-success w-32'>MCU</Tab>
                        <Tab className='btn btn-outline btn-warning ml-4 w-32'>DC</Tab>
                        <Tab className='btn btn-outline btn-error ml-4 w-32'>Star Wars</Tab>
                    </TabList>

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














        </div>
    );
};

export default Home;