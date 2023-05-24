import React from "react";

const DataRow = ({toy}) => {
    const {_id, price, toyName, photo, quantity, seller, subCategory } = toy;
    console.log(toy);
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
        <button className="btn bg-pink-500 hover:bg-cyan-600 font-bold btn-sm border-0 ">
          View details
        </button>
      </th>
    </tr>
  );
};

export default DataRow;
