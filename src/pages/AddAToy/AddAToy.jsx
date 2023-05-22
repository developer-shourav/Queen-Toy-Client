import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddAToy = () => {
    /* -----------Dynamic Title------------- */
    useTitle('Add A Toy')
    return (
        <div>
            <h2>This is Add A toy</h2>
        </div>
    );
};

export default AddAToy;