import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'; 
import {FaCheck} from 'react-icons/fa';
const ToyDetails = () => {
    return (
        <div className='container mx-auto px-5 mt-10'>
           <div className='flex flex-col md:flex-row  gap-12  '>
             <div className='md:w-1/2 bg-pink-100 rounded-lg p-10 '>
                <img className='w-10/12 mx-auto rounded-lg' src="https://i.ibb.co/gTh6cYC/1.jpg" alt="" />
             </div>

             <div className='md:w-1/2'>
                <div>
                    <h2 className='text-2xl lg:text-3xl font-bold text-black'>Jigsaw Puzzles For Kids</h2>
                    <h3 className='text-3xl lg:text-4xl mt-4 mb-1 font-bold text-pink-500' >$120.59</h3>
                    <div className='flex items-center'> <Rating style={{ maxWidth: 100 }} value={5} readOnly /> <span className='ms-2 mt-1 font-bold text-lg  text-gray-600'>{5}  </span></div>
                    
                    <div className='flex flex-col md:flex-row justify-between md:items-center py-5 border-2  border-x-0 my-5 '>
                      <div className='flex items-center gap-3'>
                        <span className='text-pink-500 font-bold text-lg'><FaCheck/></span>
                        <span className=' font-bold text-gray-700 text-lg'>Free Shipping</span> 
                      </div>
                      
                      <div className='flex items-center gap-3'>
                        <span className='text-pink-500 font-bold text-lg'><FaCheck/></span>
                        <span className=' font-bold text-gray-700 text-lg'>Support 24/7</span> 
                      </div>
                      <div className='flex items-center gap-3'>
                        <span className='text-pink-500 font-bold text-lg'><FaCheck/></span>
                        <span className=' font-bold text-gray-700 text-lg'>Money Return</span> 
                      </div>
                    </div>

                    {/* --------Toy Details --------------- */}
                    <p className='mb-3 text-justify'>
                      Bring the enchantment of Disney's Cinderella to life with this beautiful Cinderella doll. Dressed in her iconic blue ball gown, she is ready to attend the royal ball. With her stunning features and removable glass slippers, this doll is a must-have for any Disney Princess fan.
                    </p>

                    <div className="mt-3 text-gray-800 text-lg font-bold">
                    <p>Seller: </p>
                    <p>Seller Email: </p>
                    <p>Available Quantity: 10</p>
                    </div>
                </div>
             </div>
           </div>
        </div>
    );
};

export default ToyDetails;