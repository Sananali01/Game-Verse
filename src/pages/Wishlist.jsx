import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import ProductCard from '../components/ProductCard'

export default function Wishlist() {
  const { wishlist } = useShop()

  return (
    <>
      <Helmet><title>Wishlist — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Saved for Later</span>
            <h1 className="section-title">Your Wishlist</h1>
          </div>
        </div>
        {wishlist.length === 0 ? (
          <div className="empty-state">
            <h3>Your wishlist is empty</h3>
            <p style={{ marginBottom: 20 }}>Tap the heart icon on any product to save it here.</p>
            <Link to="/shop" className="btn btn-primary">Browse the Shop</Link>
          </div>
        ) : (
          <div className="grid">
            {wishlist.map((p) => <ProductCard key={p.id} product={p} type={p._type || 'games'} />)}
          </div>
        )}
      </div>
    </>
  )
}
