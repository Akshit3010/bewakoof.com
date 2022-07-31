import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addDataToCart, getUserWish, wishRemove } from "../../Redux/action";
import styles from "./Wishlist.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import { Alert, Stack } from "@mui/material";
import { TiDelete } from "react-icons/ti";

export default function Wishlist() {
  const { wishList, isLoading, isError } = useSelector(
    (state) => state.reducer
  );

  const notify = (msg) => toast(msg);
  const error = (msg) => toast.error(msg);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    document.title = "Wishlist - Bewakoof Online Shopping Store";
    dispatch(getUserWish(id));
  }, []);

  const moveBag = (productId) => {
    const size = ["M"];
    dispatch(addDataToCart(id, productId, size, error, notify));
    dispatch(wishRemove(productId, id));
  };

  const removeWish = (productId) => {
    dispatch(wishRemove(productId, id));
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.header}>Wishlist</div>
          {isLoading && <Loader />}
          {isError && (
            <Stack sx={{ width: "80%", margin: " 2rem auto" }} spacing={2}>
              <Alert severity="error">
                Something went wrong while fetching latest data.
              </Alert>
            </Stack>
          )}
          {wishList.length === 0 && (
            <h1 className="text-2xl text-center">No item in wishlist</h1>
          )}
          <div className={styles.wrapper}>
            {!isLoading &&
              wishList?.map((item) => {
                const discount = Math.floor(
                  ((item.strikedOffprice - item.price) / item.strikedOffprice) *
                    100
                );
                return (
                  <div className={styles.product_card} key={item._id}>
                    <TiDelete onClick={() => removeWish(item._id)} />
                    <img src={item.imgUrl} alt="" />
                    <div className={styles.product_title}>{item.title}</div>
                    <div className={styles.price}>
                      Rs. {item.price}{" "}
                      <span className={styles.striked_price}>
                        Rs. {item.strikedOffprice}
                      </span>{" "}
                      <span className={styles.discount}>{discount}% OFF</span>{" "}
                    </div>
                    <div className={styles.tribe_price}>
                      Rs. 279 For TriBe Member
                    </div>
                    <div
                      className={styles.move_to_cart}
                      onClick={() => moveBag(item._id)}
                    >
                      MOVE TO BAG
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
