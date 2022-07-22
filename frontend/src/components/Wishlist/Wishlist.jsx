import React from "react";
import { useEffect } from "react";
import styles from "./Wishlist.module.css";
import { ImCross } from "react-icons/im";

export default function Wishlist() {
    useEffect(() => {
        document.title = "Wishlist - Bewakoof Online Shopping Store";
    }, []);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.parent}>
                    <div className={styles.header}>Wishlist</div>
                    <div className={styles.wrapper}>
                        <div className={styles.product_card}>
                            <ImCross />
                            <img
                                src="https://images.bewakoof.com/t320/batman-comical-half-sleeve-t-shirt-520741-1658208762-1.jpg"
                                alt=""
                            />
                            <div className={styles.product_title}>
                                Men's Black Batman Cosmical
                            </div>
                            <div className={styles.price}>
                                Rs. 299{" "}
                                <span className={styles.striked_price}>
                                    Rs. 999
                                </span>{" "}
                                <span className={styles.discount}>70% OFF</span>{" "}
                            </div>
                            <div className={styles.tribe_price}>
                                Rs. 279 For TriBe Member
                            </div>
                            <div className={styles.move_to_cart}>
                                MOVE TO BAG
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
