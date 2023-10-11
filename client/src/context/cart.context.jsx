import { createContext, useState, useEffect } from 'react'
//import { addItemToCart } from '../redux/cart/cart.utils'


export const CartContext = createContext({
    cartItems: [],
    setCartItems: () => {},
    isCartOpen: false,
    setCartOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    clearCart: () => {}
})

const itemToAdd = (cartItems, itemToAdd) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    )

    if(existingItem) {
       return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem  
        )
    }

    return [ ...cartItems, { ...itemToAdd, quantity: 1 }]
}

const itemToRemove = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
      );
  
    if(existingItem) {
        if (existingItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
        }

        return cartItems.map(cartItem =>
            cartItem.id === itemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem  
        )
    }
}

const itemToDelete = (cartItems, itemToDelete) => {
    console.log("DELETING... " + JSON.stringify(itemToDelete))
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToDelete.id
      );
  
      if (existingCartItem) {
        return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id)
      }
      console.log("CART AFTER DELETION: " + JSON.stringify(cartItems))

      return cartItems.map(cartItem =>
        cartItem.id === itemToDelete.id
        ? { ...cartItem, quantity: 0 }
        : cartItem  
    )

}


export const CartProvider = ({ children }) => {
    const [ cartItems, setCartItems ] = useState([])
    const [ isCartOpen, setIsCartOpen ] = useState(false)

    const addItemToCart = (cartItem) => {
       setCartItems(itemToAdd(cartItems, cartItem))
    }

    const removeItemFromCart = (cartItem) => {
        setCartItems(itemToRemove(cartItems, cartItem))
    }

    const deleteItemFromCart = (cartItem) => {
        setCartItems(itemToDelete(cartItems, cartItem))
    }

    const clearCart = () => {
        setCartItems([])
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, setCartItems, addItemToCart, removeItemFromCart, deleteItemFromCart, clearCart} 

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
}