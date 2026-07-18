import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import styles from './FAQ.module.css'

const faqs = [
  { q: 'How fast is shipping for hardware orders?', a: 'Standard shipping is 3–5 business days and free on orders over $100. Express and overnight options are available at checkout.' },
  { q: 'Are digital game keys delivered instantly?', a: 'Yes — digital titles are delivered to your account and email immediately after payment confirmation.' },
  { q: 'What is your return policy on accessories?', a: 'Unopened hardware can be returned within 30 days. Opened items are covered by manufacturer warranty.' },
  { q: 'Can I change my order after checkout?', a: 'You can edit shipping details within 1 hour of placing an order from your Dashboard > Orders page.' },
  { q: 'Do you support cash on delivery?', a: 'Yes, cash on delivery is available in select regions and shown as a payment option at checkout when eligible.' },
  { q: 'How do I redeem a gift card?', a: 'Enter your gift card code in the Payment step at checkout — the balance is applied automatically.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <Helmet><title>FAQ — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">Need Help?</span>
            <h1 className="section-title">Frequently Asked Questions</h1>
          </div>
        </div>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={f.q} className={styles.item}>
              <button className={styles.question} onClick={() => setOpen(open === i ? -1 : i)}>
                {f.q}
                <motion.span animate={{ rotate: open === i ? 180 : 0 }}><FiChevronDown /></motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.answerWrap}
                  >
                    <p className={styles.answer}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
