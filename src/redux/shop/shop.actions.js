import { createCacheKeyComparator } from "reselect/es/defaultMemoize";
import { createAction } from "../../utils/reducer/reducer.utils";
import SHOP_ACTION_TYPES from "./shop.types";

export const setCategoriesMap = (categoriesMap) =>
  createAction(SHOP_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const setProductDescriptions = (productDescriptions) =>
  createAction(SHOP_ACTION_TYPES.SET_PRODUCT_DESCRIPTIONS, productDescriptions);

export const getProductDescription = (name) =>
  createAction(SHOP_ACTION_TYPES.GET_PRODUCT_DESCRIPTION, name);
