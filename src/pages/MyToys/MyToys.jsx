import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import { ScrollRestoration } from "react-router-dom";
import MyDataRow from "./MyDataRow";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const MyToys = () => {
    /* --------Dynamic Title hook------ */
  useTitle("My Toys");
   /* ----------Get Data Form Context API-----*/
   const {user} = useContext(AuthContext);
   const [myToys, setMyToys] = useState([]);
   const [dataReloader, setDataReloader] = useState(false);
   
   const loadRemaining = () => {
    setDataReloader(!dataReloader)
   }
   
   useEffect(() => {
    fetch(`https://queen-toy-server-developer-shourav.vercel.app/myToys?email=${user?.email}`)
    .then( res => res.json())
    .then(data => setMyToys(data))
   }, [dataReloader])
  


  return (
    <div className="pb-40">
      <h2 className=" text-3xl md:text-4xl text-center my-10  font-bold">
        My Toys
      </h2>

      <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="">
              <th className=" text-[16px]">Toy Name & Image</th>
              <th className=" text-[16px]">Price</th>
              <th className=" text-[16px]">Sub-Category</th>
              <th className=" text-[16px]"> Quantity</th>
              <th className=" text-[16px]"> Update</th>
              <th className=" text-[16px]"> Delete</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* --------show data -------------- */}

            {
                myToys?.map( toyData => <MyDataRow
                key={toyData._id}
                toyData={toyData}
                loadRemaining={loadRemaining}
                > </MyDataRow>)
            }
            
          </tbody>
        </table>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default MyToys;
