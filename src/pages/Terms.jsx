import { Helmet } from 'react-helmet-async'
import styles from './Static.module.css'

export default function Terms() {
  return (
    <>
      <Helmet><title>Terms & Conditions — GameVerse</title></Helmet>
      <div className="container section">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title" style={{ marginBottom: 24 }}>Terms &amp; Conditions</h1>
        <div className={styles.article}>
          <p>Last updated: July 2026. These terms govern your use of the GameVerse demo storefront.</p>
          <h2>Use of the Site</h2>
          <p>This is a demonstration e-commerce experience. Prices, inventory, and order confirmations are illustrative and no real payment is processed.</p>
          <h2>Accounts</h2>
          <p>Login and registration on this demo do not create a real account or store credentials on a server; form data stays in your browser session.</p>
          <h2>Orders &amp; Payment</h2>
          <p>Checkout and payment flows are simulated for demonstration purposes only and do not charge any card or process real transactions.</p>
          <h2>Intellectual Property</h2>
          <p>Product names referenced belong to their respective publishers and are used here for illustrative, non-commercial demo purposes.</p>
          <h2>Changes</h2>
          <p>These terms may be updated at any time without notice, as this is a demo project.</p>
        </div>
      </div>
    </>
  )
}
