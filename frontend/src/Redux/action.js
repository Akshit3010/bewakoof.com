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
  let token = localStorage.getItem("jwtoken");

  axios
    .get(`https://bewakoof-com-lemon.vercel.app/prod/${category}`, {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(prodSuccess(res.data));
    })
    .catch((err) => dispatch(prodError(err.message)));
};

export const getUserbag = (id) => (dispatch) => {
  // console.log(id,"id")
  dispatch(prodReq());
  let token = localStorage.getItem("jwtoken");

  axios
    .get(`https://bewakoof-com-lemon.vercel.app/users/cart/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    })
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
  let token = localStorage.getItem("jwtoken");

  axios
    .get(`https://bewakoof-com-lemon.vercel.app/users/wishlisht/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
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
  let token = localStorage.getItem("jwtoken");

  // console.log(typeof qty)
  axios
    .patch(
      `https://bewakoof-com-lemon.vercel.app/users/qty/${id}`,
      {
        productId,
        qty,
      },
      {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }
    )
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
  let token = localStorage.getItem("jwtoken");

  axios
    .patch(
      `https://bewakoof-com-lemon.vercel.app/users/removeProduct/${id}`,
      { productId },
      {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      const data = res.data.productData;
      dispatch(getmybag(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const wishRemove = (productId, id) => (dispatch) => {
  dispatch(prodReq());
  let token = localStorage.getItem("jwtoken");

  axios
    .patch(
      `https://bewakoof-com-lemon.vercel.app/users/removeWish/${id}`,
      { productId },
      {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      const data = res.data.productData;
      dispatch(getWishlist(data));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const AddToWish = (productId, id, error, notify) => (dispatch) => {
  dispatch(prodReq());
  let token = localStorage.getItem("jwtoken");
  axios
    .patch(
      `https://bewakoof-com-lemon.vercel.app/users/addToWishlist/${id}`,
      { productId },
      {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      const data = res.data.productData;
      notify("Added to Wishlist");
      dispatch(getmybag(data));
    })
    .catch((err) => {
      error("Something went wrong");
      dispatch(prodError(err.message));
    });
};

export const orderbag = (id) => (dispatch) => {
  dispatch(prodReq());
  let token = localStorage.getItem("jwtoken");

  axios
    .patch(
      `https://bewakoof-com-lemon.vercel.app/users/order/${id}`,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: token,
        },
      }
    )
    .then((res) => {
      const data = res.data.myorders;
      dispatch(getmybag(data));
      dispatch(getUserbag(id));
    })
    .catch((err) => {
      dispatch(prodError(err.message));
    });
};

export const getSingleProd = (id) => (dispatch) => {
  dispatch(prodReq());
  let token = localStorage.getItem("jwtoken");

  axios
    .get(`https://bewakoof-com-lemon.vercel.app/product/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(singleProdSuccess(res.data));
    })
    .catch((err) => dispatch(prodError(err.message)));
};

export const addDataToCart =
  (id, productId, size, error, notify) => (dispatch) => {
    let token = localStorage.getItem("jwtoken");

    axios
      .patch(
        `https://bewakoof-com-lemon.vercel.app/users/addToCart/${id}`,
        { productId, size },
        {
          withCredentials: true,
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        notify("Added to cart");
        dispatch(getUserbag(id));
      })
      .catch((err) => {
        error("Something went wrong");
        dispatch(prodError(err.message));
      });
  };

export const getUser = () => (dispatch) => {
  console.log("user");
  dispatch(userReq());
  let token = localStorage.getItem("jwtoken");

  axios
    .get("https://bewakoof-com-lemon.vercel.app/users/verify", {
      withCredentials: true,
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(userSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
      dispatch(userError(err.message));
    });
};
