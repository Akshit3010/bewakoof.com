import React from "react";
import Wishlist from "../components/WishlistPage/Wishlist";
import SingleProduct from "../components/SingleProductPage/SingleProduct";
import { Routes, Route } from "react-router-dom";

export default function MainRoute() {
    return (
        <>
            <Routes>
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/singleProduct" element={<SingleProduct />} />
            </Routes>
        </>
    );
}
