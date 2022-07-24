import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Menprod from "./Menprod";

const Home = () => {
  const location = useLocation();
  const query = location?.search?.substring(1);
  useEffect(() => {
    if (query) {
      localStorage.setItem("jwtoken", query);
    }
  }, [query]);
  return (
    <>
      <Menprod />
    </>
  );
};

export default Home;
