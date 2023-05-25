import React from "react";
import AddImg from '../../assets/images/add-img/add-group.png';
const SellPoster = () => {

  return (
    <div data-aos="flip-up" data-aos-once="false" className=" overflow-x-hidden  my-20 mx-3 lg:mx-0 lg:my-36  gap-5 flex flex-col-reverse md:flex-row  font-bold uppercase text-center bg-[#ff6799] shadow-xl rounded-xl ">
     
        <div>
            <img src={AddImg} className="drop-shadow-2xl shadow-black" alt="" />
        </div>

        <div className="mt-8">
            <h1 className="text-4xl md:text-3xl lg:text-6xl text-stone-100 mb-3">Amazing Toy On Sale</h1>
            <p className=" text-white  md:mt-3 lg:mt-5"><span className="bg-cyan-500 px-6 py-2 ">Save up to 25% </span></p>
            <br />
            <span className="btn bg-[#fddb45] hover:bg-[#d1ab00] border-0 text-black font-bold rounded-full px-5">Shop Now</span>
        </div>


    </div>
  );
};

export default SellPoster;
