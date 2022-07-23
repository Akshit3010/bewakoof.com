import {
  FILTER_DATA,
  GET_PRODUCTS,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
} from "./actionTypes";

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
    case FILTER_DATA:
      return {
        ...state,
        products: state.products.filter((item) => {
          if (payload.sizes) {
            return item.sizes.includes(payload.sizes);
          } else if (payload.color) {
            return item.title.toLowerCase().includes(payload.color);
          }
          return [];
        }),
      };
    case SORT_DATA:
      return {
        ...state,
        products: state.products.sort((a, b) => {
          if (payload === "l2h") {
            return Number(a.price) - Number(b.price);
          } else if (payload === "h2l") {
            return Number(b.price) - Number(a.price);
          } else if (payload === "new") {
            return new Date(b.createdAt) - new Date(a.createdAt);
          } else {
            return b.rating - a.rating;
          }
        }),
      };
    default: {
      return state;
    }
  }
};
