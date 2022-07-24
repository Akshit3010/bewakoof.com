import React from "react";
import { useLocation } from "react-router-dom";
import Menprod from "./Menprod";

const Home = () => {
  const location = useLocation();
  const query = location?.search?.substring(1);
  localStorage.setItem("jwtoken", query);
  return (
    <>
      <Menprod />
    </>
  );
};

export default Home;
