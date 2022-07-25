import { Link, useParams } from "react-router-dom";
import { ProductHeader } from "../Assets/Styled/Products.styled";

const ProductsHeader = ({ products }) => {
  const { id } = useParams();
  let split = id.split("-");
  let first = split.slice(0, 1);
  let second = split[split.length - 1];
  let last = split.slice(1, split.length).join(" ");
  console.log(first);
  return (
    <>
      <ProductHeader className="w-[80%] mx-auto my-4 mt-[180px]">
        <div className="flex text-[12px] text-[#2d2d2d]">
          <Link className="mx-3" to={"/"}>
            Home
          </Link>
          /
          <Link className="mx-3 capitalize" to={"/"}>
            {first}{" "}
            {first[0] === "men" || first[0] === "women" ? "clothing" : ""}
          </Link>
          /
          <Link className="mx-3 capitalize" to={"/"}>
            {first}'s {second}
          </Link>
          /
          <Link className="mx-3 capitalize" to={"/"}>
            {last} for {first}
          </Link>
        </div>

        <div className="mt-10">
          <div className="flex items-center capitalize">
            <h2 className="font-bold text-[24px] capitalize">
              {first}'s {second}
            </h2>
            <span className="text-[24px] text-[#949494] ml-2">
              ({products.length})
            </span>
          </div>
          <div className="w-[117px] h-[2px] bg-[#fbd139] mt-[6px] mr-[2px]"></div>
        </div>
      </ProductHeader>
    </>
  );
};

export default ProductsHeader;
