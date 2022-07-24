import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSuccessfull = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] w-full flex flex-col items-center justify-center">
        <div>
          <img
            className="w-[440px]"
            src="https://www.pinkwigscloset.com/images/success-tick.gif"
            alt="img"
          />
        </div>
        <p className="text-2xl font-bold">Order successfully placed</p>
        <button
          className="px-4 py-1 text-xl font-[600] text-black bg-[#fdd835]"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </>
  );
};

export default OrderSuccessfull;
