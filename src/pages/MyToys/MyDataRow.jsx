import React, { useContext } from "react";
import {ImBin} from 'react-icons/im';
import {GoPencil} from 'react-icons/go';
import { AuthContext } from "../../providers/AuthProviders";
 
const MyDataRow = ({toyData}) => {
 const {setReloader, reloader} = useContext(AuthContext);
 const {_id, toyName, photo, price, subCategory, quantity} = toyData;
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
        <button className="btn bg-green-950 hover:bg-green-900 border-0">
          <GoPencil className="text-lg -mt-1 me-1" /> Update
        </button>
      </th>
      <th>
        <button  className="btn bg-[#ff0627] hover:bg-red-700 border-0 ">
          {" "}
          <ImBin className="text-lg -mt-1 me-1" /> Delete
        </button>
      </th>
    </tr>
  );
};

export default MyDataRow;
