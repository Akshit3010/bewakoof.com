import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUserbag } from "../../Redux/action";
import Menprod from "./Menprod";

const Home = () => {
  const { user } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const query = location?.search?.substring(1);
  useEffect(() => {
    if (query) {
      localStorage.setItem("jwtoken", query);
    }
    dispatch(getUserbag(user.user._id));
  }, [query]);
  return (
    <>
      <Menprod />
    </>
  );
};

export default Home;
