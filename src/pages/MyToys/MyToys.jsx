import React from 'react';
import useTitle from '../../Hooks/useTitle';
import { ScrollRestoration } from 'react-router-dom';

const MyToys = () => {
    useTitle('My Toys')
    return (
        <div>
            <h2>This is My Toys</h2>

            <div>
                
            </div>

            <ScrollRestoration />
        </div>
    );
};

export default MyToys;