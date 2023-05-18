import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
     /* -------------Dynamic Title Adding hook---------- */
     useTitle('Register')
    return (
        <div>
             <h2 className="text-4xl">Please Register</h2>
        </div>
    );
};

export default Register;