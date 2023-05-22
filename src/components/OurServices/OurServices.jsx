import React from 'react';
import {FiTruck} from 'react-icons/fi';
import {GiRecycle} from 'react-icons/gi';
import {BsGift} from 'react-icons/bs';
import {FaAward} from 'react-icons/fa';

const OurServices = () => {
    return (
        <div className='grid grid-cols-4 text-center mx-auto mt-5 md:mt-10 lg:mt-20'>
            <div>
               <div className='p-4 border-2 border-pink-500 rounded-full  mx-auto text-pink-500 hover:bg-pink-500 hover:text-white md:text-3xl inline-block'>
                 <FiTruck className=''></FiTruck>
               </div>
              <h2 className='text-sm md:text-2xl font-bold '>Free Shipping</h2>
              <p className='font-bold text-gray-500 hidden md:block'>We provide free shipping service</p>
            </div>
            
            <div>
               <div className='p-4 border-2 border-pink-500 rounded-full  mx-auto text-pink-500 md:text-3xl inline-block hover:bg-pink-500 hover:text-white'>
                 <GiRecycle className=' '></GiRecycle>
               </div>
              <h2 className=' text-sm md:text-2xl font-bold '>Returns Policy</h2>
              <p className='font-bold text-gray-500 hidden md:block'>You can return your product easily</p>
            </div>
            <div>
               <div className='p-4 border-2 border-pink-500 rounded-full  mx-auto text-pink-500 md:text-3xl inline-block hover:bg-pink-500 hover:text-white'>
                 <BsGift className=''></BsGift>
               </div>
              <h2 className='text-sm md:text-2xl font-bold '>Gift Cards</h2>
              <p className='font-bold text-gray-500 hidden md:block'>You can earn gift cards from order</p>
            </div>
            <div>
               <div className='p-4 border-2 border-pink-500 rounded-full  mx-auto text-pink-500 md:text-3xl inline-block hover:bg-pink-500 hover:text-white'>
                 <FaAward className=''></FaAward>
               </div>
              <h2 className='text-sm md:text-2xl font-bold '>Best Quality</h2>
              <p className='font-bold text-gray-500 hidden md:block'>We provide best products</p>
            </div>

        </div>
    );
};

export default OurServices;




