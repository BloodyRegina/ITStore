import React from "react";
import { Link } from "react-router-dom";
const ProductTypeCard = (props) => {
  return (
    <div className="flex flex-col w-[250px] justify-center items-center rounded-lg p-4 bg-white">
      <Link to="" className="before:hidden">
        <img
          src={`/images/${props.image}`}
          alt={props.name}
          className="h-[250px] "
        />
      </Link>
      <h1 className="text-2xl text-center">{props.name}</h1>
    </div>
  );
};

export default ProductTypeCard;
