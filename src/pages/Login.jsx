import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGoogle, FaFacebookF, FaDiscord, FaGithub } from 'react-icons/fa'
import styles from './Auth.module.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (!form.email.includes('@')) return setError('Enter a valid email address.')
    if (form.password.length < 4) return setError('Password must be at least 4 characters.')
    setError('')
    navigate('/dashboard')
  }

  return (
    <>
      <Helmet><title>Login — GameVerse</title></Helmet>
      <div className={styles.wrap}>
        <motion.div className={styles.card} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className={styles.logo}><span className={styles.mark}>GV</span>GameVerse</div>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>Log in to continue your library and orders.</p>

          <form onSubmit={submit}>
            <div className="input-group">
              <label>Email</label>
              <input className="input" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input className="input" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            {error && <motion.div className={styles.error} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{error}</motion.div>}
            <div className={styles.row}>
              <label><input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Remember me</label>
              <Link to="#">Forgot password?</Link>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Log In</button>
          </form>

          <div className={styles.divider}>or continue with</div>
          <div className={styles.social}>
            <button aria-label="Google"><FaGoogle /></button>
            <button aria-label="Facebook"><FaFacebookF /></button>
            <button aria-label="Discord"><FaDiscord /></button>
            <button aria-label="GitHub"><FaGithub /></button>
          </div>

          <p className={styles.footer}>New to GameVerse? <Link to="/register">Create an account</Link></p>
        </motion.div>
      </div>
    </>
  )
}
