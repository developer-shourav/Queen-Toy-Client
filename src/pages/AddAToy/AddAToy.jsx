import React, { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { AuthContext } from "../../providers/AuthProviders";
import { ScrollRestoration } from "react-router-dom";
import Swal from "sweetalert2";
const AddAToy = () => {
  /* -----------Dynamic Title------------- */
  useTitle("Add A Toy");

  /* -------User Data -------- */
  const { user } = useContext(AuthContext);

  const handleAddToy = event => {
    /* ---------For Preventing default reload----------- */
    event.preventDefault()
    const form = event.target;
    const photo = form.photo.value;
    const toyName = form.toyName.value;
    const subCategory = form.subCategory.value;
    const quantity = form.quantity.value;
    const seller = form.seller.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;

    const newToy = {
      photo,
      toyName,
      subCategory,
      quantity,
      seller,
      sellerEmail,
      price,
      rating,
      details
    };
   
   // Send Data to the server

   fetch('https://queen-toy-server-developer-shourav.vercel.app/addAToy', {
    method:'POST',
    headers: {
        'content-type':'application/json'
    },
    body: JSON.stringify(newToy)
 })
 
 .then( res => res.json())
 .then( data => {
    if(data?.acknowledged){
        Swal.fire(
            'Good job!',
            'Your Toy Added Successfully!',
            'success'
          )
        form.reset()
    }
    
 })
    
  }

  
  return (
    <div className="mt-10 container mx-auto pb-40 px-3">
      <div className="text-center text-2xl md:text-3xl font-bold   flex items-center justify-center gap-3">
        {" "}
        <HiOutlineViewGridAdd className="inline-block text-4xl md:text-5xl text-pink-500" />{" "}
        <span>Add A toy</span>
      </div>

      <div className="lg:w-10/12 mx-auto">

        <form onSubmit={handleAddToy}>
          

          {/* -----------From Data input ----------- */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* ------------First Container------------- */}
            <div className="md:w-1/2">
            <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Toy Image URL</span>
            </label>
            <label className="input-group ">
              <input
                type="text"
                placeholder="Your Toy Image URL"
                className="input input-bordered  w-full"
                name="photo"
                required
              />
            </label>
          </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <label className="input-group rounded-s ">
                  <input
                    type="text"
                    placeholder="Your Toy Name"
                    className="input input-bordered  w-full"
                    name="toyName"
                    required
                  />
                </label>
              </div>


              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Select Sub-Category</span>
                </label>
                <label className="input-group rounded-s ">
                <select className="select select-bordered w-full" required name="subCategory">
               
                <option>princes</option>
                <option>queen</option>
                <option>evil</option>
              </select>
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
                    required
                    
                  />
                </label>
              </div>

              
            </div>

            {/* ------------Second Container ----------------- */}
            <div className="md:w-1/2">
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <label className="input-group ">
                  <input
                    type="text"
                    placeholder="Input Seller Name"
                    className="input input-bordered  w-full"
                    name="seller"
                    defaultValue={user?.displayName}
                    required
                  />
                </label>
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <label className="input-group ">
                  <input
                    type="email"
                    placeholder="Input Seller Email"
                    className="input input-bordered  w-full"
                    name="sellerEmail"
                    defaultValue={user?.email}
                  />
                </label>
              </div>

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
                    required
                    
                  />
                </label>
              </div>

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label className="input-group ">
                  <input
                    type="number"
                    min="1"
                    max='5'
                    placeholder="Rating (1-5)"
                    className="input input-bordered  w-full"
                    name="rating"
                    
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text">Detail description</span>
            </label>
            <label className="input-group ">
              <textarea className="textarea textarea-info w-full" placeholder="Product's Detail description" name="details"></textarea>
            </label>
          </div>
          <input className="btn btn-secondary bg-pink-600 w-full mt-5" type="submit" value="ADD TOY" />
        </form>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default AddAToy;
