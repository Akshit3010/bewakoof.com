import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProdFilterDiv } from "../Assets/Styled/Products.styled";

const ProductsSidebar = () => {
  const [active, setActive] = useState({
    gender: false,
    category: false,
    size: false,
    color: false,
  });

  return (
    <>
      <ProdFilterDiv>
        <div className="flex justify-between  py-3 px-2 ">
          <p className="text-[12px] uppercase font-bold text-[rgba(45,45,45,.5)] self-end">
            Filters
          </p>
          <button
            className="text-[12px] text-gray-900 self-end"
            onClick={() => {
              setActive(!active);
            }}
          >
            Clear All
          </button>
        </div>
        <div className="border-b border-gray-300  py-4 px-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => {
              setActive({ ...active, gender: !active.gender });
            }}
          >
            <h3 className="text-[14px] text-[#333333] font-[500]">Gender</h3>
            <KeyboardArrowDownIcon
              style={
                active.gender
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.gender ? { display: "block" } : { display: "none" }}
            className="px-4  py-2"
          >
            <ul className="text-[12px] mt-2 cursor-pointer">
              <li className="mt-1 hover:bg-[#f7f7f7]">Unisex</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Men</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Women</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div
            className="flex justify-between items-center "
            onClick={() => {
              setActive({ ...active, category: !active.category });
            }}
          >
            <h3 className="text-[14px] text-[#333333] font-[500]">Category</h3>
            <KeyboardArrowDownIcon
              style={
                active.category
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.category ? { display: "block" } : { display: "none" }}
            className="px-4  py-2"
          >
            <ul className="text-[12px] mt-2 cursor-pointer">
              <li className="mt-1 hover:bg-[#f7f7f7]">Mobile Covers</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">T-shirt</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Cloth Mask</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">
                Protective Outdoor Mask
              </li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Notebooks</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Sliders</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Dress</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Joggers</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Laptop Bag</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setActive({ ...active, size: !active.size });
            }}
          >
            <h3 className="text-[14px] text-[#333333] font-[500]">Size</h3>
            <KeyboardArrowDownIcon
              style={
                active.size
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.size ? { display: "block" } : { display: "none" }}
            className="px-4  py-2"
          >
            <ul className="text-[12px] mt-2 cursor-pointer">
              <li className="mt-1 hover:bg-[#f7f7f7]"> XS</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">S</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">M</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">L</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">XL</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">2XL</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">3XL</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">4XL</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">5XL</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">6XL</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">30</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">32</li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div
            className="flex justify-between items-center"
            onClick={() => {
              setActive({ ...active, color: !active.color });
            }}
          >
            <h3 className="text-[14px] text-[#333333] font-[500]">Color</h3>
            <KeyboardArrowDownIcon
              style={
                active.color
                  ? {
                      transform: "rotate(180deg)",
                      transition: "transform .5s ease-in-out",
                    }
                  : {
                      transform: "rotate(0)",
                      transition: "transform .5s ease-in-out",
                    }
              }
            />
          </div>
          <div
            style={active.color ? { display: "block" } : { display: "none" }}
            className="px-4  py-2"
          >
            <ul className="flex gap-4 flex-wrap">
              <li className="mt-2 w-[24px] h-[24px] bg-black rounded-sm"></li>

              <li className="mt-2 w-[24px] h-[24px] bg-gray-400 rounded-sm"></li>

              <li className="mt-2 w-[24px] h-[24px] bg-white border-2 rounded-sm"></li>

              <li className="mt-2 w-[24px] h-[24px] bg-blue-600 rounded-sm"></li>

              <li className="mt-2 w-[24px] h-[24px] bg-red-600 rounded-sm"></li>
              <li className="mt-2 w-[24px] h-[24px] bg-green-600 rounded-sm"></li>

              <li className="mt-2 w-[24px] h-[24px] bg-yellow-400 rounded-sm"></li>
              <li className="mt-2 w-[24px] h-[24px] bg-pink-400 rounded-sm"></li>
              <li className="mt-2 w-[24px] h-[24px] bg-violet-700 rounded-sm"></li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Shipping</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Color</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Material</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Designers</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Stores</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </ProdFilterDiv>
    </>
  );
};

export default ProductsSidebar;
