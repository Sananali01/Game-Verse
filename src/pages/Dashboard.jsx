import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiHeart, FiDownload, FiDollarSign } from 'react-icons/fi'
import DashboardLayout from '../components/DashboardLayout'
import { useShop } from '../context/ShopContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { wishlist, cart } = useShop()

  const stats = [
    { label: 'Total Orders', value: 12, icon: FiShoppingBag },
    { label: 'Wishlist Items', value: wishlist.length, icon: FiHeart },
    { label: 'Downloads', value: 8, icon: FiDownload },
    { label: 'Cart Value', value: `$${cart.reduce((s, i) => s + i.qty * i.finalPrice, 0).toFixed(2)}`, icon: FiDollarSign },
  ]

  return (
    <>
      <Helmet><title>Dashboard — GameVerse</title></Helmet>
      <DashboardLayout>
        <h1 className="section-title" style={{ marginBottom: 20 }}>Welcome back, Player One</h1>
        <div className={styles.stats}>
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.label} className={`panel ${styles.stat}`}>
                <Icon className={styles.statIcon} />
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            )
          })}
        </div>

        <div className={`panel ${styles.recent}`}>
          <h3 style={{ marginBottom: 14 }}>Recent Activity</h3>
          <ul className={styles.activityList}>
            <li>Order <strong>GV-482910</strong> shipped — <Link to="/order-tracking">track it</Link></li>
            <li>Added <strong>Elden Ring Nightreign</strong> to your wishlist</li>
            <li>Your GameVerse+ subscription renews in 14 days</li>
          </ul>
        </div>
      </DashboardLayout>
    </>
  )
}
