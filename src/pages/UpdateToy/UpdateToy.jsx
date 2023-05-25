import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Swal from "sweetalert2";

const UpdateToy = () => {
  /* -------Dynamic Title hook----- */
  useTitle("Update Toy");
  const toyData = useLoaderData();
  const handleUpdateToy = (event) => {
    /* ---------For Preventing default reload----------- */
    event.preventDefault()
    const form = event.target;
    
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;

    const updatedToy = {
        price,
        quantity,
        details
    };

    fetch(`https://queen-toy-server-developer-shourav.vercel.app/updateToy/${toyData?._id}`, {
        method:'PATCH',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
    })
    .then( res => res.json())
    .then( data => {
        if(data?.modifiedCount){
            Swal.fire(
                'Awesome!',
                'Toy Update Successful',
                'success'
              )
        }
    })

    
  }

  return (
    <div className="mt-10 container mx-auto px-3 pb-40">
      <div className="text-center text-2xl md:text-3xl font-bold my-5  flex items-center justify-center gap-3">
        {" "}
        <AiOutlineCloudUpload className="inline-block text-4xl md:text-5xl text-pink-500" />{" "}
        <span>Update Toy</span>
      </div>

      <div className="lg:w-10/12 mx-auto">
        <form onSubmit={handleUpdateToy}>
          {/* -----------From Data input ----------- */}
          <div className="flex flex-col md:flex-row  gap-4">
            {/* ------------First Container------------- */}
            <div className="hidden md:block md:w-1/2">
              
             <img src={toyData?.photo} className="md:h-96 mx-auto" alt="" />
            </div>

            {/* ------------Second Container ----------------- */}
            <div className="md:w-1/2">
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label className="input-group ">
                  <input
                    type="number"
                    placeholder="Price ($)"
                    className="input input-bordered  w-full"
                    name="price"
                    defaultValue={toyData?.price}
                    required
                  />
                </label>
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group ">
                  <input
                    type="number"
                    placeholder="Product Quantity"
                    className="input input-bordered  w-full"
                    name="quantity"
                    defaultValue={toyData?.quantity}
                    required
                  />
                </label>
              </div>

              <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <label className="input-group ">
              <textarea
                className="textarea textarea-info w-full"
                placeholder="Product's Detail description"
                name="details"
                defaultValue={toyData?.details}
              ></textarea>
            </label>
          </div>

          <input
            className="btn btn-secondary bg-pink-600 w-full mt-5"
            type="submit"
            value="Update TOY"
          />
            </div>
          </div>
          
        
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default UpdateToy;
