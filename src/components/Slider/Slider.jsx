import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

import SliderImg1 from "../../assets/images/banner-img/sindralla.png";
import SliderImg2 from "../../assets/images/banner-img/sindralla2.png";

const Slider = () => {
  return (
    <div className="container mx-auto ">
      {/* ----------------Website Top Banner Slider --------------------- */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        /* autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }} */
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper "

      >
        {/* ----------------Website Top Banner Slider Item One --------------------- */}
        <SwiperSlide>
          <div className="flex justify-between items-center">
            <div>
              <img src={SliderImg1} className="h-80" alt="" />
            </div>

            <div>
              <h2 className="text-3xl">Welcome To Queen Toy</h2>
            </div>
          </div>
        </SwiperSlide>

        {/* ----------------Website Top Banner Slider Item Two --------------------- */}
        <SwiperSlide>
          <div className="flex justify-between items-center">
            <div>
              <img src={SliderImg2} alt="" />
            </div>

            <div>
              <h2 className="text-3xl">Welcome To Queen Toy</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
