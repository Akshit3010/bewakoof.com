import React, { useEffect, useState } from "react";
import { ProdGridDiv, ProdSection } from "../Assets/Styled/Products.styled";
import ProductsHeader from "../components/ProductsHeader";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductsSidebar from "../components/ProductsSidebar";
import ProductsCard from "../components/ProductsCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, sortData } from "../Redux/action";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Products = () => {
  const { products, isLoading, isError } = useSelector(
    (state) => state.reducer
  );
  const [show, setShow] = useState(false);
  const [sortBy, setSortBy] = useState("Popular");

  const dispatch = useDispatch();
  const { id } = useParams();

  let split = id.split("-");
  let payload = split.slice(0, 2);
  payload = payload.map((el) => {
    return el.charAt(0).toUpperCase() + el.substring(1).toLowerCase();
  });

  useEffect(() => {
    dispatch(getProducts(payload.join("_")));
  }, [id]);

  return (
    <>
      <ProductsHeader products={products} />
      {isError && (
        <Stack sx={{ width: "80%", margin: " 2rem auto" }} spacing={2}>
          <Alert severity="error">
            Something went wrong while fetching latest data.
          </Alert>
        </Stack>
      )}
      {!isError && (
        <ProdSection className="w-10/12 m-auto h-auto">
          {isLoading && <Loader />}
          <div>
            <ProductsSidebar payload={payload} />
          </div>
          <div className="relative">
            <div
              className="absolute top-2 right-0"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <p className="cursor-pointer flex items-center text-[12px] font-bold text-[rgba(45,45,45,.5)]">
                SORT BY{" "}
                <span className="ml-2 font-[500] text-black">{sortBy}</span>
                <KeyboardArrowDownIcon />
              </p>
              {show && (
                <div className="absolute top-6 left-0 text-[13px] z-20 bg-white border-2 capitalize w-[160px] cursor-pointer px-2 py-2">
                  <p
                    className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]"
                    onClick={() => {
                      setSortBy("Popular");
                      setShow(false);
                      dispatch(sortData("Popular"));
                    }}
                  >
                    popular
                  </p>
                  <p
                    className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]"
                    onClick={() => {
                      setSortBy("New");
                      setShow(false);
                      dispatch(sortData("new"));
                    }}
                  >
                    new
                  </p>
                  <p
                    className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]"
                    onClick={() => {
                      setSortBy("Price:High to Low");
                      setShow(false);
                      dispatch(sortData("h2l"));
                    }}
                  >
                    Price:High to Low
                  </p>
                  <p
                    className="hover:bg-[#f7f7f7] px-1 py-1 text-black font-[500]"
                    onClick={() => {
                      setSortBy("Price:Low to High");
                      setShow(false);
                      dispatch(sortData("l2h"));
                    }}
                  >
                    Price:Low to High
                  </p>
                </div>
              )}
            </div>

            {!isLoading && (
              <ProdGridDiv>
                {products.map((item, i) => {
                  return <ProductsCard key={i} {...item} />;
                })}
              </ProdGridDiv>
            )}
            {!isLoading && products.length === 0 && (
              <div className="text-center mt-20">
                <p className="text-xl text-center">
                  Sorry, We couldn’t Find any matches!
                </p>
                <button
                  className="text-[#51cccc] border border-[#51cccc] py-2 px-4 mt-2 text-xl "
                  onClick={() => dispatch(getProducts(payload.join("_")))}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </ProdSection>
      )}
    </>
  );
};

export default Products;
