import React from "react";
import Slider from "../../../components/Slider/Slider";
import Banner from "../../../assets/images/banner-img/banner1.png";
import SliderImg1 from "../../../assets/images/banner-img/sindralla.png";
import SliderImg2 from "../../../assets/images/banner-img/sindralla2.png";

const Home = () => {
  /* -------------Dynamic Title Adding hook---------- */
  return (
    <div className="container mx-auto">
      {/* -----------Top Banner Section---------- */}
      {/*  <Slider> </Slider> */}

      {/* ---------------- Banner ------------- */}

      <div>
        <div className="">
          <h2 className="font-extrabold text-5xl text-center mt-8 logo-text-shadow  logo-style">
            Welcome To{" "}
            <span className=" text-pink-500 custom-text-shadow">Queen Toy</span>
          </h2>
        </div>
        
        <div>
            <img className="w-10/12 mx-auto" src={Banner} alt="" />
        </div>

      </div>

      <div className="flex justify-between items-center gap-4 bg">
        <div className="lg:w-1/2">
          <img src={SliderImg1} className="w-8/12" alt="" />
        </div>

        <div className="lg:w-1/2">
          <h2 className="font-bold text-5xl text-pink-600 ">
            Welcome to Queen Toy{" "}
          </h2>
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 bg">
        <div className="lg:w-1/2">
          <h2 className="font-bold text-5xl text-pink-600 ">
            Welcome to Queen Toy{" "}
          </h2>
        </div>

        <div className="lg:w-1/2">
          <img src={SliderImg2} className="w-8/12" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
