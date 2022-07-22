import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Products />} />
      </Routes>
    </>
  );
};

export default MainRoute;
