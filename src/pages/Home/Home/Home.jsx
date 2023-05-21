import React from "react";
import TopBanner from "../TopBanner/TopBanner";
import BorderB from '../../../assets/images/border-img/borderB.svg';
import PhotoGallery from "../PhotoGallery/PhotoGallery";
const Home = () => {
  /* -------------Dynamic Title Adding hook---------- */
  return (
    <div className="container mx-auto">
      {/* -----------Top Banner Section---------- */}
      <TopBanner> </TopBanner>

      {/* -----------Photo Gallery Section---------- */}
      <div className=" mt-16 md:mt-20 lg:mt-28 ">

        {/* ----------Heading Style--------- */}
        <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold">Our Gallery</h2>
        <img src={BorderB} className="text-center w-3/6 md:w-4/12 lg:w-3/12 mx-auto" alt="" />

        {/* ----------Gallery ---------- */}
        <PhotoGallery> </PhotoGallery>
      </div>
     
    </div>
  );
};

export default Home;
