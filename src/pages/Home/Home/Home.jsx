import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import BorderB from "../../../assets/images/border-img/borderB.svg";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import useTitle from "../../../Hooks/useTitle";
import BrandsListMarquee from "../../../components/BrandsListMarquee/BrandsListMarquee";
import OurServices from "../../../components/OurServices/OurServices";
import SellPoster from "../../../components/SellPoster/SellPoster";
import { ScrollRestoration } from "react-router-dom";
import ToyCategory from "../ToyCategory/ToyCategory";


const Home = () => {
  /* -------------Dynamic Title Adding hook---------- */
  useTitle("Home");
 
  return (
    <div className="container mx-auto pb-32">
  
      {/* -----------Top Banner Section---------- */}
      <TopBanner> </TopBanner>

      {/* -----------Photo Gallery Section---------- */}
      <div  id="gallery" className=" mt-16 md:mt-20 lg:mt-28 ">
        {/* ----------Heading Style--------- */}
        <h2  className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Our Gallery
        </h2>
        <img
          src={BorderB}
          className="text-center w-3/6 md:w-4/12 lg:w-3/12 mx-auto"
          alt=""
        />

        {/* ----------Gallery ---------- */}
        <PhotoGallery > </PhotoGallery>
      </div>

      {/* -----------Brands Section---------- */}
      <div className=" ">
        {/* ----------Brand image ---------- */}
        <BrandsListMarquee> </BrandsListMarquee>
      </div>

      {/* ==========Our Specialties Section===========*/}
      <div className=" mt-16 md:mt-20 lg:mt-40 ">
        {/* ----------Heading Style--------- */}
        <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold">
        Our Specialties
        </h2>
        <img
          src={BorderB}
          className="text-center w-3/6 md:w-4/12 lg:w-3/12 mx-auto"
          alt=""
        />

        {/* ----------Our Services ---------- */}
        <OurServices> </OurServices>
      </div>


      {/* ============Product Category Section =============== */}
       
       
            {/* ---------- All Category  ------------ */}
            <ToyCategory> </ToyCategory>








      {/* ==========Offer Poster Section===========*/}
      <SellPoster> </SellPoster>
      <ScrollRestoration />
    </div>
  );
};

export default Home;

