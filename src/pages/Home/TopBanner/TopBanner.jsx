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
          <h2 className="font-extrabold text-5xl text-center mt-8 logo-text-shadow  logo-style">
            Welcome To{" "}
            <span className=" text-pink-500 custom-text-shadow">Queen Toy</span>
          </h2>
        </div>

       {/*--------First Full Image ------------  */}
        <div>
          <img className="w-10/12 mx-auto" src={Banner} alt="" />
        </div>
      </div>

    {/* ------------Second Image Section ---------------- */}
      <div className="flex justify-between items-start gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={SliderImg1} className="w-8/12 " alt="" />
        </div>

        <div className="lg:w-1/2 mt-16">
          <h3 className="font-bold text-4xl my-3 ">We Are the best</h3>

          <h2 className="font-bold text-5xl text-pink-600 custom-text-shadow ">
            Disney dolls Toy Seller
          </h2>
          <p className="w-3/4 my-5 text-justify ">
          We have all kinds of Disney doll toys. You will get exactly what you want and what you are looking for. We always provide the best product to our customers. You are in the right place for choices the best.
          </p>

          <button className="btn rounded  bg-[#fd598f] shadow-md shadow-[#993153] border-0  hover:bg-pink-700 ">
            Buy Toys
          </button>
        </div>
      </div>


        {/* ---------Third Image Section -------------- */}
      <div className="flex mx-auto justify-between items-start gap-10 mt-20">
        <div className="lg:w-1/2 mt-16 ps-12">
          <h3 className="font-bold text-4xl my-3 ">Get The Toy You want</h3>

          <h2 className="font-bold text-5xl logo-text-shadow text-[#18b1b9] ">
            Find Your Disney dolls
          </h2>
          <p className="w-3/4 my-5">
          We have all kinds of Disney doll toys. You will get exactly what you want and what you are looking for. We always provide the best product to our customers. You are in the right place for choices the best.
          </p>

          <button className="btn rounded bg-[#0ec3cc] shadow-md shadow-[#266e72] border-0 hover:bg-cyan-700">
          See Gallery
          </button>
        </div>

        <div className="lg:w-1/2 ">
          <img src={SliderImg2} className="w-8/12 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
