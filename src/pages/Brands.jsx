import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { brands } from '../data/catalog'
import styles from './Brands.module.css'

export default function Brands() {
  return (
    <>
      <Helmet><title>Brands — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Trusted Partners</span>
            <h1 className="section-title">Shop by Brand</h1>
            <p className="section-sub">Every major name in gaming hardware, in one storefront.</p>
          </div>
        </div>
        <div className={styles.grid}>
          {brands.map((b, i) => (
            <motion.div
              key={b.id}
              className={styles.card}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
            >
              <span className={styles.mark} style={{ background: b.color }}>{b.name[0]}</span>
              <span className={styles.name}>{b.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
