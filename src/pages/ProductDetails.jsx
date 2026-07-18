import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiHeart, FiBarChart2, FiShoppingCart } from 'react-icons/fi'
import { getProductBySlug, allCatalogs } from '../data/catalog'
import { useShop } from '../context/ShopContext'
import CoverArt from '../components/CoverArt'
import RatingStars from '../components/RatingStars'
import ProductCard from '../components/ProductCard'
import NotFound from './NotFound'
import styles from './Detail.module.css'

const typeLabels = {
  accessories: 'Accessories',
  consoles: 'Consoles',
  'gaming-pcs': 'Gaming PCs',
  components: 'Components',
}

export default function ProductDetails({ type }) {
  const { slug } = useParams()
  const product = getProductBySlug(type, slug)
  const [qty, setQty] = useState(1)
  const { addToCart, toggleWishlist, toggleCompare, isInWishlist, isInCompare } = useShop()

  if (!product) return <NotFound />

  const related = (allCatalogs[type] || []).filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
  const inWishlist = isInWishlist(product.id)
  const inCompare = isInCompare(product.id)

  return (
    <>
      <Helmet><title>{product.title} — GameVerse</title></Helmet>
      <div className="container section">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / <Link to={`/${type}`}>{typeLabels[type]}</Link> / {product.title}
        </div>

        <div className={styles.wrap}>
          <div className={styles.gallery}>
            <div className={styles.mainCover}>
              <CoverArt title={product.title} color={product.color} ratio="1/1" />
            </div>
          </div>

          <motion.div className={styles.info} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className={styles.tags}>
              <span className={styles.tag}>{product.category}</span>
            </div>
            <h1 className={styles.title}>{product.title}</h1>
            <RatingStars rating={product.rating} reviews={product.reviews} size={16} />

            <div className={styles.priceRow}>
              <span className={styles.current}>${product.finalPrice}</span>
              {product.discount > 0 && <span className={styles.original}>${product.price}</span>}
              {product.discount > 0 && <span className={styles.discountBadge}>-{product.discount}%</span>}
            </div>

            <p className={styles.desc}>{product.desc}</p>

            <div className={styles.qtyRow}>
              <div className={styles.qtyBox}>
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
            </div>

            <div className={styles.ctaRow}>
              <button className="btn btn-primary" onClick={() => addToCart(product, qty)}>
                <FiShoppingCart /> Add to Cart
              </button>
              <Link to="/checkout" className="btn btn-outline" onClick={() => addToCart(product, qty)}>Buy Now</Link>
              <button
                className={`${styles.iconToggle} ${inWishlist ? styles.active : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
              ><FiHeart /></button>
              <button
                className={`${styles.iconToggle} ${inCompare ? styles.active : ''}`}
                onClick={() => toggleCompare(product)}
                aria-label="Compare"
              ><FiBarChart2 /></button>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className="section-title" style={{ marginBottom: 20 }}>Related Products</h2>
            <div className="grid">
              {related.map((p) => <ProductCard key={p.id} product={p} type={type} />)}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
