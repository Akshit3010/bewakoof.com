import {
  ADDD_TO_CART,
  FILTER_DATA,
  GET_PRODUCT,
  GET_PRODUCTS,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
} from "./actionTypes";
import axios from "axios";

export const prodReq = () => ({
  type: IS_LOADING,
});

export const prodSuccess = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const singleProdSuccess = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export const prodError = () => ({
  type: IS_ERROR,
});

export const filterData = (payload) => ({
  type: FILTER_DATA,
  payload,
});

export const AddTocart = (payload) => ({
  type: ADDD_TO_CART,
  payload,
});

export const sortData = (payload) => ({
  type: SORT_DATA,
  payload,
});

export const getProducts = (category) => (dispatch) => {
  dispatch(prodReq());
  axios
    .get(`http://localhost:8000/${category}`, { withCredentials: true })
    .then((res) => {
      dispatch(prodSuccess(res.data));
    })
    .catch((err) => dispatch(prodError(err.message)));
};

export const getSingleProd = (id) => (dispatch) => {
  dispatch(prodReq());
  axios
    .get(`http://localhost:8000/product/${id}`, { withCredentials: true })
    .then((res) => {
      dispatch(singleProdSuccess(res.data));
    })
    .catch((err) => dispatch(prodError(err.message)));
};

export const addDataToCart = (id, productId) => (dispatch) => {
  dispatch(prodReq());
  axios
    .post(`http://localhost:8000/users/addToCart/${id}`, productId, {
      withCredentials: true,
    })
    .then((res) => {
      dispatch(singleProdSuccess(res.data));
    })
    .catch((err) => dispatch(prodError(err.message)));
};
