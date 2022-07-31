import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import { getUserbag } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BagProduct } from "./BagProduct";
import Loader from "./Loader";
import { CartWrapper } from "../Assets/Styled/Cart.styled";

export const Cart = () => {
  const { isLoading, isError, mybag, mrp, bag_discount, total } = useSelector(
    (state) => state.reducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserbag(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <></>
      ) : (
        <CartWrapper>
          <div>
            <div className="headingDiv">
              <span>My Bag {mybag.length} </span> item(s)
            </div>
            <div className="container">
              <div className="leftcont">
                <div className="truckDiv">
                  <img
                    className="truckmove"
                    src="https://images.bewakoof.com/web/Red-truck.png"
                    alt="truck"
                  />
                  <span>Yay! You get FREE delivery on this order</span>
                </div>
                <div>
                  {mybag.map((el) => {
                    return <BagProduct key={el._id} {...el} />;
                  })}
                </div>
              </div>
              <div className="rightcont">
                <div className="saveExtra">Save extra ₹230 with TriBe</div>
                <div className="simplehappy10">
                  Whistles! Get extra 10% Cashback on prepaid orders above
                  Rs.699. Coupon code - HAPPY10.
                </div>

                <div className="priceSection">
                  <div className="coupenDiv">
                    <span>Have a Coupon / Referral / Gift Card ?</span>
                    <span>Redeem </span>
                  </div>
                  <div className="prsummary">Price Summary</div>
                  <div className="summarysec">
                    <div>
                      <span>Total MRP (Incl. of taxes) </span>
                      <span>₹ {mrp}</span>
                    </div>
                    <div>
                      <span>Delivery Fee </span>
                      <span>FREE</span>
                    </div>
                    <div>
                      <span>Bag Discount </span>
                      <span></span>
                      {bag_discount}
                    </div>
                    <div>
                      <span>Subtotal </span>
                      <span></span>₹ {total}
                    </div>
                  </div>
                  <div className="saving">
                    You are saving ₹ 3800 on this order
                  </div>
                  <div className="totalDiv">
                    <div>
                      <p>Total</p>
                      <p>₹ {total}</p>
                    </div>
                    <Button
                      variant="contained"
                      onClick={() => navigate(`/payment/${id}`)}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CartWrapper>
      )}
    </>
  );
};
