import { motion } from 'framer-motion'
import styles from './Loader.module.css'

export function PageLoader() {
  return (
    <div className={styles.pageLoader}>
      <motion.span
        className={styles.mark}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
      >
        GV
      </motion.span>
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonMedia} />
      <div className={styles.skeletonLine} style={{ width: '60%' }} />
      <div className={styles.skeletonLine} style={{ width: '40%' }} />
    </div>
  )
}
