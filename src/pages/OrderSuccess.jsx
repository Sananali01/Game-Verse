import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import styles from './OrderSuccess.module.css'

const orderId = `GV-${Math.floor(100000 + Math.random() * 900000)}`

export default function OrderSuccess() {
  return (
    <>
      <Helmet><title>Order Confirmed — GameVerse</title></Helmet>
      <div className="container section">
        <motion.div
          className={styles.wrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
          >
            <FiCheckCircle className={styles.icon} />
          </motion.div>
          <h1 className="section-title">Order Confirmed!</h1>
          <p className={styles.text}>Thanks for shopping with GameVerse. A confirmation email is on its way.</p>
          <div className={styles.orderId}>Order ID: <strong>{orderId}</strong></div>
          <div className={styles.actions}>
            <Link to="/order-tracking" className="btn btn-primary">Track Your Order</Link>
            <Link to="/shop" className="btn btn-outline">Continue Shopping</Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}
