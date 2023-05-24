import React, { useContext } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProviders";

const ToyCard = ({toy}) => {
    const {_id, toyName, photo, subCategory, price, rating} = toy ;
    const { user } = useContext(AuthContext);

    
      const showInfo = () => {
        Swal.fire(
          'You are not logged in',
          'You have to log in first to view details',
          'warning'
        )
      }
  return (
    <div className="card card-compact w-full  mx-auto bg-base-100 box-shadow">
      <figure>
        <img
          src={photo}
          className=" h-48"
          alt="Toy image"
        />
      </figure>
      <div className="card-body">
      <div className='flex items-center'> <Rating style={{ maxWidth: 90 }} value={rating} readOnly /> <span className='ms-2 mt-1 font-bold  text-gray-600'>{rating}</span></div>
        <h2 className="text-[16px] font-bold">{toyName}</h2>
        <div className="flex justify-between items-center">
         <h2 className="text-lg font-bold">${price}</h2>
         {
          !user && <Link className="btn btn-sm normal-case border-0 bg-pink-500 text-bold text-white px-3 py-1 rounded hover:bg-pink-700" onClick={showInfo}  to={`/toyDetails/${_id}`}>View Details</Link>
         }
         {
          user && <Link className="btn btn-sm normal-case border-0 bg-pink-500 text-bold text-white px-3 py-1 rounded hover:bg-pink-700"   to={`/toyDetails/${_id}`}>View Details</Link>
         }
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
