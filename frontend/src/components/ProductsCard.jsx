import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductsCard = () => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="relative">
          <span className="absolute top-0 left-0 bg-[rgba(0, 184, 82, 0.8)] text-white px-1 py-1">
            {}
          </span>
          <img className="cursor-pointer" src={"img"} alt={""} />
          <span className="absolute bottom-4 left-0 bg-[#f7f7f7]  px-1 py-1">
            {}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[12px] font-bold">Bewakoof</p>
            <p className="text-[12px]">{}</p>
          </div>
          <FavoriteBorderIcon />
        </div>
        <h2>
          <span>₹</span>
          {}
        </h2>
        <span>₹{}</span>
        <p className="capitalize fonr-bold text-[12px] bg-[#f7f7f7]">
          {} for tribe members
        </p>
      </div>
    </>
  );
};

export default ProductsCard;
