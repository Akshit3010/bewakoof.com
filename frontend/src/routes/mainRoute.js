import React from "react";
import { Routes, Route } from "react-router-dom";
import WishlistPage from "../pages/WishlistPage/WishlistPage";
import SingleProductPage from "../pages/SingleProductPage/SingleProductPage";
import { Cart } from "../components/Cart";
import Products from "../pages/Products";
import { Paymentpage } from "../pages/Payment/Paymentpage";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import Home from "../components/home/Home";
import Womenprod from "../components/home/Womenprod";
import Homeprod from "../components/home/Homeprod";
import Myaccount from "../pages/MyAccount/Myaccount";

export default function MainRoute() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist/:id" element={<WishlistPage />} />
        <Route path="/single-product" element={<SingleProductPage />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route patch="/account" element={<Myaccount />} />
        <Route path="/:id" element={<Products />} />
        <Route path="/payment/:id" element={<Paymentpage />} />
        <Route path="/products/*" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/women" element={<Womenprod />} />
        <Route path="/accessories" element={<Homeprod />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}
