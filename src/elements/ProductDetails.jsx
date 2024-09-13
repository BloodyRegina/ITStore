import React, { useState } from "react";
import Swal from "sweetalert2";
const ProductDetailBox = (props) => {
  const [quantity, setQuantity] = useState(1);

  const onIncre = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const onDecre = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const success = () => {
    Swal.fire({
      title: "สั่งซื้อสำเร็จ",
      icon: "success",
    });
  };
  return (
    <div className="w-[100%] h-[100%] rounded-lg bg-white border-[1px] border-black flex justify-between px-10 my-10 gap-5 flex-col lg:flex-row">
      <img src={`/images/${props.image}`} alt="" className="min-w-[20%]"/>
      <div className="flex flex-col w-[630px] my-10 gap-2 justify-center">
        <h1 className="text-[64px] font-semibold">{props.type}</h1>
        <h3 className="text-[#FF0000] text-2xl font-semibold">รายละเอียด</h3>
        <h2 className="text-[32px] font-semibold">{props.details}</h2>
        <h2 className="text-[36px] font-medium">ราคา {props.price} ฿</h2>
        <div className="inline-flex items-center">
          <h3 className="text-2xl mr-2">จำนวน</h3>
          <button
            className="w-[43px] h-[38px] bg-[#EAEAEA] flex items-center justify-center border-l rounded-l-lg"
            onClick={onIncre}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </button>
          <input
            type="text"
            className="w-[70px] h-[38px] text-center bg-[#FAFAFA]"
            value={quantity}
            readOnly
          />
          <button
            className="w-[43px] h-[38px] bg-[#EAEAEA] flex items-center justify-center border-l rounded-r-lg"
            onClick={onDecre}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-minus"
            >
              <path d="M5 12h14" />
            </svg>
          </button>
        </div>
        <button
          className="w-[245px] border-[1px] border-[#FF0000] h-[41px] text-2xl font-semibold text-[#FF0404] py-2 btn btn1"
          onClick={success}
        >
          <a>สั่งซื้อทันที</a>
        </button>
      </div>
    </div>
  );
};

export default ProductDetailBox;
