import { createContext, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ShopContext = createContext(null)

export function ShopProvider({ children }) {
  const [cart, setCart] = useLocalStorage('gv-cart', [])
  const [wishlist, setWishlist] = useLocalStorage('gv-wishlist', [])
  const [compare, setCompare] = useLocalStorage('gv-compare', [])
  const [cartOpen, setCartOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { ...product, qty }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => setCart((prev) => prev.filter((i) => i.id !== id))

  const updateQty = (id, qty) =>
    setCart((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i)))

  const clearCart = () => setCart([])

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) return prev.filter((i) => i.id !== product.id)
      return [...prev, product]
    })
  }

  const toggleCompare = (product) => {
    setCompare((prev) => {
      const exists = prev.find((i) => i.id === product.id)
      if (exists) return prev.filter((i) => i.id !== product.id)
      if (prev.length >= 4) return prev
      return [...prev, product]
    })
  }

  const isInWishlist = (id) => wishlist.some((i) => i.id === id)
  const isInCompare = (id) => compare.some((i) => i.id === id)

  const cartCount = useMemo(() => cart.reduce((sum, i) => sum + i.qty, 0), [cart])
  const cartTotal = useMemo(() => cart.reduce((sum, i) => sum + i.qty * i.price, 0), [cart])

  const value = {
    cart, wishlist, compare,
    addToCart, removeFromCart, updateQty, clearCart,
    toggleWishlist, toggleCompare, isInWishlist, isInCompare,
    cartCount, cartTotal,
    cartOpen, setCartOpen, wishlistOpen, setWishlistOpen,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export const useShop = () => useContext(ShopContext)
