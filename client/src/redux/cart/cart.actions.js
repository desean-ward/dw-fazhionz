import CartActionTypes from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const toggleCartHidden = (boolean) =>
  createAction(CartActionTypes.TOGGLE_CART_HIDDEN);

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const updateItem = (item) => ({
  type: CartActionTypes.UPDATE_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
