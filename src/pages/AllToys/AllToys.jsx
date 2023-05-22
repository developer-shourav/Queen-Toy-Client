import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
    /* ---------Dynamic Title----------- */
    useTitle('All Toys')
    return (
        <div>
            <h2>This is all Toys</h2>
        </div>
    );
};

export default AllToys;