import React from 'react';
import TopBanner from '../TopBanner/TopBanner';
/* import useTitle from '../../../Hooks/useTitle'; */

const Home = () => {
    /* -------------Dynamic Title Adding hook---------- */
   /*  useTitle('Home') */
    return (
        <div className='container mx-auto'>
            {/* -----------Top Banner Section---------- */}
            <TopBanner> </TopBanner>
        </div>
    );
};

export default Home;