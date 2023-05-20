import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";


import SliderImg1 from '../../assets/slider-img/slider1.jpg'
import SliderImg2 from '../../assets/slider-img/slider2.jpg'
import SliderImg3 from '../../assets/slider-img/slider3.jpg'

const Slider = () => {
    return (
        <div className="container mx-auto">

          {/* ----------------Website Top Banner Slider --------------------- */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* ----------------Website Top Banner Slider Item One --------------------- */}
        <SwiperSlide> <div className='flex px-5 lg:px-0 flex-col-reverse md:flex-row my-4 md:my-8 lg:my-10 items-center justify-between'>
               <div className='md:w-1/2 lg:ps-10'>
                <h1 className='font-bold text-3xl md:text-5xl my-2 md:mb-5 color-red'>Chose The Best </h1>
                <h1 className='font-bold text-2xl  md:text-4xl lg:text-6xl mb-5'> Signature Dish </h1>
                
                
                <p className='md:w-3/4 text-gray-700 mb-5'><strong>Biriyani.</strong> The Indian Dish you like most. The special rice. We have most expert Chef and various recipe on it. Try our awesome food item now.</p>
                <button style={{background:'red'}} className='btn border-0 rounded-none px-8 '> Shop Now </button>

                 <div className=' mt-5 md:mt-10 font-bold flex gap-20'>

                   <div>
                     <h3 className=' text-2xl md:text-3xl'>1534+</h3>
                     <p ><small>Total Sells</small></p>
                   </div>

                   <div>
                   <h3 className=' text-2xl md:text-3xl'>1000+</h3>
                     <p><small>Monthly Customers</small></p>
                   </div>

                 </div>
               </div>

               <div className='md:w-1/2'>
                <img className="rounded"  src={SliderImg1} alt="" />
               </div>
            </div></SwiperSlide>



   {/* ----------------Website Top Banner Slider Item Two --------------------- */}
        <SwiperSlide> <div className='flex px-5 lg:px-0 flex-col-reverse md:flex-row my-4 md:my-8 lg:my-10 items-center justify-between'>
               <div className='md:w-1/2 lg:ps-10'>
                <h1 className='font-bold text-3xl md:text-5xl my-2 md:mb-5 color-red'> Chose Your Top </h1>
                <h1 className='font-bold text-2xl  md:text-4xl lg:text-6xl mb-5'> Top Plater Here </h1>
                
                
                <p className='md:w-3/4 text-gray-700 mb-5'>We stands for quality, authenticity, trust and satisfaction. We have a massive collection of products and brands that you will love.</p>
                <button style={{background:'red'}} className='btn border-0 rounded-none px-8 '> Shop Now </button>

                 <div className=' mt-5 md:mt-10 font-bold flex gap-20'>

                   <div>
                     <h3 className=' text-2xl md:text-3xl'>1534+</h3>
                     <p ><small>Total Products</small></p>
                   </div>

                   <div>
                   <h3 className=' text-2xl md:text-3xl'>1000+</h3>
                     <p><small>Monthly Customers</small></p>
                   </div>

                 </div>
               </div>

               <div className='md:w-1/2'>
                <img  className="rounded" src={SliderImg2} alt="" />
               </div>
            </div>
            </SwiperSlide>




        {/* ----------------Website Top Banner Slider Item Three --------------------- */}
        <SwiperSlide>
        <div className='flex px-5 lg:px-0 flex-col-reverse md:flex-row my-4 md:my-8 lg:my-10 items-center justify-between'>
               <div className='md:w-1/2 lg:ps-10'>
                <h1 className='font-bold text-3xl md:text-5xl my-2 md:mb-5 color-red'> Find More Than </h1>
                <h1 className='font-bold text-2xl  md:text-4xl lg:text-6xl mb-5'> 200 Vag Recipes </h1>
                
                
                <p className='md:w-3/4 text-gray-700 mb-5'>We stands for quality, authenticity, trust and satisfaction. We have a massive collection of products and brands that you will love.</p>
                <button style={{background:'red'}} className='btn border-0 rounded-none px-8 '> Shop Now </button>

                 <div className=' mt-5 md:mt-10 font-bold flex gap-20'>

                   <div>
                     <h3 className=' text-2xl md:text-3xl'>1534+</h3>
                     <p ><small>Total Products</small></p>
                   </div>

                   <div>
                   <h3 className=' text-2xl md:text-3xl'>1000+</h3>
                     <p><small>Monthly Customers</small></p>
                   </div>

                 </div>
               </div>

               <div className='md:w-1/2'>
                <img className="rounded"  src={SliderImg3} alt="" />
               </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;