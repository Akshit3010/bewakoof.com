import React from "react";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import { Cart } from "../components/Cart";
import Products from "../pages/Products";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/single-product" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Products />} />
      </Routes>
    </>
  );
}
