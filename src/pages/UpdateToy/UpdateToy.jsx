import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { AiOutlineCloudUpload } from "react-icons/ai";

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
  }

  return (
    <div className="mt-10 container mx-auto px-3">
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
                    min="1"
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
                    min="1"
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
