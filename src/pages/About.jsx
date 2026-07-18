import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import styles from './Static.module.css'

const stats = [
  { value: '2.4M+', label: 'Players Served' },
  { value: '1,200+', label: 'Products Listed' },
  { value: '30+', label: 'AAA Titles' },
  { value: '99.9%', label: 'Uptime' },
]

export default function About() {
  return (
    <>
      <Helmet><title>About — GameVerse</title></Helmet>
      <div className="container section">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className={styles.hero}>
          <span className="eyebrow">Our Story</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>Built by players, for players.</h1>
          <p className={styles.lead}>
            GameVerse started as a weekend project between three friends frustrated with clunky storefronts and
            slow checkouts. Today it's a full marketplace for games, hardware, and everything in between —
            still built around the same idea: shopping for gear should feel as good as using it.
          </p>
        </motion.div>

        <div className={styles.statsRow}>
          {stats.map((s) => (
            <div key={s.label} className={`panel ${styles.statCard}`}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.grid2}>
          <div className="panel">
            <h3>What we believe</h3>
            <p className={styles.text}>Fast pages, honest pricing, and a catalog curated by people who actually play these games.</p>
          </div>
          <div className="panel">
            <h3>Where we're headed</h3>
            <p className={styles.text}>Deeper personalization, a creator marketplace, and same-day delivery in more regions.</p>
          </div>
        </div>
      </div>
    </>
  )
}
