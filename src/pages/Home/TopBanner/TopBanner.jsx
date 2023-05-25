import React from "react";
import Banner from "../../../assets/images/banner-img/banner1.png";
import SliderImg1 from "../../../assets/images/banner-img/sindralla.png";
import SliderImg2 from "../../../assets/images/banner-img/sindralla2.png";

const TopBanner = () => {

  return (
    <div className="container mx-auto">

      {/* -----------First Banner Section------------ */}
      <div>
        <div className="">
          {/* -------Main Heading------- */}
          <h2 className="font-extrabold text-2xl md:text-5xl text-center mt-8 logo-text-shadow  logo-style">
            Welcome To{" "}
            <span className=" text-pink-500 custom-text-shadow">Queen Toy</span>
          </h2>
        </div>

       {/*--------First Full Image ------------  */}
        <div className="overflow-x-hidden" data-aos="zoom-in" data-aos-once="false">
          <img className="w-10/12 mx-auto" src={Banner} alt="" />
        </div>
      </div>

    {/* ------------Second Image Section ---------------- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:gap-10 mt-5 md:mt-10 lg:mt-20">
        <div data-aos="fade-up" data-aos-once="false"  className="md:w-1/2 overflow-x-hidden">
          <img src={SliderImg1} className="w-7/12 md:w-10/12 lg:w-8/12 text-center mx-auto " alt="" />
        </div>

        <div data-aos="fade-down" data-aos-once="false" className="px-5 overflow-x-hidden md:px-0 md:w-1/2  md:mt-16">
          <h3 className="font-bold text-xl md:text-2xl  lg:text-4xl md:my-3 ">We Are the best</h3>

          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl text-pink-600 custom-text-shadow ">
            Disney dolls Toy Seller
          </h2>
          <p className="md:pe-5 lg:pe-0 lg:w-3/4 my-3 md:my-5 text-justify ">
          We have all kinds of Disney doll toys. You will get exactly what you want and what you are looking for. We always provide the best product to our customers. You are in the right place for choices the best.
          </p>

          <a href="#toys">
          <button className="btn rounded  bg-[#fd598f] shadow-md shadow-[#993153] border-0  hover:bg-pink-700 ">
            Buy Toys
          </button>
          </a>
        </div>
      </div>


        {/* ---------Third Image Section -------------- */}
      <div className="flex flex-col-reverse md:flex-row   mx-auto justify-between items-start md:gap-10 mt-5 md:mt-10 lg:mt-20">
        <div data-aos="fade-up" data-aos-once="false" className="md:w-1/2 overflow-x-hidden px-5 md:px-0  md:ps-12  md:mt-6 lg:mt-16 ">
          <h3 className="font-bold text-xl md:text-2xl  lg:text-4xl md:my-3 ">Get The Toy You want</h3>

          <h2 className="font-bold text-2xl md:text-3xl lg:text-5xl logo-text-shadow text-[#18b1b9] ">
            Find Your Disney dolls
          </h2>
          <p className=" lg:w-3/4 my-3 md:my-5 text-justify ">
          We have all kinds of Disney doll toys. You will get exactly what you want and what you are looking for. We always provide the best product to our customers. You are in the right place for choices the best.
          </p>

          <a href="#gallery">
          <button className="btn rounded bg-[#0ec3cc] shadow-md shadow-[#266e72] border-0 hover:bg-cyan-700">
          See Gallery
          </button>
          </a>
        </div>

        <div data-aos="fade-down" data-aos-once="false" className="md:w-1/2 overflow-x-hidden">
          <img src={SliderImg2} className="w-7/12 md:w-10/12 lg:w-8/12 text-center mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
