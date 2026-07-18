import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGoogle, FaFacebookF, FaDiscord, FaGithub } from 'react-icons/fa'
import styles from './Auth.module.css'

export default function Register() {
  const [form, setForm] = useState({ fullName: '', username: '', email: '', phone: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.fullName || !form.username) return setError('Full name and username are required.')
    if (!form.email.includes('@')) return setError('Enter a valid email address.')
    if (form.password.length < 6) return setError('Password must be at least 6 characters.')
    if (form.password !== form.confirm) return setError('Passwords do not match.')
    setError('')
    navigate('/dashboard')
  }

  return (
    <>
      <Helmet><title>Create Account — GameVerse</title></Helmet>
      <div className={styles.wrap}>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className={styles.logo}><span className={styles.mark}>GV</span>GameVerse</div>
          <h1 className={styles.title}>Create your account</h1>
          <p className={styles.subtitle}>Join GameVerse and start building your library.</p>

          <form onSubmit={submit}>
            <div className="input-group"><label>Full Name</label><input className="input" value={form.fullName} onChange={update('fullName')} /></div>
            <div className="input-group"><label>Username</label><input className="input" value={form.username} onChange={update('username')} /></div>
            <div className="input-group"><label>Email</label><input className="input" type="email" value={form.email} onChange={update('email')} /></div>
            <div className="input-group"><label>Phone</label><input className="input" value={form.phone} onChange={update('phone')} /></div>
            <div className="input-group"><label>Password</label><input className="input" type="password" value={form.password} onChange={update('password')} /></div>
            <div className="input-group"><label>Confirm Password</label><input className="input" type="password" value={form.confirm} onChange={update('confirm')} /></div>
            {error && <motion.div className={styles.error} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
            <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 6 }}>Create Account</button>
          </form>

          <div className={styles.divider}>or sign up with</div>
          <div className={styles.social}>
            <button aria-label="Google"><FaGoogle /></button>
            <button aria-label="Facebook"><FaFacebookF /></button>
            <button aria-label="Discord"><FaDiscord /></button>
            <button aria-label="GitHub"><FaGithub /></button>
          </div>

          <p className={styles.footer}>Already have an account? <Link to="/login">Log in</Link></p>
        </motion.div>
      </div>
    </>
  )
}
