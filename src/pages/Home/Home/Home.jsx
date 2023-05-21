import React from "react";
import Banner from "../../../assets/images/banner-img/banner1.png";
import SliderImg1 from "../../../assets/images/banner-img/sindralla.png";
import SliderImg2 from "../../../assets/images/banner-img/sindralla2.png";

const Home = () => {
  /* -------------Dynamic Title Adding hook---------- */
  return (
    <div className="container mx-auto">
      {/* -----------Top Banner Section---------- */}


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

      <div className="flex justify-between items-start gap-10 mt-20">
        <div className="lg:w-1/2 ">
          <img src={SliderImg1} className="w-8/12 " alt="" />
        </div>

        <div className="lg:w-1/2 mt-16">
          <h3 className="font-bold text-4xl my-3 ">
            We Are the best 
          </h3>

          <h2 className="font-bold text-5xl text-pink-600 custom-text-shadow " >Disney dolls Toy Seller</h2>
          <p className="w-3/4 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati maiores quae dicta atque pariatur labore officia alias neque repellendus!</p>

          <button className="btn rounded  bg-pink-500 border-0  hover:bg-pink-700 ">See Gallery</button>
        </div>
      </div>


      <div className="flex mx-auto justify-between items-start gap-10 mt-20">
       

        <div className="lg:w-1/2 mt-16 ps-12">
          <h3 className="font-bold text-4xl my-3 ">
            We Are the best 
          </h3>

          <h2 className="font-bold text-5xl logo-text-shadow text-[#18b1b9] " >Disney dolls Toy Seller</h2>
          <p className="w-3/4 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt obcaecati maiores quae dicta atque pariatur labore officia alias neque repellendus!</p>

          <button className="btn rounded bg-cyan-500 border-0 hover:bg-cyan-700">Buy Toys</button>
        </div>

        <div className="lg:w-1/2 ">
          <img src={SliderImg2} className="w-8/12 mx-auto" alt="" />
        </div>
      </div>

     
    </div>
  );
};

export default Home;
