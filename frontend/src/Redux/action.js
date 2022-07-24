import {
  ADDD_TO_CART,
  FILTER_DATA,
  GET_PRODUCT,
  GET_PRODUCTS,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
  BAG_DATA,
  GET_TOTAL,
  USER_REQ,
  GET_USER,
  USER_FAILURE,
  WISHLIST_DATA,
} from "./actionTypes";
import axios from "axios";

export const prodReq = () => ({
  type: IS_LOADING,
});
export const userReq = () => ({
  type: USER_REQ,
});

export const prodSuccess = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});

export const userSuccess = (payload) => ({
  type: GET_USER,
  payload,
});

export const userError = () => ({
  type: USER_FAILURE,
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

export const getmybag = (payload) => ({
  type: BAG_DATA,
  payload,
});

export const getWishlist = (payload) => ({
  type: WISHLIST_DATA,
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

export const getUserbag = (id) => (dispatch) => {
  // console.log(id,"id")
  dispatch(prodReq());
  axios
    .get(`http://localhost:8000/users/cart/${id}`)
    .then((res) => {
      const data = res.data.productData;

      // console.log(data,"data")
      dispatch(getmybag(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const getUserWish = (id) => (dispatch) => {
  console.log(id, "id");
  dispatch(prodReq());
  axios
    .get(`http://localhost:8000/users/wishlisht/${id}`, {
      withCredentials: true,
    })
    .then((res) => {
      const data = res.data.productData;

      console.log(data, "data");
      dispatch(getWishlist(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const changeQty = (productId, qty, id) => (dispatch) => {
  dispatch(prodReq());
  console.log(productId, qty, id);

  // console.log(typeof qty)
  axios
    .patch(`http://localhost:8000/users/qty/${id}`, { productId, qty })
    .then((res) => {
      const data = res.data.productData;
      console.log(data, "data");
      dispatch(getmybag(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const doRemove = (productId, id) => (dispatch) => {
  dispatch(prodReq());

  axios
    .patch(`http://localhost:8000/users/removeProduct/${id}`, { productId })
    .then((res) => {
      const data = res.data.productData;
      dispatch(getmybag(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const AddToWish = (productId, id) => (dispatch) => {
  dispatch(prodReq());

  axios
    .patch(
      `http://localhost:8000/users/addToWishlist/${id}`,
      { productId },
      { withCredentials: true }
    )
    .then((res) => {
      const data = res.data.productData;
      dispatch(getmybag(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const orderbag = (id) => (dispatch) => {
  dispatch(prodReq());

  axios
    .patch(`http://localhost:8000/users/order/${id}`)
    .then((res) => {
      const data = res.data.myorders;
      dispatch(getmybag(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
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
  axios
    .patch(
      `http://localhost:8000/users/addToCart/${id}`,
      { productId },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => dispatch(prodError(err.message)));
};

export const getUser = () => (dispatch) => {
  console.log("user");
  dispatch(userReq());
  axios
    .get("http://localhost:8000/users/verify", { withCredentials: true })
    .then((res) => {
      dispatch(userSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(userError(err.message));
    });
};
