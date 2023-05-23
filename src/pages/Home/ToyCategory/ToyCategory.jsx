import React, { useState } from "react";
import BorderB from "../../../assets/images/border-img/borderB.svg";
const ToyCategory = () => {
  const [tab, setTab] = useState("all");
  /* --------Tab content and Condition--------- */
  const handleAllToy = () => {
      setTab("all");
    };
    const handleQueensToy = () => {
      setTab("queens");
    };
  const handleEvilsToy = () => {
    setTab("evils");
  };
  const handlePrincesToy = () => {
    setTab("princes");
  };


  return (
    <div>
      <div className=" mt-16 md:mt-20 lg:mt-40 ">
        {/* ----------Heading Style--------- */}
        <h2 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Shop By Categories
        </h2>
        <img
          src={BorderB}
          className="text-center w-3/6 md:w-4/12 lg:w-4/12 mx-auto"
          alt=""
        />

        {/* ---------- Toy Categories ---------- */}

        {/* -------- Tab Section ------- */}
        <div className=" text-center font-bold space-x-3  mt-10">
          <button
            onClick={handleAllToy}
            className={`btn rounded-full px-10 text-black bg-white hover:bg-pink-600 hover:text-white ${
              tab == "all" ? "bg-pink-500 text-white" : ""
            }`}
          >
            All
          </button>

          <button
            onClick={handleQueensToy}
            className={`btn rounded-full px-10 text-black bg-white hover:bg-pink-600 hover:text-white ${
              tab == "queens" ? "bg-pink-500 text-white" : ""
            }`}
          >
            Good Queens
          </button>

          <button
            onClick={handleEvilsToy}
            className={`btn rounded-full px-10 text-black bg-white hover:bg-pink-600 hover:text-white ${
              tab == "evils" ? "bg-pink-500 text-white" : ""
            }`}
          >
            Evil Queens
          </button>

          <button
            onClick={handlePrincesToy}
            className={`btn rounded-full px-10 text-black bg-white hover:bg-pink-600 hover:text-white ${
              tab == "princes" ? "bg-pink-500 text-white" : ""
            }`}
          >
            Princes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
