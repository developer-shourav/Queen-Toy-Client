import React from 'react';
import useTitle from '../../Hooks/useTitle';
import {HiOutlineViewGridAdd} from 'react-icons/hi';

const AddAToy = () => {
    /* -----------Dynamic Title------------- */
    useTitle('Add A Toy')
    return (
        <div className='mt-10'>
            <div className='text-center text-3xl font-bold   flex items-center justify-center gap-3'> <HiOutlineViewGridAdd className='inline-block text-5xl text-pink-500' /> <span>Add A toy</span></div>

            
            
        </div>
    );
};

export default AddAToy;