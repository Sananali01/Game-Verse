import { motion } from 'framer-motion'
import { FiHeart, FiShoppingCart, FiBarChart2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import CoverArt from './CoverArt'
import RatingStars from './RatingStars'
import { useShop } from '../context/ShopContext'
import styles from './ProductCard.module.css'

export default function ProductCard({ product, type = 'games' }) {
  const { addToCart, toggleWishlist, toggleCompare, isInWishlist, isInCompare } = useShop()
  const inWishlist = isInWishlist(product.id)
  const inCompare = isInCompare(product.id)
  const hasDiscount = product.discount > 0
  const link = `/${product._type || type}/${product.slug}`

  return (
    <motion.article
      className={styles.card}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <Link to={link} className={styles.mediaLink}>
        <CoverArt title={product.title} color={product.color}   cover={product.cover} />
        {hasDiscount && <span className={styles.badge}>-{product.discount}%</span>}
      </Link>

      <div className={styles.actions}>
        <button
          className={`${styles.iconBtn} ${inWishlist ? styles.active : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label="Toggle wishlist"
          title="Wishlist"
        >
          <FiHeart />
        </button>
        <button
          className={`${styles.iconBtn} ${inCompare ? styles.active : ''}`}
          onClick={() => toggleCompare(product)}
          aria-label="Toggle compare"
          title="Compare"
        >
          <FiBarChart2 />
        </button>
      </div>

      <div className={styles.body}>
        {product.genre && <span className={styles.tag}>{product.genre}</span>}
        {product.category && <span className={styles.tag}>{product.category}</span>}
        <Link to={link}><h3 className={styles.title}>{product.title}</h3></Link>
        <RatingStars rating={product.rating} reviews={product.reviews} size={12} />
        <div className={styles.footer}>
          <div className={styles.price}>
            {product.price === 0 ? (
              <span className={styles.free}>Free to play</span>
            ) : (
              <>
                <span className={styles.current}>${product.finalPrice}</span>
                {hasDiscount && <span className={styles.original}>${product.price}</span>}
              </>
            )}
          </div>
          <button className={styles.cartBtn} onClick={() => addToCart(product)} aria-label="Add to cart">
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
