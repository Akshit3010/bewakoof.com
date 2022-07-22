import React from "react";
import styles from "./Modal.module.css";
import { ImCross } from "react-icons/im";

export default function Modal({ setVisible }) {
    return (
        <aside className={styles.modal_container}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h4>Size Guide</h4>
                    <ImCross onClick={() => setVisible(false)} />
                </div>
                <img
                    src="https://images.bewakoof.com/sizeguide/men-half-sleeves-tshirts-1484025744-1623075051.jpg"
                    alt=""
                />
                <table>
                    <thead>
                        <tr>
                            <td>Size</td>
                            <td>Chest (in Inch)</td>
                            <td>Front Length (in Inch)</td>
                            <td>Sleeve Length (in Inch)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>S</td>
                            <td>42.0</td>
                            <td>29.0</td>
                            <td>9.75</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>44.0</td>
                            <td>29.75</td>
                            <td>10.0</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>46.0</td>
                            <td>30.5</td>
                            <td>10.25</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>48.0</td>
                            <td>31.25</td>
                            <td>10.5</td>
                        </tr>
                        <tr>
                            <td>2XL</td>
                            <td>50.0</td>
                            <td>32.0</td>
                            <td>10.75</td>
                        </tr>
                        <tr>
                            <td>3XL</td>
                            <td>52.0</td>
                            <td>32.75</td>
                            <td>11.0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </aside>
    );
}
