import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { FiSearch, FiArrowRight, FiZap } from "react-icons/fi";
import "swiper/css";
import "swiper/css/free-mode";

import { games } from "../data/games";
import {
  accessories,
  consoles,
  gamingPCs,
  brands,
  categories,
} from "../data/catalog";
import ProductCard from "../components/ProductCard";
import CoverArt from "../components/CoverArt";
import RatingStars from "../components/RatingStars";
import CountdownTimer from "../components/CountdownTimer";
import StatCounter from "../components/StatCounter";
import styles from "./Home.module.css";

const featured = games.slice(0, 8);
const newReleases = [...games].reverse().slice(0, 8);
const trending = games.slice(8, 20);
const bestSellers = [...games]
  .sort((a, b) => b.reviews - a.reviews)
  .slice(0, 8);
const flashDeals = games.filter((g) => g.discount >= 40).slice(0, 6);

const testimonials = [
  {
    name: "Marcus C.",
    role: "PC builder",
    body: "Ordered a full parts list here and the site never felt like it was going to break my cart at checkout.",
  },
  {
    name: "Priya R.",
    role: "Console player",
    body: "The deals section alone saved me more than I expected on this year's big open-world releases.",
  },
  {
    name: "Jonas W.",
    role: "Streamer",
    body: "Picked up my whole streaming kit in one order. Compare tool made choosing a capture card painless.",
  },
  {
    name: "Lena F.",
    role: "Competitive FPS",
    body: "Fast checkout, clear pricing, and the wishlist actually syncs the way I expect it to.",
  },
];

const heroGames = [
  games.find(g => g.id === "gta-vi"),
  games.find(g => g.id === "black-myth-wukong"),
  games.find(g => g.id === "ghost-of-tsushima"),
  games.find(g => g.id === "elden-ring"),
  games.find(g => g.id === "cyberpunk-2077"),
];

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <>
      <Helmet>
        <title>GameVerse — Games, Gear & Everything Between</title>
        <meta
          name="description"
          content="Shop AAA games, consoles, gaming PCs, and premium accessories at GameVerse."
        />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={`container ${styles.heroInner}`}>
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to GameVerse
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            Level up your <span className="gradient-text">entire setup</span>
          </motion.h1>
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            Games, consoles, PCs, and gear — curated, discounted, and delivered
            fast. One marketplace for everything you play on.
          </motion.p>

          <motion.form
            className={styles.heroSearch}
            onSubmit={onSearch}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <FiSearch />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games, consoles, gear…"
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </motion.form>

          <motion.div
            className={styles.heroCtas}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/deals" className="btn btn-primary">
              Shop Flash Deals <FiArrowRight />
            </Link>
            <Link to="/games" className="btn btn-outline">
              Browse Games
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroAuth}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
          >
            <span className={styles.heroAuthText}>New to GameVerse?</span>

            <Link to="/login" className={styles.heroLogin}>
              Login
            </Link>

            <Link to="/register" className={styles.heroRegister}>
              Create Account
            </Link>
          </motion.div>
        </div>

 <div className={styles.heroFloats}>
  {heroGames.map((g, i) => (
    <motion.div
      key={g.id}
      className={styles.floatCard}
      style={{ "--i": i }}
      animate={{ y: [0, -14, 0] }}
      transition={{
        duration: 4 + i * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img
        src={g.cover}
        alt={g.title}
        className={styles.heroPoster}
      />
    </motion.div>
  ))}
</div>
      </section>

      {/* STATS */}
      <section className={`container ${styles.statsSection}`}>
        <div className={styles.statsGrid}>
          <div className={styles.statBlock}>
            <h3>
              <StatCounter to={2400} suffix="K+" />
            </h3>
            <p>Players Served</p>
          </div>
          <div className={styles.statBlock}>
            <h3>
              <StatCounter to={1200} suffix="+" />
            </h3>
            <p>Products Listed</p>
          </div>
          <div className={styles.statBlock}>
            <h3>
              <StatCounter to={98} suffix="%" />
            </h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className={styles.statBlock}>
            <h3>
              <StatCounter to={24} suffix="/7" />
            </h3>
            <p>Order Support</p>
          </div>
        </div>
      </section>

      {/* FEATURED GAMES */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Handpicked</span>
            <h2 className="section-title">Featured Games</h2>
          </div>
          <Link to="/games" className="btn btn-outline">
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid">
          {featured.map((g) => (
            <ProductCard key={g.id} product={g} type="games" />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Explore</span>
            <h2 className="section-title">Shop by Category</h2>
          </div>
          <Link to="/categories" className="btn btn-outline">
            All Categories <FiArrowRight />
          </Link>
        </div>
        <div className={styles.categoryGrid}>
          {categories.slice(0, 10).map((cat, i) => (
            <Link
              key={cat}
              to={`/categories/${encodeURIComponent(cat)}`}
              className={styles.categoryCard}
            >
              <span
                className={styles.categoryMark}
                style={{ background: `hsl(${i * 36} 65% 45%)` }}
              >
                {cat[0]}
              </span>
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING CAROUSEL */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Right Now</span>
            <h2 className="section-title">Trending Games</h2>
          </div>
        </div>
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={1.3}
          freeMode
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          breakpoints={{
            560: { slidesPerView: 2.3 },
            900: { slidesPerView: 3.3 },
            1200: { slidesPerView: 4.3 },
          }}
        >
          {trending.map((g) => (
            <SwiperSlide key={g.id}>
              <ProductCard product={g} type="games" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* FLASH SALE */}
      <section className="container section">
        <div className={styles.flashBanner}>
          <div className={styles.flashText}>
            <span className={styles.flashEyebrow}>
              <FiZap /> Flash Sale
            </span>
            <h2 className={styles.flashTitle}>Up to 65% off, today only</h2>
            <p>
              Deals refresh daily — grab your favorites before the timer runs
              out.
            </p>
          </div>
          <CountdownTimer hours={8} />
        </div>
        <div className="grid" style={{ marginTop: 28 }}>
          {flashDeals.map((g) => (
            <ProductCard key={g.id} product={g} type="games" />
          ))}
        </div>
      </section>

      {/* NEW RELEASES */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Just Dropped</span>
            <h2 className="section-title">New Releases</h2>
          </div>
          <Link to="/games" className="btn btn-outline">
            View All <FiArrowRight />
          </Link>
        </div>
        <div className="grid">
          {newReleases.map((g) => (
            <ProductCard key={g.id} product={g} type="games" />
          ))}
        </div>
      </section>

      {/* ACCESSORIES / CONSOLES / PCS PREVIEW */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Complete Your Setup</span>
            <h2 className="section-title">Gaming Accessories</h2>
          </div>
          <Link to="/accessories" className="btn btn-outline">
            Shop All <FiArrowRight />
          </Link>
        </div>
        <div className="grid">
          {accessories.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} type="accessories" />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Next-Gen</span>
            <h2 className="section-title">Consoles</h2>
          </div>
          <Link to="/consoles" className="btn btn-outline">
            Shop All <FiArrowRight />
          </Link>
        </div>
        <div className="grid">
          {consoles.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} type="consoles" />
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Build or Buy</span>
            <h2 className="section-title">Gaming PCs</h2>
          </div>
          <Link to="/gaming-pcs" className="btn btn-outline">
            Shop All <FiArrowRight />
          </Link>
        </div>
        <div className="grid">
          {gamingPCs.map((p) => (
            <ProductCard key={p.id} product={p} type="gaming-pcs" />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Fan Favorites</span>
            <h2 className="section-title">Best Sellers</h2>
          </div>
        </div>
        <div className="grid">
          {bestSellers.map((g) => (
            <ProductCard key={g.id} product={g} type="games" />
          ))}
        </div>
      </section>

      {/* BRAND SHOWCASE */}
      <section className="container section-sm">
        <div className="section-head">
          <div>
            <span className="eyebrow">Trusted Brands</span>
            <h2 className="section-title">Shop by Brand</h2>
          </div>
          <Link to="/brands" className="btn btn-outline">
            All Brands <FiArrowRight />
          </Link>
        </div>
        <div className={styles.brandStrip}>
          {brands.slice(0, 12).map((b) => (
            <div key={b.id} className={styles.brandChip}>
              <span
                className={styles.brandMark}
                style={{ background: b.color }}
              >
                {b.name[0]}
              </span>
              {b.name}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Trusted by Players</span>
            <h2 className="section-title">What Gamers Say</h2>
          </div>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3400, disableOnInteraction: false }}
          breakpoints={{
            700: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className={styles.testimonial}>
                <RatingStars rating={5} size={13} />
                <p className={styles.testimonialBody}>&ldquo;{t.body}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialAvatar}>{t.name[0]}</span>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* NEWSLETTER + CTA */}
      <section className="container section">
        <div className={styles.newsletter}>
          <div>
            <h2 className={styles.newsletterTitle}>Never miss a drop</h2>
            <p>
              New releases, restocks, and flash sales — straight to your inbox,
              once a week.
            </p>
          </div>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="input"
              type="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
