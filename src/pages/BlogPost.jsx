import { useParams, Link, Navigate } from 'react-router-dom'
import { posts } from '../data/posts'
import styles from './BlogPost.module.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const idx = posts.findIndex(p => p.slug === slug)
  const prev = posts[idx + 1] || null
  const next = posts[idx - 1] || null

  return (
    <>
      <div className={styles.postHero}>
        <div className={styles.postHeroInner}>
          <div className={styles.breadcrumb}>
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/blog">Blog</Link>
          </div>
          <div className={styles.meta}>
            {post.categories.map(c => (
              <span key={c} className={styles.category}>{c}</span>
            ))}
            <span className={styles.date}>{post.date}</span>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.author}>
            <div className={styles.authorAvatar}>TT</div>
            <div>
              <strong>Tami Titheridge</strong>
              <span>CX Geek · Based in Australia</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.layout}>
        <article className={styles.article}>
          {post.content.split('\n\n').map((para, i) => {
            if (para.startsWith('**') && para.endsWith('**')) {
              return <h3 key={i} className={styles.subheading}>{para.replace(/\*\*/g, '')}</h3>
            }
            if (para.includes('\n- ')) {
              const [lead, ...items] = para.split('\n- ')
              return (
                <div key={i}>
                  {lead && <p className={styles.para}>{lead}</p>}
                  <ul className={styles.list}>
                    {items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              )
            }
            // Handle inline **bold**
            const parts = para.split(/(\*\*[^*]+\*\*)/)
            return (
              <p key={i} className={styles.para}>
                {parts.map((part, j) =>
                  part.startsWith('**') && part.endsWith('**')
                    ? <strong key={j}>{part.replace(/\*\*/g, '')}</strong>
                    : part
                )}
              </p>
            )
          })}
        </article>

        <aside className={styles.sidebar}>
          <div className={styles.authorCard}>
            <div className={styles.authorCardAvatar}>TT</div>
            <h3>Tami Titheridge</h3>
            <p>
              CX Geek with a flair for Experience Thinking and Customer Success.
              Helping startups design experiences that people love.
            </p>
            <div className={styles.authorLinks}>
              <a href="https://au.linkedin.com/in/tami-titheridge" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com/TamiTitheridge" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://medium.com/@tami.titheridge" target="_blank" rel="noopener noreferrer">Medium</a>
            </div>
          </div>

          <div className={styles.categoriesCard}>
            <h4>Categories</h4>
            <ul>
              {post.categories.map(c => (
                <li key={c}>
                  <Link to={`/blog?category=${c}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Post Navigation */}
      <nav className={styles.postNav}>
        <div className={styles.postNavInner}>
          {next ? (
            <Link to={`/blog/${next.slug}`} className={styles.navLink}>
              <span className={styles.navDir}>← Newer</span>
              <span className={styles.navTitle}>{next.title}</span>
            </Link>
          ) : <div />}
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className={`${styles.navLink} ${styles.navRight}`}>
              <span className={styles.navDir}>Older →</span>
              <span className={styles.navTitle}>{prev.title}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>
    </>
  )
}
