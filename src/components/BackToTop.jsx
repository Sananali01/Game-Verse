import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import styles from './BackToTop.module.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? scrollTop / height : 0)
      setVisible(scrollTop > 500)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const circumference = 2 * Math.PI * 18

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className={styles.btn}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <svg width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="var(--card-border)" strokeWidth="3" />
            <circle
              cx="22" cy="22" r="18" fill="none" stroke="var(--primary)" strokeWidth="3"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress)}
              strokeLinecap="round"
              transform="rotate(-90 22 22)"
            />
          </svg>
          <FiArrowUp className={styles.icon} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
