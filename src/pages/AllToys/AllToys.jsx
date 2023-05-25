import React from "react";
import useTitle from "../../Hooks/useTitle";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import DataRow from "./DataRow";

const AllToys = () => {
  /* ---------Dynamic Title----------- */
  useTitle("All Toys");
  /* -------------Fetching all Toys data--------- */
  const toysData = useLoaderData();
  return (
    <div className="pb-40">
      <h2 className=" text-3xl md:text-4xl text-center my-10  font-bold">All Toys</h2>

      <div className="overflow-x-auto w-full  px-5">
        <table className="table w-full ">
          {/* head */}
          <thead className="font-extrabold ">
            <tr className="">
             
              <th className=" text-[16px]">Toy Name & Image</th>
              <th className=" text-[16px]">Seller</th>
              <th className=" text-[16px]">Price</th>
              <th className=" text-[16px]">Sub-Category</th>
              <th className=" text-[16px]">Available Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {/* --------show data -------------- */}
           {
            toysData?.map( toyData => <DataRow
             key={toyData._id}
             toy={toyData}
            > 

            </DataRow>)
           }
            
          </tbody>
         
        </table>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AllToys;
