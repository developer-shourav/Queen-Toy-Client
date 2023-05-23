import React from "react";

const ToyCard = ({toy}) => {
    const {toyName, photo, subCategory} = toy ;
  return (
    <div className="card card-compact w-full  mx-auto bg-base-100 box-shadow">
      <figure>
        <img
          src={photo}
          className="h-40"
          alt="Toy image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>{toyName}</p>
       
      </div>
    </div>
  );
};

export default ToyCard;
