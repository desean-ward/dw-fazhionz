export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: cartItemToAdd.quantity ? cartItemToAdd.quantity : 1,
    },
  ];
};

export const updateItemInCart = (cartItems, cartItemToUpdate) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToUpdate.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToUpdate.id
        ? { ...cartItem, quantity: cartItemToUpdate.quantity }
        : cartItem
    );
  } else console.log("NO ITEM TO UPDATE");
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    if (cartItems.length === 1) return [];

    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
