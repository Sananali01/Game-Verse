import styles from './CoverArt.module.css'

export default function CoverArt({
  title,
  color,
  cover,
  ratio = '3/4',
  icon = null,
}) {
  const initials = title
    .split(' ')
    .filter((w) => w.length > 1 || /[A-Za-z0-9]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className={styles.cover}
      style={{
        aspectRatio: ratio,
        background: `linear-gradient(155deg, ${color} 0%, rgba(7,11,20,0.9) 100%)`,
      }}
    >
      {cover ? (
        <img
          src={cover}
          alt={title}
          className={styles.image}
        />
      ) : (
        <>
          <span className={styles.glow} style={{ background: color }} />
          {icon ? (
            <span className={styles.icon}>{icon}</span>
          ) : (
            <span className={styles.initials}>{initials}</span>
          )}
        </>
      )}
    </div>
  )
}