import { useState } from 'react'
import { Link } from 'react-router-dom'
import { posts, categories } from '../data/posts'
import styles from './Blog.module.css'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState(null)

  const filtered = activeCategory
    ? posts.filter(p => p.categories.includes(activeCategory))
    : posts

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className={styles.eyebrow}>Writing</p>
          <h1 className={styles.pageTitle}>The CX Blog</h1>
          <p className={styles.pageSub}>
            Thoughts on customer experience, customer success, and experience thinking
            — from someone who lives and breathes it every day.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Category Filter */}
        <div className={styles.filters}>
          <button
            className={`${styles.filterBtn} ${!activeCategory ? styles.active : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All Posts
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Post List */}
        <div className={styles.postList}>
          {filtered.map((post, i) => (
            <article key={post.slug} className={styles.postItem}>
              <div className={styles.postMeta}>
                <div className={styles.categories}>
                  {post.categories.map(c => (
                    <span
                      key={c}
                      className={styles.category}
                      onClick={() => setActiveCategory(c)}
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <span className={styles.date}>{post.date}</span>
              </div>
              <h2 className={styles.postTitle}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className={styles.readMore}>
                Read article →
              </Link>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className={styles.empty}>No posts in this category yet.</p>
          )}
        </div>
      </div>
    </>
  )
}
