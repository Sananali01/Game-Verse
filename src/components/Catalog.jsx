import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import { CardSkeleton } from './Loader'
import styles from './Catalog.module.css'

export default function Catalog({ products, type, title, subtitle, eyebrow = 'Catalog' }) {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [activeFilter, setActiveFilter] = useState('All')
  const [sort, setSort] = useState('popular')
  const [loading] = useState(false)

  // Get all genres and categories
  const filters = useMemo(() => {
    return [
      'All',
      ...new Set(
        products
          .map((p) => p.genre || p.category)
          .filter(Boolean)
      ),
    ]
  }, [products])

  const filtered = useMemo(() => {
    let list = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    )

    if (activeFilter !== 'All') {
      list = list.filter(
        (p) => (p.genre || p.category) === activeFilter
      )
    }

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.finalPrice - b.finalPrice)
        break

      case 'price-desc':
        list = [...list].sort((a, b) => b.finalPrice - a.finalPrice)
        break

      case 'rating':
        list = [...list].sort((a, b) => b.rating - a.rating)
        break

      default:
        list = [...list].sort((a, b) => b.reviews - a.reviews)
    }

    return list
  }, [products, query, activeFilter, sort])

  return (
    <div className="container section">
      <div className="section-head">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="section-title">{title}</h1>
          {subtitle && <p className="section-sub">{subtitle}</p>}
        </div>

        <div className={styles.controls}>
          <input
            className={`input ${styles.searchInput}`}
            placeholder="Filter by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className={`input ${styles.sortSelect}`}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {filters.length > 0 && (
        <div className={styles.chips}>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`${styles.chip} ${
                activeFilter === filter ? styles.chipActive : ''
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="empty-state">
          <h3>No results found</h3>
          <p>Try a different search term or filter.</p>
        </div>
      ) : (
        <motion.div
          className="grid"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
        >
          {filtered.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <ProductCard product={product} type={product._type || type} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}