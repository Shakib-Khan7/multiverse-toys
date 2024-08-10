import React from 'react';

const LatestBlogs = () => {
    return (
        <div>
            <div className='w-5/6 mx-auto mt-20 mb-8'>
            <h2 className='text-2xl font-mono'>Upcoming cinemas of your favourite heroes</h2>
            <hr />
            </div>
            <div className='grid grid-cols-3 w-5/6 mx-auto '>
            
            <a href="https://www.youtube.com/watch?v=oTXrl8H6luI" target="_blank" rel="noopener noreferrer">
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105">
                <figure>
                    <img className='h-64 w-96'
                        src="https://i.ibb.co/6ZG26v0/dc.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Justice League
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Wonder Woman in her Golden Eagle armor, ready to take on any challenge</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Hodor</div>
                        <div className="badge badge-outline">Timelapse</div>
                    </div>
                </div>
                <center className='mb-4 font-mono'>[Click to watch trailer]</center>
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=8Qn_spdM5Zg" target="_blank" rel="noopener noreferrer">
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105">
                <figure>
                    <img className='h-64'
                        src="https://i.ibb.co/LPMRdnz/sw.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Star Wars
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>A boomerang-like weapon used by Batman and others</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">War</div>
                        <div className="badge badge-outline">Alien</div>
                    </div>
                </div>
                <center className='mb-4 font-mono'>[Click to watch trailer]</center>
            </div>
            </a>
            <a href="https://www.youtube.com/watch?v=TcMBFSGVi1c" target="_blank" rel="noopener noreferrer">
            <div className="card bg-base-100 w-96 shadow-xl hover:scale-105">
                <figure>
                    <img className='h-64'
                        src="https://i.ibb.co/jZR018p/marvel.jpg"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Avengers : Endgame
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>The final suit of Iron Man from Avengers: Endgame</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Thanos</div>
                        <div className="badge badge-outline">Destruction</div>
                    </div>
                </div>
                <center className='mb-4 font-mono'>[Click to watch trailer]</center>
            </div>
            </a>
        </div>
        </div>
    );
};

export default LatestBlogs;