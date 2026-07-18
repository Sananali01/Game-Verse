import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiPackage, FiCheckCircle, FiTruck, FiHome } from 'react-icons/fi'
import styles from './OrderTracking.module.css'

const stages = [
  { label: 'Order Placed', icon: FiCheckCircle },
  { label: 'Processing', icon: FiPackage },
  { label: 'Shipped', icon: FiTruck },
  { label: 'Delivered', icon: FiHome },
]

export default function OrderTracking() {
  const [orderId, setOrderId] = useState('')
  const [tracking, setTracking] = useState(null)

  const track = (e) => {
    e.preventDefault()
    setTracking({ id: orderId || 'GV-482910', currentStage: 2 })
  }

  return (
    <>
      <Helmet><title>Order Tracking — GameVerse</title></Helmet>
      <div className="container section">
        <h1 className="section-title" style={{ marginBottom: 8 }}>Track Your Order</h1>
        <p className="section-sub" style={{ marginBottom: 28 }}>Enter your order ID to see live status.</p>

        <form className={styles.form} onSubmit={track}>
          <input className="input" placeholder="e.g. GV-482910" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
          <button type="submit" className="btn btn-primary">Track</button>
        </form>

        {tracking && (
          <div className={`panel ${styles.panel}`}>
            <div className={styles.orderId}>Order <strong>{tracking.id}</strong></div>
            <div className={styles.stages}>
              {stages.map((s, i) => {
                const Icon = s.icon
                const done = i <= tracking.currentStage
                return (
                  <div key={s.label} className={styles.stage}>
                    <motion.div
                      className={`${styles.stageIcon} ${done ? styles.done : ''}`}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Icon />
                    </motion.div>
                    <span>{s.label}</span>
                    {i < stages.length - 1 && <div className={`${styles.line} ${i < tracking.currentStage ? styles.done : ''}`} />}
                  </div>
                )
              })}
            </div>
            <p className={styles.eta}>Estimated delivery: 2 business days</p>
          </div>
        )}
      </div>
    </>
  )
}
