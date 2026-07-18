import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import styles from './RatingStars.module.css'

export default function RatingStars({ rating = 0, reviews, size = 14 }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)

  return (
    <div className={styles.wrap} style={{ fontSize: size }}>
      <span className={styles.stars}>
        {Array.from({ length: full }).map((_, i) => <FaStar key={`f${i}`} />)}
        {half && <FaStarHalfAlt />}
        {Array.from({ length: empty }).map((_, i) => <FaRegStar key={`e${i}`} />)}
      </span>
      <span className={styles.value}>{rating.toFixed(1)}</span>
      {reviews != null && <span className={styles.reviews}>({reviews.toLocaleString()})</span>}
    </div>
  )
}
