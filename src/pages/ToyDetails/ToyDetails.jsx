import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'; 
import {FaCheck} from 'react-icons/fa';
import {BsArrowLeft} from 'react-icons/bs';
import useTitle from '../../Hooks/useTitle';
import { Link, ScrollRestoration, useLoaderData } from 'react-router-dom';
const ToyDetails = () => {
    /* -----Dynamic Title------ */
    useTitle('Toy Details')
    
    const toyData = useLoaderData();
    const { price, toyName, photo, quantity, seller, rating, sellerEmail, details, subCategory } = toyData;
    return (
        <div className='container mx-auto px-5 pb-48 mt-10'>
           <div className='flex flex-col md:flex-row  gap-12  '>
             <div className='md:w-1/2 bg-pink-100 rounded-lg p-10 '>
                <img className='w-10/12 mx-auto rounded-lg' src={photo} alt="" />
             </div>

             <div className='md:w-1/2'>
                <div>
                    <h2 className='text-2xl lg:text-3xl font-bold text-black'>{toyName}</h2>
                    <h3 className='text-3xl lg:text-4xl mt-4 mb-1 font-bold text-pink-500' >$ {price}</h3>
                    <div className='flex items-center'> <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> <span className='ms-2 mt-1 font-bold text-lg  text-gray-600'>{rating}  </span></div>
                    
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
                      {details}
                    </p>

                    <div className="mt-3 text-gray-600 text-lg font-bold">
                    <p>Seller: <span className='text-gray-800'>{seller}</span> </p>
                    <p className='my-[2px]'>Seller Email: <span className='text-gray-800 '>{sellerEmail}</span> </p>
                    <p>Sub-Category: <span className='text-gray-800 '>{subCategory}</span></p>
                    <p>Available Quantity: <span className='text-gray-800 '>{quantity}</span></p>
                    
                    </div>
                    <Link className='btn btn-sm  bg-pink-500 hover:bg-cyan-600 border-0 normal-case rounded mt-5' to='/home'><BsArrowLeft className='text-lg font-bold me-3'/> Go Home</Link>
                </div>
             </div>
           </div>
           <ScrollRestoration/> 
        </div>
    );
};

export default ToyDetails;