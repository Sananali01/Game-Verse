import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaGooglePay, FaApplePay,
  FaCcStripe, FaMoneyBillWave, FaGift, FaBitcoin, FaUniversity, FaCreditCard,
} from 'react-icons/fa'
import { useShop } from '../context/ShopContext'
import styles from './Payment.module.css'

const methods = [
  { id: 'visa', label: 'Visa', icon: FaCcVisa, desc: 'Pay securely with your Visa card.' },
  { id: 'mastercard', label: 'MasterCard', icon: FaCcMastercard, desc: 'Pay securely with your MasterCard.' },
  { id: 'amex', label: 'American Express', icon: FaCcAmex, desc: 'Pay with Amex, earn your usual rewards.' },
  { id: 'paypal', label: 'PayPal', icon: FaCcPaypal, desc: 'Checkout fast with your PayPal balance or card.' },
  { id: 'googlepay', label: 'Google Pay', icon: FaGooglePay, desc: 'One-tap checkout with Google Pay.' },
  { id: 'applepay', label: 'Apple Pay', icon: FaApplePay, desc: 'Pay with Face ID or Touch ID.' },
  { id: 'stripe', label: 'Stripe', icon: FaCcStripe, desc: 'Card payments processed securely by Stripe.' },
  { id: 'card', label: 'Debit / Credit Card', icon: FaCreditCard, desc: 'Any major debit or credit card.' },
  { id: 'banktransfer', label: 'Bank Transfer', icon: FaUniversity, desc: 'Direct transfer from your bank account.' },
  { id: 'cod', label: 'Cash on Delivery', icon: FaMoneyBillWave, desc: 'Pay in cash when your order arrives.' },
  { id: 'giftcard', label: 'Gift Card', icon: FaGift, desc: 'Redeem a GameVerse gift card balance.' },
  { id: 'crypto', label: 'Crypto (UI only)', icon: FaBitcoin, desc: 'Pay with crypto — demo option, not processed.' },
]

export default function Payment() {
  const [selected, setSelected] = useState('visa')
  const { cartTotal, clearCart } = useShop()
  const navigate = useNavigate()

  const confirm = () => {
    clearCart()
    navigate('/order-success')
  }

  return (
    <>
      <Helmet><title>Payment — GameVerse</title></Helmet>
      <div className="container section">
        <h1 className="section-title" style={{ marginBottom: 8 }}>Payment Method</h1>
        <p className="section-sub" style={{ marginBottom: 28 }}>Choose how you'd like to pay. All methods are encrypted end-to-end.</p>

        <div className={styles.grid}>
          {methods.map((m) => {
            const Icon = m.icon
            const active = selected === m.id
            return (
              <motion.button
                key={m.id}
                className={`${styles.card} ${active ? styles.active : ''}`}
                onClick={() => setSelected(m.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={styles.icon} />
                <span className={styles.label}>{m.label}</span>
                <span className={styles.desc}>{m.desc}</span>
                <span className={styles.secure}>🔒 Secure</span>
              </motion.button>
            )
          })}
        </div>

        <div className={styles.footer}>
          <span className={styles.total}>Total: ${cartTotal.toFixed(2)}</span>
          <button className="btn btn-primary" onClick={confirm}>Confirm & Pay</button>
        </div>
      </div>
    </>
  )
}
