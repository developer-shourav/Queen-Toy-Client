import React from 'react';

const ToyDetails = () => {
    return (
        <div className='container mx-auto px-5'>
           <div className='flex flex-col md:flex-row  gap-10  '>
             <div className='md:w-1/2 bg-pink-200 p-10'>
                <img className='w-10/12 mx-auto' src="https://i.ibb.co/gTh6cYC/1.jpg" alt="" />
             </div>

             <div className='md:w-1/2'>
                <div>
                    <h2></h2>
                </div>
             </div>
           </div>
        </div>
    );
};

export default ToyDetails;