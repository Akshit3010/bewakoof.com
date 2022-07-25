import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AiFillStar } from "react-icons/ai";
import { ProdImg } from "../Assets/Styled/Products.styled";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AddToWish } from "../Redux/action";

const ProductsCard = ({
  _id,
  title,
  imgUrl,
  price,
  strikedOffprice,
  rating,
}) => {
  const { user } = useSelector((state) => state.reducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const costForTwo = price * 2 - 19;

  const notify = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);

  const addToWish = () => {
    if (!user?.user?.email) {
      return navigate("/login");
    }
    const userId = user.user._id;
    dispatch(AddToWish(_id, userId, error, notify));
  };
  return (
    <>
      <div
        className="cursor-pointer mb-2"
        onClick={() => {
          navigate(`${_id}`);
        }}
      >
        <div className="relative overflow-hidden">
          <span className="absolute top-0 z-10 left-0 bg-gray-800 text-[10px] text-white px-1 py-[1px]">
            Buy 2 for {costForTwo}
          </span>
          <ProdImg className="cursor-pointer" src={imgUrl} alt={title} />
          <span className="absolute bottom-4 flex items-center left-0 bg-[rgba(255,255,255,.8)] text-[11px] font-bold  px-1 py-[1px]">
            {rating}
            <AiFillStar className="text-yellow-500 ml-1 text-[12px]" />
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[12px] font-bold my-1">Bewakoof</p>
            <p className="text-[11px]">{title.slice(0, 36)}...</p>
          </div>
          <FavoriteBorderIcon className="mr-3" onClick={addToWish} />
        </div>
        <div className="flex items-end">
          <h2 className="font-bold">
            <span className="text-[14px] font-[500] font-sans">₹</span>
            {price}
          </h2>
          <span className="text-[13px] line-through  text-gray-500 ml-1">
            ₹{strikedOffprice}
          </span>
        </div>
        <p className="capitalize fonr-bold text-[11px] px-2 py-1 font-bold bg-[#f7f7f7]">
          ₹{price - 50} for tribe members
        </p>
      </div>
    </>
  );
};

export default ProductsCard;
