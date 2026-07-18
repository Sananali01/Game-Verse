import { NavLink } from 'react-router-dom'
import { FiGrid, FiShoppingBag, FiHeart, FiDownload, FiMapPin, FiCreditCard, FiBell, FiSettings, FiLogOut } from 'react-icons/fi'
import styles from './DashboardLayout.module.css'

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: FiGrid },
  { to: '/orders', label: 'Orders', icon: FiShoppingBag },
  { to: '/wishlist', label: 'Wishlist', icon: FiHeart },
  { to: '/profile', label: 'Profile', icon: FiSettings },
]

const staticLinks = [
  { label: 'Downloads', icon: FiDownload },
  { label: 'Saved Addresses', icon: FiMapPin },
  { label: 'Payment Methods', icon: FiCreditCard },
  { label: 'Notifications', icon: FiBell },
]

export default function DashboardLayout({ children }) {
  return (
    <div className="container section">
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.user}>
            <div className={styles.avatar}>PL</div>
            <div>
              <div className={styles.name}>Player One</div>
              <div className={styles.email}>player.one@example.com</div>
            </div>
          </div>
          <nav className={styles.nav}>
            {links.map((l) => {
              const Icon = l.icon
              return (
                <NavLink key={l.to} to={l.to} className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
                  <Icon /> {l.label}
                </NavLink>
              )
            })}
            {staticLinks.map((l) => {
              const Icon = l.icon
              return <button key={l.label} className={styles.link}><Icon /> {l.label}</button>
            })}
            <button className={`${styles.link} ${styles.logout}`}><FiLogOut /> Logout</button>
          </nav>
        </aside>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}
