import { useEffect, useState } from 'react'
import styles from './CountdownTimer.module.css'

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now())
  return {
    h: Math.floor(diff / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  }
}

export default function CountdownTimer({ hours = 8 }) {
  const [target] = useState(() => Date.now() + hours * 3600000)
  const [time, setTime] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <div className={styles.timer}>
      {[['H', time.h], ['M', time.m], ['S', time.s]].map(([label, val]) => (
        <div key={label} className={styles.unit}>
          <span className={styles.value}>{pad(val)}</span>
          <span className={styles.label}>{label}</span>
        </div>
      ))}
    </div>
  )
}
