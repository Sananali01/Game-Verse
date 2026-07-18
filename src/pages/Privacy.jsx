import { Helmet } from 'react-helmet-async'
import styles from './Static.module.css'

export default function Privacy() {
  return (
    <>
      <Helmet><title>Privacy Policy — GameVerse</title></Helmet>
      <div className="container section">
        <span className="eyebrow">Legal</span>
        <h1 className="section-title" style={{ marginBottom: 24 }}>Privacy Policy</h1>
        <div className={styles.article}>
          <p>Last updated: July 2026. This policy describes, in plain language, how GameVerse collects and uses information when you use this demo storefront.</p>
          <h2>Information We Collect</h2>
          <p>Account details you provide (name, email, shipping address), and usage data such as pages viewed and items added to your cart or wishlist, stored locally in your browser for this demo.</p>
          <h2>How We Use It</h2>
          <ul>
            <li>To process and track orders</li>
            <li>To personalize recommendations and deals</li>
            <li>To improve site performance and reliability</li>
          </ul>
          <h2>Data Storage</h2>
          <p>In this demo build, cart, wishlist, compare list, and theme preference are stored in your browser's local storage and are never transmitted to a server.</p>
          <h2>Your Choices</h2>
          <p>You can clear your locally stored data at any time by clearing your browser's site data for this domain.</p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to privacy@gameverse.example.</p>
        </div>
      </div>
    </>
  )
}
