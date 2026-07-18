import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { games } from '../data/games'
import CoverArt from '../components/CoverArt'
import styles from './Blog.module.css'

const posts = [
  { title: 'The Best Open-World Games of the Year', excerpt: 'From the Lands Between to feudal Japan, here are the worlds worth losing a weekend to.', game: games[5] },
  { title: 'Building a Streaming Setup Under $500', excerpt: 'A practical breakdown of mic, capture card, and lighting picks that punch above their price.', game: games[32] },
  { title: 'Why Battle Royale Still Dominates', excerpt: "A look at what keeps Warzone, Apex, and Fortnite in players' rotations year after year.", game: games[16] },
  { title: 'Handheld PC Gaming, Compared', excerpt: 'Steam Deck vs. ROG Ally vs. Legion Go — which one actually fits your bag.', game: games[19] },
]

export default function Blog() {
  return (
    <>
      <Helmet><title>Blog — GameVerse</title></Helmet>
      <div className="container section">
        <div className="section-head">
          <div>
            <span className="eyebrow">From the Blog</span>
            <h1 className="section-title">GameVerse Journal</h1>
          </div>
        </div>
        <div className={styles.grid}>
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <CoverArt title={p.game.title} color={p.game.color} ratio="16/9" />
              <div className={styles.body}>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  )
}
