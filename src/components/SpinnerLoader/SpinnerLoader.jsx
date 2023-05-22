import React from "react";
import Loader from '../../assets/images/loader/loader.gif';
const SpinnerLoader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mt-10">
        <img className="w-20 md:w-28" src={Loader} alt="" />
      </div>
    </div>
  );
};

export default SpinnerLoader;
