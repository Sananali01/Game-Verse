import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../data/catalog'
import { games } from '../data/games'
import styles from './Brands.module.css'

export default function CategoriesIndex() {
  return (
    <>
      <Helmet><title>Categories — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Browse</span>
            <h1 className="section-title">Categories</h1>
            <p className="section-sub">20 genres, each with its own curated shelf of games.</p>
          </div>
        </div>
        <div className={styles.grid}>
          {categories.map((cat, i) => {
            const count = games.filter((g) => g.genre === cat || g.tags?.includes(cat)).length
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ y: -4 }}
              >
                <Link to={`/categories/${encodeURIComponent(cat)}`} className={styles.card}>
                  <span className={styles.mark} style={{ background: `hsl(${i * 18} 65% 45%)` }}>{cat[0]}</span>
                  <span>
                    <span className={styles.name}>{cat}</span>
                    <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>{count} title{count !== 1 ? 's' : ''}</div>
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </>
  )
}
