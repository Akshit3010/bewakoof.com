import React from "react";
import styles from "./Navbar.module.css";
import { BsBag, BsHeart, BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.parent}>
                {/* Navbar Left */}
                <div className={styles.Nav_Left}>
                    <img
                        src="https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
                        alt=""
                    />
                    <div className={styles.Left_Wrapper}>
                        <div>MEN</div>
                        <div>WOMEN</div>
                        <div>MOBILE COVERS</div>
                    </div>
                </div>

                {/* Navbar Right */}
                <div className={styles.Nav_Right}>
                    <div className={styles.Right_Input}>
                        <BsSearch />
                        <input
                            type="text"
                            placeholder="Search by product, category or collection"
                        />
                    </div>
                    <div className={styles.Right_Divider}>|</div>
                    <AiOutlineUser />
                    <BsHeart />
                    <BsBag />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
