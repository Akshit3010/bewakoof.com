import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserWish } from "../../Redux/action";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
  const { wishList, isLoading, isError } = useSelector(
    (state) => state.reducer
  );

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    document.title = "Wishlist - Bewakoof Online Shopping Store";
    dispatch(getUserWish(id));
  }, []);

  console.log(wishList);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.header}>Wishlist</div>
          <div className={styles.wrapper}>
            {wishList?.map((item) => {
              const discount = Math.floor(
                ((item.strikedOffprice - item.price) / item.strikedOffprice) *
                  100
              );
              return (
                <div className={styles.product_card} key={item._id}>
                  {/* <ImCross /> */}
                  <i className="fa-solid fa-xmark"></i>
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
                  <div className={styles.move_to_cart}>MOVE TO BAG</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
