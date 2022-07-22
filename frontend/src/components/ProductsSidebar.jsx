import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProdFilterDiv } from "../Assets/Styled/Products.styled";
import { useDispatch } from "react-redux";
import { filterData, getProducts } from "../Redux/action";

const ProductsSidebar = ({ payload }) => {
  const [active, setActive] = useState({
    gender: false,
    category: false,
    size: false,
    color: false,
  });

  const dispatch = useDispatch();

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
              dispatch(getProducts(payload.join("_")));
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
              <li className="mt-1 hover:bg-[#f7f7f7]">Shorts</li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={() => {
                  dispatch(getProducts("Men_Printed"));
                }}
              >
                Printed T-shirts
              </li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Cloth Mask</li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={() => dispatch(getProducts("Men_Activewear"))}
              >
                Activewears
              </li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Vest</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Boxer</li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Headband</li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={() => dispatch(getProducts("Men_Joggers"))}
              >
                Joggers
              </li>
              <li className="mt-1 hover:bg-[#f7f7f7]">Gym Bag</li>
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
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                {" "}
                XS
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                S
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                M
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                L
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                XL
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                2XL
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                3XL
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                4XL
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                5XL
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                6XL
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                30
              </li>
              <li
                className="mt-1 hover:bg-[#f7f7f7]"
                onClick={(e) =>
                  dispatch(filterData({ sizes: e.target.innerHTML }))
                }
              >
                32
              </li>
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
              <li
                className="mt-2 w-[24px] h-[24px] bg-black rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "black" }))}
              ></li>

              <li
                className="mt-2 w-[24px] h-[24px] bg-gray-400 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "gray" }))}
              ></li>

              <li
                className="mt-2 w-[24px] h-[24px] bg-white border-2 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "white" }))}
              ></li>

              <li
                className="mt-2 w-[24px] h-[24px] bg-blue-600 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "blue" }))}
              ></li>

              <li
                className="mt-2 w-[24px] h-[24px] bg-red-600 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "red" }))}
              ></li>
              <li
                className="mt-2 w-[24px] h-[24px] bg-green-600 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "green" }))}
              ></li>

              <li
                className="mt-2 w-[24px] h-[24px] bg-yellow-400 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "yellow" }))}
              ></li>
              <li
                className="mt-2 w-[24px] h-[24px] bg-pink-400 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "pink" }))}
              ></li>
              <li
                className="mt-2 w-[24px] h-[24px] bg-violet-700 rounded-sm"
                onClick={(e) => dispatch(filterData({ color: "purple" }))}
              ></li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Design</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Fit</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Sleeve</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Neck</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="border-b border-gray-300  py-4 px-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <h3 className="text-[14px] text-[#333333] font-[500]">Type</h3>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </ProdFilterDiv>
    </>
  );
};

export default ProductsSidebar;
