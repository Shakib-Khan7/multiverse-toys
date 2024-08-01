import React from 'react';

const Heroes = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <div className="carousel w-full mx-auto">
                <div id="item1" className="carousel-item w-56 lg:w-2/5 lg:h-72 lg:mr-10 relative">
                    <img src="https://i.ibb.co/68xCLt2/the-evolution-of-iron-man-in-the-mcu.jpg" />
                    
                </div>
                <div id="item2" className="carousel-item w-56 lg:w-2/5 lg:h-72 lg:mr-10 relative">
                    <img src="https://i.ibb.co/9h6J63w/captain-marvel-empowers-humanity-and-protects-the-universe-l22hh69rmu8c91ov.jpg" />
                    
                </div>
                <div id="item3" className="carousel-item w-56 lg:w-2/5 lg:h-72 relative">
                    <img src="https://i.ibb.co/0G3Vgzs/dark-minimalist-batman-av556et78dt5tidn.jpg" />
                    
                </div>
                <div id="item4" className="carousel-item w-56 lg:w-2/5 lg:h-72 relative">
                    <img src="https://i.ibb.co/d5RRbr7/starwars-light-saber-lwzq9fkvoa5cqbkk.jpg" />
                    
                </div>

                
                
                
                
            </div>
            
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs bg-white">.</a>
                <a href="#item2" className="btn btn-xs">.</a>
                <a href="#item3" className="btn btn-xs">.</a>
                <a href="#item4" className="btn btn-xs">.</a>
               
            </div>
        </div>
    );
};

export default Heroes;