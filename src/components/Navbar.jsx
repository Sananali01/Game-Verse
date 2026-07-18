import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSearch, FiHeart, FiShoppingCart, FiSun, FiMoon, FiMenu, FiX, FiUser } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useShop } from '../context/ShopContext'
import styles from './Navbar.module.css'

const menu = [
  { label: 'Shop', to: '/shop' },
  { label: 'Games', to: '/games' },
  { label: 'Accessories', to: '/accessories' },
  { label: 'Consoles', to: '/consoles' },
  { label: 'Gaming PCs', to: '/gaming-pcs' },
  { label: 'Components', to: '/components' },
  { label: 'Brands', to: '/brands' },
  { label: 'Deals', to: '/deals' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { cartCount, wishlist, setCartOpen } = useShop()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onSearch = (e) => {
    e.preventDefault()
    if (query.trim()) navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
    setMobileOpen(false)
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoMark}>GV</span>
          <span>GameVerse</span>
        </Link>

        <nav className={styles.desktopNav}>
          {menu.map((item) => (
            <Link key={item.to} to={item.to} className={styles.navLink}>{item.label}</Link>
          ))}
        </nav>

        <form className={styles.search} onSubmit={onSearch}>
          <FiSearch />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, gear, brands…"
            aria-label="Search"
          />
        </form>

        <div className={styles.iconGroup}>
          <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex' }}
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </motion.span>
            </AnimatePresence>
          </button>
          <Link to="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
            <FiHeart />
            {wishlist.length > 0 && <span className={styles.count}>{wishlist.length}</span>}
          </Link>
          <button className={styles.iconBtn} onClick={() => setCartOpen(true)} aria-label="Cart">
            <FiShoppingCart />
            {cartCount > 0 && <span className={styles.count}>{cartCount}</span>}
          </button>
          <Link to="/dashboard" className={styles.iconBtn} aria-label="Account">
            <FiUser />
          </Link>
          <button className={styles.mobileToggle} onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <form className={styles.mobileSearch} onSubmit={onSearch}>
              <FiSearch />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search…" />
            </form>
            {menu.map((item) => (
              <Link key={item.to} to={item.to} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
