import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => (
  <div className="flex flex-col w-[350px] justify-center items-center shadow-lg rounded-lg p-4 bg-white gap-[66px] mb-5">
    <img
      src={`/images/${props.image}`}
      alt={props.name}
      className="h-[210px]"
    />
    <h1 className="text-[28px] text-center font-semibold">{props.name}</h1>
    <button className="w-[245px] h-[41px] bg-white text-[#FF0000]  border-[#FF0000] border-[1px] text-2xl font-semibold btn btn1">
      <Link to={`/product/${props.productid}`} className="">Learn More</Link>
    </button>
    <div></div>
  </div>
);

export default Card;
