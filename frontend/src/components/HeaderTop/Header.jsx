import React from "react";
import styles from "./Header.module.css";
import { BsPhone } from "react-icons/bs";

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                <div className={styles.headerLeft}>
                    <div>Offers</div>
                    <div>Fanbook</div>
                    <div>
                        <BsPhone />
                        Download App
                    </div>
                    <div>TriBe Membership</div>
                </div>
                <div className={styles.headerRight}>
                    <div>Contact Us</div>
                    <div>Track Order</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
