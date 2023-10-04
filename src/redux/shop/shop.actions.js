import { createAction } from "../../utils/reducer/reducer.utils";

import SHOP_ACTION_TYPES from "./shop.types";

export const setCategories = (categoriesArray) =>
  createAction(SHOP_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const setProductDescriptions = (productDescriptions) =>
  createAction(SHOP_ACTION_TYPES.SET_PRODUCT_DESCRIPTIONS, productDescriptions);

export const setViewProduct = (product) =>
  createAction(SHOP_ACTION_TYPES.SET_VIEW_PRODUCT, product);

export const getProductDescription = (name) =>
  createAction(SHOP_ACTION_TYPES.GET_PRODUCT_DESCRIPTION, name);
