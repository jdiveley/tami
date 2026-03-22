import { Link } from 'react-router-dom'
import { posts } from '../data/posts'
import styles from './Home.module.css'

export default function Home() {
  const recent = posts.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>CX Geek · Experience Thinker</p>
            <h1 className={styles.heroTitle}>
              Hi, I'm Tami.<br />
              I create awesome<br />
              <em>customer experiences.</em>
            </h1>
            <p className={styles.heroSub}>
              A self-proclaimed CX Geek with a flair for Experience Thinking and
              Customer Success. I love working with early-stage startups, helping
              them grow by designing and executing strategies that put customers first.
            </p>
            <div className={styles.heroCta}>
              <Link to="/blog" className={styles.btnPrimary}>Read the Blog</Link>
              <a
                href="https://au.linkedin.com/in/tami-titheridge"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnOutline}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.avatarWrap}>
              <div className={styles.avatar}>
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="100" fill="#f0ebe3" />
                  <circle cx="100" cy="80" r="36" fill="#c9964a" opacity="0.85" />
                  <ellipse cx="100" cy="160" rx="56" ry="44" fill="#c9964a" opacity="0.65" />
                </svg>
                <span className={styles.avatarInitials}>TT</span>
              </div>
              <div className={styles.badge}>
                <span>🎯</span>
                <span>CX Expert</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <strong>Customer Experience</strong>
            <span>Strategy &amp; Design</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <strong>Customer Success</strong>
            <span>Startups &amp; Scale-ups</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <strong>Experience Thinking</strong>
            <span>Human-Centred Design</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutLeft}>
            <p className={styles.eyebrow}>About Me</p>
            <h2 className={styles.sectionTitle}>
              Customer Experience is not a department.<br />It's a way of life.
            </h2>
            <p className={styles.aboutText}>
              I'm a Customer Experience professional based in Australia. I believe
              that truly great customer experiences don't happen by accident — they're
              designed, measured, and continuously improved.
            </p>
            <p className={styles.aboutText}>
              When I'm not thinking about CX, you'll find me gaming or hunting down
              the perfect coffee. I'm also a firm believer that empathy is the most
              underrated business skill.
            </p>
            <div className={styles.tags}>
              {['Experience Design', 'Customer Success', 'CX Strategy', 'Experience Thinking', 'Startups'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
          <div className={styles.aboutRight}>
            <div className={styles.quoteCard}>
              <blockquote>
                "Customer centricity is not a person or a department — it's a way
                of life for the entire company."
              </blockquote>
              <cite>— Tami Titheridge</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className={styles.recentPosts}>
        <div className={styles.recentInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>From the Blog</p>
            <h2 className={styles.sectionTitle}>Latest Thoughts on CX</h2>
          </div>
          <div className={styles.postGrid}>
            {recent.map(post => (
              <article key={post.slug} className={styles.postCard}>
                <div className={styles.postMeta}>
                  {post.categories.slice(0, 1).map(c => (
                    <span key={c} className={styles.postCategory}>{c}</span>
                  ))}
                  <span className={styles.postDate}>{post.date}</span>
                </div>
                <h3 className={styles.postTitle}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                  Read more →
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.viewAll}>
            <Link to="/blog" className={styles.btnPrimary}>View All Posts</Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <h2>Let's talk customer experience.</h2>
          <p>
            Whether you're building your first CX strategy or looking to level up your
            customer success function, I'd love to connect.
          </p>
          <div className={styles.ctaLinks}>
            <a
              href="https://au.linkedin.com/in/tami-titheridge"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnLight}
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://medium.com/@tami.titheridge"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutlineLight}
            >
              Read on Medium
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
