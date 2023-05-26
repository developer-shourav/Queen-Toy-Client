import React, { useEffect, useState } from "react";
import BorderB from "../../../assets/images/border-img/borderB.svg";
import ToyCard from "./ToyCard";

const ToyCategory = () => {
  const [tabStyle, setTabStyle] = useState("all");
  const [toysData, setToysData] = useState([]);
  const [filteredData, setFilteredData] = useState(toysData)
  const [dataReloader, setDataReloader] = useState(false);



  /* --------Tab content and Condition--------- */
  const handleAllToy = () => {
    setTabStyle("all")
    setDataReloader(!dataReloader)
    setFilteredData(toysData)
    setDataReloader(true)
    };
    const handleQueensToy = () => {
      setTabStyle("queen")
      const queensToy = toysData?.filter( data => data.subCategory == 'queen');
      setFilteredData(queensToy)
      setDataReloader(true)
    };
  const handleEvilsToy = () => {
    setTabStyle("evil")
    const evilToy = toysData?.filter( data => data.subCategory == 'evil');
    setFilteredData(evilToy)
    setDataReloader(true)
  };
  const handlePrincesToy = () => {
    setTabStyle("princes")
    const princesToy = toysData?.filter( data => data.subCategory == 'princes');
    setFilteredData(princesToy)
    setDataReloader(true)
  };

  useEffect( () => {
     fetch('https://queen-toy-server-developer-shourav.vercel.app/toys')
    .then( res => res.json())
    .then( data => setToysData(data))
  }, [dataReloader])


  return (
    <div id="toys">
      <div  className=" mt-16 md:mt-20 lg:mt-40 ">
        {/* ----------Heading Style--------- */}
        <h2  className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          Shop By Categories
        </h2>
        <img
          src={BorderB}
          className="text-center w-4/6 md:w-5/12 lg:w-4/12 mx-auto"
          alt=""
        />

        {/* ---------- Toy Categories ---------- */}

        {/* -------- Tab Section ------- */}
        <div className=" hidden md:block text-center font-bold space-x-1 md:space-x-3 space-y-2  md:mt-10">
          <button
            onClick={handleAllToy}
            className={`btn  rounded-full px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "all" ? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
            All
          </button>

          <button
            onClick={handleQueensToy}
            className={`btn rounded-full  md:px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "queen"? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
            Disney Queens
          </button>

          <button
            onClick={handleEvilsToy}
            className={`btn rounded-full px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "evil" ? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
           Disney Evil 
          </button>

          <button
            onClick={handlePrincesToy}
            className={`btn rounded-full px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "princes" ? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
           Disney Princes
          </button>
        </div>
        <div className="block md:hidden text-center font-bold space-x-1 md:space-x-3 space-y-2  md:mt-10">
          <button
            onClick={handleAllToy}
            className={`btn btn-sm  rounded-full px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "all" ? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
            All
          </button>

          <button
            onClick={handleQueensToy}
            className={`btn btn-sm rounded-full  md:px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "queen"? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
            Disney Queens
          </button>

          <button
            onClick={handleEvilsToy}
            className={`btn btn-sm rounded-full px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "evil" ? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
           Disney Evil 
          </button>

          <button
            onClick={handlePrincesToy}
            className={`btn btn-sm rounded-full px-6  hover:bg-pink-600 hover:text-white ${
              tabStyle == "princes" ? "bg-pink-500 text-white" : " text-black bg-white"
            }`}
          >
           Disney Princes
          </button>
        </div>

        {/* ----------------Toys Card------------------- */}
        <div className=" mx-3  md:mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-16">

          { dataReloader && 
            filteredData.map ( toy => <ToyCard
            key={toy?._id}
            toy={toy}
            > </ToyCard>)
          }
          { !dataReloader && 
            toysData.map ( toy => <ToyCard
            key={toy?._id}
            toy={toy}
            > </ToyCard>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
