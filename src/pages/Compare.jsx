import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'
import { useShop } from '../context/ShopContext'
import CoverArt from '../components/CoverArt'
import RatingStars from '../components/RatingStars'
import styles from './Compare.module.css'

export default function Compare() {
  const { compare, toggleCompare, addToCart } = useShop()

  return (
    <>
      <Helmet><title>Compare — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Side by Side</span>
            <h1 className="section-title">Compare Products</h1>
            <p className="section-sub">Add up to 4 items from any listing to compare specs and pricing.</p>
          </div>
        </div>

        {compare.length === 0 ? (
          <div className="empty-state">
            <h3>Nothing to compare yet</h3>
            <p style={{ marginBottom: 20 }}>Tap the compare icon on any product card to add it here.</p>
            <Link to="/shop" className="btn btn-primary">Browse the Shop</Link>
          </div>
        ) : (
          <div className={styles.table}>
            {compare.map((p) => (
              <div key={p.id} className={styles.col}>
                <button className={styles.remove} onClick={() => toggleCompare(p)} aria-label="Remove"><FiX /></button>
                <CoverArt title={p.title} color={p.color} ratio="1/1" />
                <h3 className={styles.title}>{p.title}</h3>
                <RatingStars rating={p.rating} reviews={p.reviews} size={12} />
                <div className={styles.row}><span>Price</span><strong>${p.finalPrice}</strong></div>
                <div className={styles.row}><span>Category</span><strong>{p.genre || p.category}</strong></div>
                {p.platform && <div className={styles.row}><span>Platforms</span><strong>{p.platform.join(', ')}</strong></div>}
                <div className={styles.row}><span>Discount</span><strong>{p.discount}%</strong></div>
                <button className="btn btn-primary btn-block" onClick={() => addToCart(p)}>Add to Cart</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
