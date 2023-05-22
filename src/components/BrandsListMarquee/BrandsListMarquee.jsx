import React from 'react';
import Marquee from "react-fast-marquee";
/* -------------All Imported Images-------------- */
import BrandLogo1 from '../../assets/images/brands-img/brand1.png';
import BrandLogo2 from '../../assets/images/brands-img/brand2.png';
import BrandLogo3 from '../../assets/images/brands-img/brand3.jpeg';
import BrandLogo4 from '../../assets/images/brands-img/brand4.png';
import BrandLogo5 from '../../assets/images/brands-img/brand5.png';
import BrandLogo6 from '../../assets/images/brands-img/brands6.png';
import BrandLogo7 from '../../assets/images/brands-img/brand7.jpeg';
import BrandLogo8 from '../../assets/images/brands-img/brand8.png';

const BrandsListMarquee = () => {
    return (
        <div className='container mx-auto mt-20 hidden md:block '>
            {/* -------------All Brands With Picture------------ */}
          <div className='flex items-center gap-1 md:px-5 lg:px-0'>
          <span className='py-3 text-white inline-block rounded-2xl shadow-md rounded-e-none text-center border-0 text-2xl normal-case font-bold bg-[#ff6799]'>Brands Available</span> <Marquee pauseOnHover={true} speed={60} gradient={true}> 
                <div className='brand-img'>
                    <img src={BrandLogo1} alt="" />
                    <img src={BrandLogo2} alt="" />
                    <img src={BrandLogo3} alt="" />
                    <img src={BrandLogo4} alt="" />
                    <img src={BrandLogo5} alt="" />
                    <img src={BrandLogo6} alt="" />
                    <img src={BrandLogo7} alt="" />
                    <img src={BrandLogo8} alt="" />
                </div>
            </Marquee>
          </div>
        </div>
    );
};

export default BrandsListMarquee;