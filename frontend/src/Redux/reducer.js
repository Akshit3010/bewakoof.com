import { GET_PRODUCTS, IS_ERROR, IS_LOADING } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        products: [],
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
};
