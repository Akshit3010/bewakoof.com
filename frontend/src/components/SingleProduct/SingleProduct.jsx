import React, { useEffect, useState } from "react";
import styles from "./SingleProduct.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag, BiPlus, BiMinus } from "react-icons/bi";
import Modal from "../SizeModal/Modal";
import SingleProductSlider from "./SingleProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { addDataToCart, AddToWish, getSingleProd } from "../../Redux/action";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";
import { Alert, Stack } from "@mui/material";
import "./SingleProduct.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProduct() {
  const { singleProd, isLoading, isError, user } = useSelector(
    (state) => state.reducer
  );
  const [visible, setVisible] = useState(false);
  const [accordion, setAccordion] = useState({
    offer: false,
    desc: false,
    return: false,
    delivery: false,
  });
  const [size, setSize] = useState("");

  const notify = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);
  const handleSizeModal = () => {
    setVisible(true);
  };
  const handleOffer = () => {
    setAccordion({ ...accordion, offer: !accordion.offer });
  };
  const handleDesc = () => {
    setAccordion({ ...accordion, desc: !accordion.desc });
  };
  const handleReturn = () => {
    setAccordion({ ...accordion, return: !accordion.return });
  };
  const handleDelivery = () => {
    setAccordion({ ...accordion, delivery: !accordion.delivery });
  };
  const params = useParams();
  const id = params["*"].split("/").slice(-1).join("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSingleProd(id));
  }, []);

  const addTobag = () => {
    if (!user.user) {
      return navigate("/login");
    }
    if (!size) {
      return error("Please choose a size first");
    }
    const userId = user.user._id;
    dispatch(addDataToCart(userId, id, size, error, notify));
  };

  const addToWishlist = () => {
    const userId = user.user._id;
    dispatch(AddToWish(id, userId, error, notify));
  };

  return (
    <>
      {visible && <Modal setVisible={setVisible} />}
      {isLoading && <Loader />}
      {isError && (
        <Stack sx={{ width: "80%", margin: " 2rem auto" }} spacing={2}>
          <Alert severity="error">
            Something went wrong while fetching latest data.
          </Alert>
        </Stack>
      )}
      <div className={styles.container}>
        {singleProd.map((prod) => {
          const discount = Math.floor(
            ((prod.strikedOffprice - prod.price) / prod.strikedOffprice) * 100
          );
          // console.log(prod.description.split("."))
          return (
            <div className={styles.parent} key={prod._id}>
              <div className={styles.parent_left}>
                <SingleProductSlider imgArray={prod.imgArray} />
              </div>
              <div className={styles.parent_right}>
                <div className={styles.product_brand}>{prod.brand}</div>
                <div className={styles.product_name}>{prod.title}</div>
                <div className={styles.product_price}>
                  Rs. {prod.price}{" "}
                  <span className={styles.striked_off}>
                    Rs. {prod.strikedOffprice}
                  </span>{" "}
                  <span className={styles.discount}>{discount}% OFF</span>
                </div>
                <div className={styles.taxes}>inclusive of all taxes</div>
                <div className={styles.product_category}>
                  <div>OVERSIZED FIT</div>
                  <div>DESIGN OF THE DAY</div>
                </div>
                <div className={styles.tribe_member}>
                  Tribe members get an extra discount of Rs. 40 & FREE shipping.{" "}
                  <div>Learn more</div>
                </div>
                <div className={styles.size_wrapper}>
                  <span>SELECT SIZE</span>
                  <span onClick={handleSizeModal}>Size Guide</span>
                </div>
                <div className={styles.size}>
                  {prod.sizes.map((elem, i) => {
                    const check = elem === size;
                    return (
                      <div
                        key={i}
                        onClick={() => setSize(elem)}
                        className={`${check ? "activeProdSize" : ""}`}
                      >
                        {elem}
                      </div>
                    );
                  })}
                </div>
                <div className={styles.cart_menu}>
                  <div
                    onClick={() => {
                      addTobag();
                    }}
                  >
                    <BiShoppingBag />
                    ADD TO BAG
                  </div>
                  <div
                    onClick={() => {
                      if (!user?.user?.email) {
                        return navigate("/login");
                      }
                      addToWishlist();
                    }}
                  >
                    <AiOutlineHeart />
                    WISHLIST
                  </div>
                </div>

                {/* Accorion Section */}
                <div className={styles.product_accordion}>
                  <div
                    className={styles.accordion_header}
                    onClick={handleOffer}
                  >
                    <div>
                      SAVE EXTRA WITH 2 OFFERS
                      <span>{accordion.offer ? <BiMinus /> : <BiPlus />}</span>
                    </div>
                  </div>
                  {accordion.offer && (
                    <div className={styles.accordion_desc}>
                      <div>
                        <span>
                          <img
                            src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                            alt=""
                          />
                        </span>
                        Get Rs.200 instant discount on your first Purchase above
                        Rs.999
                      </div>
                      <div>
                        Coupon Code-
                        <span className={styles.coupon_code}>NEW-200</span>
                      </div>
                      <div>
                        <span>
                          <img
                            src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                            alt=""
                          />
                        </span>
                        Whistles! Get extra 20% cashback on prepaid orders above
                        Rs.499
                      </div>
                      <div>
                        Coupon Code-
                        <span className={styles.coupon_code}>NEW-20</span>
                      </div>
                    </div>
                  )}

                  <div className={styles.accordion_header} onClick={handleDesc}>
                    <div>
                      PRODUCT DESCRIPTION
                      <span>{accordion.desc ? <BiMinus /> : <BiPlus />}</span>
                    </div>
                  </div>
                  {accordion.desc && (
                    <div className={styles.accordion_desc}>
                      <div className={styles.desc_title}>
                        {prod.description.split(".")[0]}
                      </div>
                      <div>
                        Country of Origin
                        <span className={styles.product_category}>India</span>
                      </div>
                      <div>
                        Commodity
                        <span className={styles.desc_commodity}>
                          {prod.description.split(".")[4].split(" - ")[1]}
                        </span>
                      </div>
                      <div className={styles.desc_specifications}>
                        Product Specifications
                      </div>
                      <ul>
                        <li>{prod.description.split(".")[6]}</li>
                        <li>{prod.description.split(".")[7]}</li>
                      </ul>
                    </div>
                  )}

                  <div
                    className={styles.accordion_header}
                    onClick={handleReturn}
                  >
                    <div>
                      15 DAYS RETURN & EXCHANGE
                      <span>{accordion.return ? <BiMinus /> : <BiPlus />}</span>
                    </div>
                  </div>
                  {accordion.return && (
                    <div className={styles.accordion_desc}>
                      <div>
                        Easy returns utp 15 days of delivery. Exchange available
                        on select pincodes.
                      </div>
                    </div>
                  )}

                  <div
                    className={styles.accordion_header}
                    onClick={handleDelivery}
                  >
                    <div>
                      DELIVERY DETAILS
                      <span>
                        {accordion.delivery ? <BiMinus /> : <BiPlus />}
                      </span>
                    </div>
                  </div>
                  {accordion.delivery && (
                    <div className={styles.accordion_desc}>
                      <div className={styles.desc_pincode}>
                        <input type="number" placeholder="Enter Pincode" />
                        <span>Check</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
