import {
  FILTER_DATA,
  GET_PRODUCT,
  GET_PRODUCTS,
  IS_ERROR,
  IS_LOADING,
  SORT_DATA,
  BAG_DATA,
  GET_TOTAL
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  products: [],
  mybag:[],
  mrp:0,
  bag_discount:0,
  total:0
  singleProd: [],
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
    case GET_PRODUCT: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleProd: payload,
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
      case BAG_DATA: {
      
        return {
          ...state,
          isLoading: false,
          isError: false,
          mybag: payload,
          mrp:payload.reduce((acc,el)=>{
            return acc+(el.strikedOffprice)*(el.qty)
           },0),
           bag_discount:payload.reduce((acc,el)=>{
             return acc+((el.strikedOffprice-el.price)*el.qty)

           },0),
           total:payload.reduce((acc,el)=>{
            return acc+(el.price)*(el.qty)
           },0)
        }
      }
    default: {
      return state;
    }
  }
};
