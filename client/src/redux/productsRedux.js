import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getSingleProduct = ({ products }) => products.singleProduct;
export const getProductsCounter = ({ products }) => products.amount;
export const getRequest = ({ products }) => products.request;
export const getPages = ({ products }) =>
  Math.ceil(products.amount / products.productsPerPage);
export const getPresentPage = ({ products }) => products.presentPage;
export const getCartProducts = ({ products }) => {
  return products.cart.map(cartProduct => {
    return {
      product: products.data.find(item => item.id === cartProduct.id),
      amount: cartProduct.amount
    };
  });
};
export const getProductsSort = ({ products }) => {
  const sortProducts = [...products.data].sort((a, b) => {
    if (a[products.key] > b[products.key])
      return products.direction === 'asc' ? 1 : -1;
    if (a[products.key] < b[products.key])
      return products.direction === 'asc' ? -1 : 1;
    return 0;
  });
  return sortProducts;
};

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTIONS */
export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCT_PAGE = createActionName('LOAD_PRODUCT_PAGE');
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const SORT = createActionName('SORT');

/* ACTION CREATORS */
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProductByPage = payload => ({
  payload,
  type: LOAD_PRODUCT_PAGE
});
export const loadSingleProduct = payload => ({
  payload,
  type: LOAD_SINGLE_PRODUCT
});
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const sort = payload => ({ payload, type: SORT });

/* INITIAL STATE */
const initialState = {
  data: [],
  singleProduct: {},
  amount: 0,
  productsPerPage: 6,
  presentPage: 1,
  key: '',
  direction: '',
  request: {
    pending: false,
    error: null,
    success: null
  },
  cart: [{ product: 1, amount: 2 }]
};

/* THUNKS */
export const loadProductsRequest = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSingleProductRequest = id => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products/${id}`);
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSingleProduct(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadProductByPageRequest = (page, productsPerPage) => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;
      let res = await axios.get(
        `${API_URL}/products/range/${startAt}/${limit}`
      );
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      const payload = {
        product: res.data.product,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page
      };
      dispatch(loadProductByPage(payload));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case LOAD_PRODUCT_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.product]
      };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: null, success: null }
      };
    case END_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: true }
      };
    case ERROR_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: action.error, success: false }
      };
    case RESET_REQUEST:
      return {
        ...statePart,
        request: { pending: false, error: null, success: null }
      };
    case SORT:
      return {
        ...statePart,
        key: action.payload.key,
        direction: action.payload.direction
      };
    default:
      return statePart;
  }
}
