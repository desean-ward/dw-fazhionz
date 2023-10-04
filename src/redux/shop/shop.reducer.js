// import SHOP_DATA from './shop.data.js'

import SHOP_ACTION_TYPES from "./shop.types";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

const shopReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case SHOP_ACTION_TYPES.SET_PRODUCT_DESCRIPTIONS:
      return {
        ...state,
        productDescriptions: payload,
      };
    case SHOP_ACTION_TYPES.SET_VIEW_PRODUCT:
      return {
        ...state,
        product: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
