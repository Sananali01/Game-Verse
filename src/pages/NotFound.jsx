import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page Not Found — GameVerse</title></Helmet>
      <div className={`container ${styles.wrap}`}>
        <motion.h1
          className={styles.code}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          404
        </motion.h1>
        <h2>This level doesn't exist yet</h2>
        <p>The page you're looking for was moved, removed, or never spawned.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </>
  )
}
