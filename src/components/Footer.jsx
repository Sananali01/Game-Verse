import { Link } from 'react-router-dom'
import { FaDiscord, FaXTwitter, FaYoutube, FaInstagram } from 'react-icons/fa6'
import styles from './Footer.module.css'

const columns = [
  { title: 'Shop', links: [['Games', '/games'], ['Accessories', '/accessories'], ['Consoles', '/consoles'], ['Gaming PCs', '/gaming-pcs'], ['Components', '/components']] },
  { title: 'Account', links: [['Dashboard', '/dashboard'], ['Orders', '/orders'], ['Wishlist', '/wishlist'], ['Login', '/login'], ['Register', '/register']] },
  { title: 'Company', links: [['About', '/about'], ['Contact', '/contact'], ['Blog', '/blog'], ['FAQ', '/faq']] },
  { title: 'Legal', links: [['Privacy Policy', '/privacy'], ['Terms & Conditions', '/terms']] },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <div className={styles.logo}><span className={styles.mark}>GV</span>GameVerse</div>
          <p className={styles.tagline}>Games, gear, and everything between — curated for players who take their setup seriously.</p>
          <div className={styles.social}>
            <a href="#" aria-label="Discord"><FaDiscord /></a>
            <a href="#" aria-label="X"><FaXTwitter /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title} className={styles.col}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(([label, to]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} GameVerse. All rights reserved.</span>
        <span>Built with React, Vite &amp; Framer Motion.</span>
      </div>
    </footer>
  )
}
