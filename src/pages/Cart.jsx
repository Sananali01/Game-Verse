import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { FiMinus, FiPlus, FiTrash2, FiTag } from 'react-icons/fi'
import { useShop } from '../context/ShopContext'
import CoverArt from '../components/CoverArt'
import styles from './Cart.module.css'

const VALID_CODES = { GAMEVERSE10: 0.1, LEVELUP20: 0.2 }

export default function Cart() {
  const { cart, removeFromCart, updateQty, cartTotal } = useShop()
  const [coupon, setCoupon] = useState('')
  const [applied, setApplied] = useState(null)
  const navigate = useNavigate()

  const discount = applied ? cartTotal * VALID_CODES[applied] : 0
  const shipping = cart.length === 0 ? 0 : cartTotal > 100 ? 0 : 8.99
  const tax = (cartTotal - discount) * 0.08
  const total = cartTotal - discount + shipping + tax

  const applyCoupon = (e) => {
    e.preventDefault()
    const code = coupon.trim().toUpperCase()
    setApplied(VALID_CODES[code] ? code : null)
  }

  return (
    <>
      <Helmet><title>Cart — GameVerse</title></Helmet>
      <div className="container section">
        <h1 className="section-title" style={{ marginBottom: 28 }}>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-state">
            <h3>Your cart is empty</h3>
            <p style={{ marginBottom: 20 }}>Add a few games or some gear to get started.</p>
            <Link to="/shop" className="btn btn-primary">Browse the Shop</Link>
          </div>
        ) : (
          <div className={styles.layout}>
            <div className={styles.items}>
              {cart.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.thumb}><CoverArt title={item.title} color={item.color} ratio="1/1" /></div>
                  <div className={styles.info}>
                    <span className={styles.title}>{item.title}</span>
                    <span className={styles.unit}>${item.finalPrice} each</span>
                  </div>
                  <div className={styles.qty}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)}><FiMinus /></button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}><FiPlus /></button>
                  </div>
                  <span className={styles.lineTotal}>${(item.qty * item.finalPrice).toFixed(2)}</span>
                  <button className={styles.remove} onClick={() => removeFromCart(item.id)} aria-label="Remove"><FiTrash2 /></button>
                </div>
              ))}
            </div>

            <aside className={`panel ${styles.summary}`}>
              <h3 style={{ marginBottom: 16 }}>Order Summary</h3>
              <form className={styles.coupon} onSubmit={applyCoupon}>
                <FiTag />
                <input
                  className="input"
                  placeholder="Coupon code (try GAMEVERSE10)"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button type="submit" className="btn btn-outline">Apply</button>
              </form>
              {applied && <div className={styles.appliedTag}>Code {applied} applied — {VALID_CODES[applied] * 100}% off</div>}

              <div className={styles.row}><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              {discount > 0 && <div className={styles.row}><span>Discount</span><span>-${discount.toFixed(2)}</span></div>}
              <div className={styles.row}><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div className={styles.row}><span>Estimated Tax</span><span>${tax.toFixed(2)}</span></div>
              <div className={`${styles.row} ${styles.totalRow}`}><span>Total</span><span>${total.toFixed(2)}</span></div>

              <p className={styles.delivery}>Estimated delivery: 3–5 business days</p>
              <button className="btn btn-primary btn-block" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </aside>
          </div>
        )}
      </div>
    </>
  )
}
