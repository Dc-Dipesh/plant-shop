"use client"
import React, { createContext, useState, useContext } from "react"

// Interface for product type
interface IProduct {
  image: string
  name?: string
  price?: number
  alt: string
  slug: string
}

// Interface for cart item type
interface ICartItem extends IProduct {
  quantity: number
}

// CartContext interface
interface CartContextProps {
  items: ICartItem[]
  addItem: (product: IProduct) => void
  removeItem: (slug: string) => void
  getTotalPrice: () => number
  incrementItem: (slug: string) => void
  decrementItem: (slug: string) => void
}

// Create the CartContext
const CartContext = createContext<CartContextProps>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  getTotalPrice: () => 0,
  incrementItem: () => {},
  decrementItem: () => {},
})

// Custom hook to use the CartContext
export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}

// CartProvider component to wrap your app
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const addItem = (product: IProduct) => {
    const existingItem = cartItems.find((item) => item.slug === product.slug)

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const removeItem = (slug: string) => {
    setCartItems(cartItems.filter((item) => item.slug !== slug))
  }
  const incrementItem = (slug: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }
  const decrementItem = (slug: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity - 1 } : item
      )
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((acc, curr) => acc + curr.price! * curr.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addItem,
        removeItem,
        getTotalPrice,
        decrementItem,
        incrementItem,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
