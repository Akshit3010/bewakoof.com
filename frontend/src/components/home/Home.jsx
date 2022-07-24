import React from "react";
import { useLocation } from "react-router-dom";
import Menprod from "./Menprod";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Menprod />
    </>
  );
};

export default Home;
