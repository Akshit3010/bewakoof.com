import React from "react";
import { useEffect } from "react";
import Header from "../HeaderTop/Header";
import Navbar from "../Navbar/Navbar";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
    useEffect(() => {
        document.title = "Wishlist - Bewakoof Online Shopping Store";
    }, []);
    return (
        <>
            <Header />
            <Navbar />
            <div className={styles.container}>
                <div className={styles.parent}>Wishlist</div>
            </div>
        </>
    );
}
