import React from 'react';
import ErrorImg from '../../assets/images/error-image/404.webp';
const Page404 = () => {
    return (
        <div className='container mx-auto text-center'>
            <img src={ErrorImg} className='mx-auto' alt="" />
        </div>
    );
};

export default Page404;