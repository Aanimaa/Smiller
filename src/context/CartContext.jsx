import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('smiler_cart')
      return raw ? JSON.parse(raw) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('smiler_cart', JSON.stringify(cartItems))
    } catch (e) {}
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      // use id if present, otherwise fallback to title
      const key = product.id ?? product.title
      const existing = prev.find((p) => (p.id ?? p.title) === key)
      if (existing) {
        return prev.map((p) => ((p.id ?? p.title) === key ? { ...p, qty: (p.qty || 1) + 1 } : p))
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (key) => {
    setCartItems((prev) => prev.filter((p) => (p.id ?? p.title) !== key))
  }

  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

