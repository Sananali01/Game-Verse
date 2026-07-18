import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import CoverArt from './CoverArt'
import styles from './CartDrawer.module.css'

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, removeFromCart, updateQty, cartTotal } = useShop()

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
          />
          <motion.aside
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
          >
            <div className={styles.header}>
              <h3>Your Cart ({cart.length})</h3>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart"><FiX /></button>
            </div>

            {cart.length === 0 ? (
              <div className={styles.empty}>
                <p>Your cart is empty.</p>
                <Link to="/shop" onClick={() => setCartOpen(false)} className={styles.browseBtn}>Browse the shop</Link>
              </div>
            ) : (
              <>
                <div className={styles.items}>
                  {cart.map((item) => (
                    <div key={item.id} className={styles.item}>
                      <div className={styles.thumb}><CoverArt title={item.title} color={item.color} ratio="1/1" /></div>
                      <div className={styles.info}>
                        <span className={styles.title}>{item.title}</span>
                        <span className={styles.price}>${item.finalPrice}</span>
                        <div className={styles.qty}>
                          <button onClick={() => updateQty(item.id, item.qty - 1)}><FiMinus /></button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)}><FiPlus /></button>
                        </div>
                      </div>
                      <button className={styles.remove} onClick={() => removeFromCart(item.id)} aria-label="Remove">
                        <FiTrash2 />
                      </button>
                    </div>
                  ))}
                </div>
                <div className={styles.footer}>
                  <div className={styles.totalRow}>
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <Link to="/cart" onClick={() => setCartOpen(false)} className={styles.viewCartBtn}>View Cart</Link>
                  <Link to="/checkout" onClick={() => setCartOpen(false)} className={styles.checkoutBtn}>Checkout</Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
