import React, { useState } from "react";
import { ProdSection } from "../Assets/Styled/Products.styled";
import ProductsHeader from "../components/ProductsHeader";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductsSidebar from "../components/ProductsSidebar";

const Products = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ProductsHeader />
      <ProdSection className="w-10/12 m-auto h-auto">
        <div>
          <ProductsSidebar />
        </div>
        <div className="relative">
          <div
            className="absolute top-2 right-0"
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <p className="cursor-pointer flex items-center text-[12px] font-bold text-[rgba(45,45,45,.5)]">
              SORT BY{" "}
              <span className="ml-2 font-[500] text-black">Popular</span>
              <KeyboardArrowDownIcon />
            </p>
            {show && (
              <div className="absolute top-6 left-0 text-[13px] bg-white border-2 capitalize w-[160px] cursor-pointer px-2 py-2">
                <p className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]">
                  popular
                </p>
                <p className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]">
                  new
                </p>
                <p className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]">
                  Price:High to Low
                </p>
                <p className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]">
                  Price: Low to High
                </p>
              </div>
            )}
          </div>
        </div>
      </ProdSection>
    </>
  );
};

export default Products;
