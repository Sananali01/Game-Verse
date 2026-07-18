import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useShop } from '../context/ShopContext'
import styles from './Checkout.module.css'

const steps = ['Shipping', 'Delivery', 'Review']
const deliveryOptions = [
  { id: 'standard', label: 'Standard (3–5 days)', price: 0 },
  { id: 'express', label: 'Express (1–2 days)', price: 14.99 },
  { id: 'overnight', label: 'Overnight', price: 29.99 },
]

export default function Checkout() {
  const { cart, cartTotal } = useShop()
  const [step, setStep] = useState(0)
  const [sameBilling, setSameBilling] = useState(true)
  const [delivery, setDelivery] = useState('standard')
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', zip: '', country: '' })
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="container section empty-state">
        <h3>Your cart is empty</h3>
        <p style={{ marginBottom: 20 }}>Add something to your cart before checking out.</p>
        <Link to="/shop" className="btn btn-primary">Browse the Shop</Link>
      </div>
    )
  }

  const deliveryFee = deliveryOptions.find((d) => d.id === delivery)?.price || 0
  const total = cartTotal + deliveryFee

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const next = (e) => {
    e.preventDefault()
    if (step < steps.length - 1) setStep((s) => s + 1)
    else navigate('/payment')
  }

  return (
    <>
      <Helmet><title>Checkout — GameVerse</title></Helmet>
      <div className="container section">
        <h1 className="section-title" style={{ marginBottom: 8 }}>Checkout</h1>
        <div className={styles.stepper}>
          {steps.map((s, i) => (
            <div key={s} className={`${styles.step} ${i <= step ? styles.stepActive : ''}`}>
              <span className={styles.stepNum}>{i + 1}</span>{s}
            </div>
          ))}
        </div>

        <div className={styles.layout}>
          <form className="panel" onSubmit={next}>
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                  <h3 style={{ marginBottom: 16 }}>Shipping Address</h3>
                  <div className="input-group"><label>Full Name</label><input required className="input" value={form.name} onChange={update('name')} /></div>
                  <div className="input-group"><label>Email</label><input required type="email" className="input" value={form.email} onChange={update('email')} /></div>
                  <div className="input-group"><label>Address</label><input required className="input" value={form.address} onChange={update('address')} /></div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <div className="input-group" style={{ flex: 1 }}><label>City</label><input required className="input" value={form.city} onChange={update('city')} /></div>
                    <div className="input-group" style={{ flex: 1 }}><label>ZIP</label><input required className="input" value={form.zip} onChange={update('zip')} /></div>
                  </div>
                  <div className="input-group"><label>Country</label><input required className="input" value={form.country} onChange={update('country')} /></div>
                  <label className={styles.checkboxRow}>
                    <input type="checkbox" checked={sameBilling} onChange={(e) => setSameBilling(e.target.checked)} />
                    Billing address same as shipping
                  </label>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                  <h3 style={{ marginBottom: 16 }}>Delivery Method</h3>
                  {deliveryOptions.map((d) => (
                    <label key={d.id} className={styles.deliveryOption}>
                      <input type="radio" name="delivery" checked={delivery === d.id} onChange={() => setDelivery(d.id)} />
                      <span>{d.label}</span>
                      <strong>{d.price === 0 ? 'Free' : `$${d.price}`}</strong>
                    </label>
                  ))}
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}>
                  <h3 style={{ marginBottom: 16 }}>Review Your Order</h3>
                  <p className={styles.reviewLine}><strong>Ship to:</strong> {form.name || '—'}, {form.address || '—'}, {form.city || '—'} {form.zip || ''}</p>
                  <p className={styles.reviewLine}><strong>Delivery:</strong> {deliveryOptions.find((d) => d.id === delivery)?.label}</p>
                  <p className={styles.reviewLine}><strong>Items:</strong> {cart.length} product{cart.length !== 1 ? 's' : ''}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className={styles.formNav}>
              {step > 0 && <button type="button" className="btn btn-outline" onClick={() => setStep((s) => s - 1)}>Back</button>}
              <button type="submit" className="btn btn-primary">{step === steps.length - 1 ? 'Continue to Payment' : 'Next'}</button>
            </div>
          </form>

          <aside className={`panel ${styles.summary}`}>
            <h3 style={{ marginBottom: 14 }}>Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className={styles.summaryRow}>
                <span>{item.title} × {item.qty}</span>
                <span>${(item.qty * item.finalPrice).toFixed(2)}</span>
              </div>
            ))}
            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
