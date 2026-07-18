import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import DashboardLayout from '../components/DashboardLayout'

export default function Profile() {
  const [form, setForm] = useState({ fullName: 'Player One', username: 'player1', email: 'player.one@example.com', phone: '' })
  const [saved, setSaved] = useState(false)
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <>
      <Helmet><title>Profile — GameVerse</title></Helmet>
      <DashboardLayout>
        <h1 className="section-title" style={{ marginBottom: 20 }}>Profile Settings</h1>
        <form className="panel" onSubmit={submit} style={{ maxWidth: 480 }}>
          <div className="input-group"><label>Full Name</label><input className="input" value={form.fullName} onChange={update('fullName')} /></div>
          <div className="input-group"><label>Username</label><input className="input" value={form.username} onChange={update('username')} /></div>
          <div className="input-group"><label>Email</label><input className="input" type="email" value={form.email} onChange={update('email')} /></div>
          <div className="input-group"><label>Phone</label><input className="input" value={form.phone} onChange={update('phone')} /></div>
          <button type="submit" className="btn btn-primary">{saved ? 'Saved ✓' : 'Save Changes'}</button>
        </form>
      </DashboardLayout>
    </>
  )
}
