import React from "react";
import {ImBin} from 'react-icons/im';
import {GoPencil} from 'react-icons/go';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyDataRow = ({toyData, loadRemaining}) => {
 const {_id, toyName, photo, price, subCategory, quantity} = toyData;

 const handleDelete = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "Want to Delete this Toy?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#007700",
    confirmButtonText: "Yes, Delete",
  }).then((result) => {
    if (result.isConfirmed) {
      
      fetch(`https://queen-toy-server-developer-shourav.vercel.app/toy/${_id}`, {
        method:'DELETE'
      })
      .then( res => res.json())
      .then (data => {
        if(data.deletedCount > 0){
          loadRemaining()
          Swal.fire({
            title: "Done !",
            text: "Toy Delete successful",
            icon: "success",
          });
        }
      })
      
    }
  });

 }


  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20 md:w-24 md:h-24">
              <img
                src={photo}
                alt="Toy image"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>
      <td>$ {price}</td>
      <td>{subCategory}</td>
      <td>{quantity}</td>
      <th>
        <Link to={`/updateToy/${_id}`} className="btn bg-green-900 hover:bg-green-950 border-0">
          <GoPencil className="text-lg -mt-1 me-1" /> Update
        </Link>
      </th>
      <th>
        <button onClick={handleDelete}  className="btn bg-[#ff0627] hover:bg-red-700 border-0 ">
          {" "}
          <ImBin className="text-lg -mt-1 me-1" /> Delete
        </button>
      </th>
    </tr>
  );
};

export default MyDataRow;
