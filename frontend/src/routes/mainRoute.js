import React from "react";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import { Cart } from "../components/Cart";
import Products from "../pages/Products";
import { Paymentpage } from "../pages/Payment/Paymentpage";
import Login from "../pages/Login";
import Error from "../pages/Error";

export default function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/products/*" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}
