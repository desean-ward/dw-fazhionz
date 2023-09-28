// import SHOP_DATA from './shop.data.js'

import SHOP_ACTION_TYPES from "./shop.types";

const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

const shopReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SHOP_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    case SHOP_ACTION_TYPES.SET_PRODUCT_DESCRIPTIONS:
      return {
        ...state,
        productDescriptions: payload,
      };
    case SHOP_ACTION_TYPES.GET_PRODUCT_DESCRIPTION:
      try {
        console.log("INSIDE REDUCER");
        const name = payload;

        const matchingDescription = state.productDescriptions.find((prod) =>
          prod.description.toLowerCase().includes(name)
        );
        if (matchingDescription) {
          return matchingDescription.description;
        }
      } catch (err) {
        if (!err.message.includes("undefined"))
          console.log("There was an error fetching the description: " + err);
        console.loc("Error feteching the description", err);
      }
      break;
    default:
      return state;
  }
};

export default shopReducer;
