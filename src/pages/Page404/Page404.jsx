import React from 'react';
import ErrorImg from '../../assets/images/error-image/error.gif';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
const Page404 = () => {
    return (
        <div className='container mx-auto text-center'>
            <img src={ErrorImg} className='mx-auto' alt="" />
            <h2 className='text-3xl font-bold -mt-10 text-red-500'>Page Not Found</h2>
            <Link to='/home' className='btn mt-3 rounded bg-pink-500 border-0 hover:bg-cyan-600'><BsArrowLeft className='text-xl me-2' /> Back To Home</Link>
        </div>
    );
};

export default Page404;