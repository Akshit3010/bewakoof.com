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
            <p className="cursor-pointer">
              SORT BY <span>Popular</span>
              <KeyboardArrowDownIcon />
            </p>
            {show && (
              <div>
                <p>popular</p>
                <p>new</p>
                <p>Price:High to Low</p>
                <p>Price: Low to High</p>
              </div>
            )}
          </div>
        </div>
      </ProdSection>
    </>
  );
};

export default Products;
