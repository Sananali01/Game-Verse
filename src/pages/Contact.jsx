import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Helmet><title>Contact — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Get in Touch</span>
            <h1 className="section-title">Contact Us</h1>
          </div>
        </div>
        <div className={styles.layout}>
          <form className="panel" onSubmit={submit}>
            {sent ? (
              <div className={styles.sent}>
                <h3>Message sent ✓</h3>
                <p>We'll get back to you within one business day.</p>
              </div>
            ) : (
              <>
                <div className="input-group"><label>Name</label><input required className="input" value={form.name} onChange={update('name')} /></div>
                <div className="input-group"><label>Email</label><input required type="email" className="input" value={form.email} onChange={update('email')} /></div>
                <div className="input-group">
                  <label>Message</label>
                  <textarea required className="input" rows={5} value={form.message} onChange={update('message')} />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </>
            )}
          </form>

          <div className={styles.info}>
            <div className={styles.infoRow}><FiMail /> support@gameverse.example</div>
            <div className={styles.infoRow}><FiPhone /> +1 (555) 019-4820</div>
            <div className={styles.infoRow}><FiMapPin /> 88 Arcade Row, San Francisco, CA</div>
          </div>
        </div>
      </div>
    </>
  )
}
