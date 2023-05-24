import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const DataRow = ({toy}) => {
    const {_id, price, toyName, photo, quantity, seller, subCategory } = toy;
    const {user} = useContext(AuthContext)
    const showInfo = () => {
      Swal.fire(
        'You are not logged in',
        'You have to log in first to view details',
        'warning'
      )
    }
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-20 h-20 md:w-24 md:h-24">
              <img src={photo} alt="Toy image" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
          </div>
        </div>
      </td>
      <td>{seller}</td>
      <td>${price}</td>
      <td>{subCategory}</td>
      <td>{quantity}</td>
      <th>
       { !user && <Link className="btn bg-pink-500 hover:bg-cyan-600 font-bold btn-sm border-0 " onClick={showInfo}  to={`/toyDetails/${_id}`}>View Details</Link>}

       { user && <Link className="btn bg-pink-500 hover:bg-cyan-600 font-bold btn-sm border-0 " to={`/toyDetails/${_id}`}>View Details</Link>}
      </th>
    </tr>
  );
};

export default DataRow;
