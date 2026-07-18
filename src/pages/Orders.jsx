import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout'
import { games } from '../data/games'
import styles from './Orders.module.css'

const mockOrders = [
  { id: 'GV-482910', date: '2026-06-28', status: 'Shipped', items: [games[3], games[6]], total: 84.98 },
  { id: 'GV-471202', date: '2026-06-10', status: 'Delivered', items: [games[24]], total: 39.99 },
  { id: 'GV-460011', date: '2026-05-22', status: 'Delivered', items: [games[9], games[15], games[18]], total: 108.97 },
]

const statusColor = { Shipped: 'var(--secondary)', Delivered: 'var(--primary)', Processing: 'var(--warning)' }

export default function Orders() {
  return (
    <>
      <Helmet><title>Orders — GameVerse</title></Helmet>
      <DashboardLayout>
        <h1 className="section-title" style={{ marginBottom: 20 }}>Order History</h1>
        <div className={styles.list}>
          {mockOrders.map((o) => (
            <div key={o.id} className={`panel ${styles.order}`}>
              <div className={styles.head}>
                <div>
                  <div className={styles.id}>{o.id}</div>
                  <div className={styles.date}>{o.date}</div>
                </div>
                <span className={styles.status} style={{ color: statusColor[o.status] }}>{o.status}</span>
              </div>
              <div className={styles.items}>
                {o.items.map((it) => it.title).join(', ')}
              </div>
              <div className={styles.footer}>
                <span>${o.total.toFixed(2)}</span>
                <Link to="/order-tracking" className="btn btn-outline">Track Order</Link>
              </div>
            </div>
          ))}
        </div>
      </DashboardLayout>
    </>
  )
}
