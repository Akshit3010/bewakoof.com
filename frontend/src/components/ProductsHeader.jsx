import { Link, useParams } from "react-router-dom";
import { ProductHeader } from "../Assets/Styled/Products.styled";

const ProductsHeader = () => {
  const { id } = useParams();
  return (
    <>
      <ProductHeader className="w-[80%] mx-auto my-4">
        <div className="flex text-[12px] text-[#2d2d2d]">
          <Link className="mx-2" to={"/"}>
            Home
          </Link>
          /
          <Link className="mx-2" to={"/"}>
            Buy one get one free
          </Link>
          /
          <Link className="mx-2" to={"/"}>
            Men Unisex Buy One Get One Free
          </Link>
        </div>

        <div className="mt-10">
          <div className="flex items-center capitalize">
            <h2 className="font-bold text-[24px]">Buy one get one free</h2>
            <span className="text-[24px] text-[#949494] ml-2">(379)</span>
          </div>
          <div className="w-[117px] h-[2px] bg-[#fbd139] mt-[6px] mr-[2px]"></div>
        </div>
      </ProductHeader>
    </>
  );
};

export default ProductsHeader;
