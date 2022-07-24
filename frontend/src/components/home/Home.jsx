import React from "react";
import { useParams } from "react-router-dom";
import Menprod from "./Menprod";

const Home = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Menprod />
    </>
  );
};

export default Home;
