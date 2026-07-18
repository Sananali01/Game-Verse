import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FiPlay, FiHeart, FiBarChart2, FiShoppingCart } from "react-icons/fi";
import { games, getGameBySlug } from "../data/games";
import { useShop } from "../context/ShopContext";
import CoverArt from "../components/CoverArt";
import RatingStars from "../components/RatingStars";
import ProductCard from "../components/ProductCard";
import NotFound from "./NotFound";
import styles from "./Detail.module.css";

const sampleReviews = [
  {
    name: "Ariq H.",
    rating: 5,
    body: "Ran flawlessly on my rig and the story hooked me from hour one.",
  },
  {
    name: "Sana T.",
    rating: 4,
    body: "Incredible world design. Combat takes a few hours to click.",
  },
  {
    name: "Devon M.",
    rating: 5,
    body: "Best purchase this year — the visuals alone are worth it.",
  },
];

export default function GameDetails() {
  const { slug } = useParams();
  const game = getGameBySlug(slug);
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const {
    addToCart,
    toggleWishlist,
    toggleCompare,
    isInWishlist,
    isInCompare,
  } = useShop();

  if (!game) return <NotFound />;

  const related = games
    .filter((g) => g.id !== game.id && g.genre === game.genre)
    .slice(0, 4);
  const inWishlist = isInWishlist(game.id);
  const inCompare = isInCompare(game.id);

  return (
    <>
      <Helmet>
        <title>{game.title} — GameVerse</title>
      </Helmet>
      <div className="container section">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> / <Link to="/games">Games</Link> /{" "}
          {game.title}
        </div>

        <div className={styles.wrap}>
          <div className={styles.gallery}>
            <div className={styles.mainCover}>
              <CoverArt
                title={game.title}
                color={game.color}
                cover={game.cover}
                ratio="3/4"
              />
            </div>
            <div className={styles.thumbs}>
              {Array.from({ length: game.screenshots }).map((_, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${activeThumb === i ? styles.active : ""}`}
                  onClick={() => setActiveThumb(i)}
                >
                  <CoverArt
                    title={game.title}
                    color={game.color}
                    cover={game.cover}
                    ratio="1/1"
                  />
                </button>
              ))}
            </div>
            <button className={styles.trailerBtn}>
              <FiPlay /> Watch Trailer
            </button>
          </div>

          <motion.div
            className={styles.info}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className={styles.tags}>
              <span className={styles.tag}>{game.genre}</span>
              {game.platform.map((p) => (
                <span key={p} className={styles.tag}>
                  {p}
                </span>
              ))}
            </div>
            <h1 className={styles.title}>{game.title}</h1>
            <RatingStars
              rating={game.rating}
              reviews={game.reviews}
              size={16}
            />

            <div className={styles.priceRow}>
              {game.price === 0 ? (
                <span className={styles.current}>Free to Play</span>
              ) : (
                <>
                  <span className={styles.current}>${game.finalPrice}</span>
                  {game.discount > 0 && (
                    <span className={styles.original}>${game.price}</span>
                  )}
                  {game.discount > 0 && (
                    <span className={styles.discountBadge}>
                      -{game.discount}%
                    </span>
                  )}
                </>
              )}
            </div>

            <p className={styles.desc}>{game.desc}</p>

            <div className={styles.specs}>
              <div className={styles.spec}>
                <div className={styles.specLabel}>Genre</div>
                <div className={styles.specValue}>{game.genre}</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specLabel}>Platforms</div>
                <div className={styles.specValue}>
                  {game.platform.join(", ")}
                </div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specLabel}>Rating</div>
                <div className={styles.specValue}>{game.rating} / 5</div>
              </div>
              <div className={styles.spec}>
                <div className={styles.specLabel}>Reviews</div>
                <div className={styles.specValue}>
                  {game.reviews.toLocaleString()}
                </div>
              </div>
            </div>

            {game.price > 0 && (
              <div className={styles.qtyRow}>
                <div className={styles.qtyBox}>
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))}>
                    −
                  </button>
                  <span>{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)}>+</button>
                </div>
              </div>
            )}

            <div className={styles.ctaRow}>
              <button
                className="btn btn-primary"
                onClick={() => addToCart(game, qty)}
              >
                <FiShoppingCart /> Add to Cart
              </button>
              <Link
                to="/checkout"
                className="btn btn-outline"
                onClick={() => addToCart(game, qty)}
              >
                Buy Now
              </Link>
              <button
                className={`${styles.iconToggle} ${inWishlist ? styles.active : ""}`}
                onClick={() => toggleWishlist(game)}
                aria-label="Wishlist"
              >
                <FiHeart />
              </button>
              <button
                className={`${styles.iconToggle} ${inCompare ? styles.active : ""}`}
                onClick={() => toggleCompare(game)}
                aria-label="Compare"
              >
                <FiBarChart2 />
              </button>
            </div>
          </motion.div>
        </div>

        <div className={styles.reviewsSection}>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            Player Reviews
          </h2>
          {sampleReviews.map((r, i) => (
            <div key={i} className={styles.review}>
              <div className={styles.reviewHead}>
                <span>{r.name}</span>
                <RatingStars rating={r.rating} size={12} />
              </div>
              <p className={styles.reviewBody}>{r.body}</p>
            </div>
          ))}
        </div>

        {related.length > 0 && (
          <div className={styles.relatedSection}>
            <h2 className="section-title" style={{ marginBottom: 20 }}>
              You Might Also Like
            </h2>
            <div className="grid">
              {related.map((g) => (
                <ProductCard key={g.id} product={g} type="games" />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
