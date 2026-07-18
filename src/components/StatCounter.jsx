import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function StatCounter({ to, suffix = '', duration = 1.4 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setValue(Math.floor(progress * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])

  return (
    <motion.span ref={ref}>{value.toLocaleString()}{suffix}</motion.span>
  )
}
