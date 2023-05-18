import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
     /* -------------Dynamic Title Adding hook---------- */
     useTitle('Login')
    return (
        <div>
            <h2 className="text-4xl">Please Login</h2>
        </div>
    );
};

export default Login;