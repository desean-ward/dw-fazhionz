import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import SHOP_ACTION_TYPES from "./shop.types";

export const setCategories = (categoriesArray) =>
  createAction(SHOP_ACTION_TYPES.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () =>
  createAction(SHOP_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(SHOP_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed = (error) =>
  createAction(SHOP_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  await dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};

export const setProductDescriptions = (productDescriptions) =>
  createAction(SHOP_ACTION_TYPES.SET_PRODUCT_DESCRIPTIONS, productDescriptions);

export const setViewProduct = (product) =>
  createAction(SHOP_ACTION_TYPES.SET_VIEW_PRODUCT, product);

export const getProductDescription = (name) =>
  createAction(SHOP_ACTION_TYPES.GET_PRODUCT_DESCRIPTION, name);
