import React from "react";
import styles from "./SingleProduct.module.css";

export default function SingleProduct() {
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.parent_left}>Left</div>
                <div className={styles.parent_right}>
                    <div className={styles.product_brand}>Bewakoof</div>
                    <div className={styles.product_name}>
                        Men's Blue Voyage Graphic Printed Oversized T-Shirt
                    </div>
                    <div className={styles.product_price}>
                        Rs. 499{" "}
                        <span className={styles.striked_off}>Rs. 1299</span>{" "}
                        <span className={styles.discount}>61% OFF</span>
                    </div>
                    <div className={styles.taxes}>inclusive of all taxes</div>
                    <div className={styles.product_category}>
                        <div>OVERSIZED FIT</div>
                        <div>DESIGN OF THE DAY</div>
                    </div>
                    <div className={styles.tribe_member}>
                        TriBe members get an extra discount of Rs. 40 & FREE
                        shipping. <div>Learn more</div>
                    </div>
                    <div className={styles.size_wrapper}>
                        <span>SELECT SIZE</span>
                        <span>Size Guide</span>
                    </div>
                    <div className={styles.size}>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>2XL</div>
                        <div>3XL</div>
                    </div>
                    <div className={styles.cart_menu}>
                        <div>ADD TO BAG</div>
                        <div>WISHLIST</div>
                    </div>
                    <div className={styles.product_accordion}>
                        <div className={styles.accordion_header}>
                            SAVE EXTRA WITH 2 OFFERS
                        </div>
                        <div className={styles.accordion_desc}>
                            <div>
                                <span>
                                    <img
                                        src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                                        alt=""
                                    />
                                </span>
                                Get Rs.200 instant discount on your first
                                Purchase above Rs.999
                            </div>
                            <div>
                                Coupon Code-<span className={styles.coupon_code}>NEW-200</span>
                            </div>
                            <div>
                                <span>
                                    <img
                                        src="https://images.bewakoof.com/web/discount-1-2x-1625212811.png"
                                        alt=""
                                    />
                                </span>
                                Whistles! Get extra 20% cashback on prepaid
                                orders above Rs.499
                            </div>
                            <div>
                                Coupon Code-<span className={styles.coupon_code}>NEW-20</span>
                            </div>
                        </div>

                        <div className={styles.accordion_header}>
                            PRODUCT DESCRIPTION
                        </div>
                        <div className={styles.accordion_desc}>
                            <div className={styles.desc_title}>Men's Blue Voyage Graphic Printed Oversized T-Shirt</div>
                            <div>Country of Origin<span className={styles.product_category}>India</span></div>
                            <div>Commodity -<span className={styles.desc_commodity}>Men's T-Shirt</span></div>
                            <div className={styles.desc_specifications}>Product Specifications</div>
                            <ul>
                                <li>Over-sized Fit- Falls loosely on body</li>
                                <li>Single jersey, 100% Cotton Classic, Lightweight jersey</li>
                            </ul>
                        </div>

                        <div className={styles.accordion_header}>
                            15 DAYS RETURN & EXCHANGE
                        </div>
                        <div className={styles.accordion_desc}>
                            <div>Easy returns utp 15 days of delivery. Exchange available on select pincodes.</div>
                        </div>

                        <div className={styles.accordion_header}>
                            DELIVERY DETAILS
                        </div>
                        <div className={styles.accordion_desc}>
                            <div className={styles.desc_pincode}>
                                <input type="number" placeholder="Enter Pincode" />
                                <span>Check</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
