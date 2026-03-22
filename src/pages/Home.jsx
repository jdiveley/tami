import { useRef } from 'react'
import tamiPhoto from '../assets/tami.avif'
import { work } from '../data/work'
import { testimonials } from '../data/testimonials'
import { platforms } from '../data/platforms'
import styles from './Home.module.css'

function Chevron() {
  return (
    <div className={styles.chevron} aria-hidden="true">
      <svg viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polyline points="2,2 20,20 38,2" stroke="#d4157a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

export default function Home() {
  const contactRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thanks for reaching out! Tami will be in touch soon.')
    e.target.reset()
  }

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <h1 className={styles.greeting}>Hi there,<br />I'm Tami :)</h1>
        <Chevron />
        <div className={styles.photoWrap}>
          <img src={tamiPhoto} alt="Tami Titheridge" className={styles.photo} />
        </div>
        <h1 className={styles.heroTitle}>
          I'm a leader in{' '}
          <span className={styles.underline}>experience<br />design</span>
          {' '}& <span className={styles.underline}>customer success!</span>
        </h1>
        <p className={styles.heroSub}>
          I love working with early stage startups, helping them to grow by designing and leading
          Customer Success and Product Success strategies for the post-sales customer life cycle.
        </p>
        <Chevron />
      </section>

      {/* ── Work I'm proud of ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Work I'm proud of</h2>

        {work.map((job) => (
          <div key={job.company} className={styles.jobEntry}>
            <h3 className={styles.companyName}>
              {job.url
                ? <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
                : job.company}
            </h3>
            {job.roles.map((role) => (
              <p key={role} className={styles.role}>{role}</p>
            ))}
            {job.sections.map((sec, i) => (
              <div key={i} className={styles.jobSection}>
                <h4 className={styles.jobHeading}>{sec.heading}</h4>
                {sec.body.map((p, j) => (
                  <p key={j} className={styles.bodyText}>{p}</p>
                ))}
                {sec.bullets.length > 0 && (
                  <ul className={styles.bullets}>
                    {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                )}
                {sec.platformNote && (
                  <p className={styles.platformNote}>{sec.platformNote}</p>
                )}
                {sec.platforms && (
                  <p className={styles.platforms}>
                    <em>Supporting platforms: {sec.platforms}</em>
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </section>

      {/* ── Testimonials ── */}
      <Chevron />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What it's like to work with me</h2>

        {testimonials.map((t) => (
          <div key={t.name} className={styles.testimonial}>
            <h3 className={styles.testimonialName}>{t.name}</h3>
            <p className={styles.testimonialRole}>{t.title} @ {t.company}</p>
            {t.text.map((para, i) => (
              <p key={i} className={styles.bodyText}>{para}</p>
            ))}
          </div>
        ))}
      </section>

      {/* ── Platforms ── */}
      <Chevron />
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Platforms I'm fluent in</h2>
        <div className={styles.platforms2}>
          {platforms.map((p) => (
            <p key={p.category} className={styles.platformRow}>
              <strong>{p.category}:</strong> {p.tools}
            </p>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <Chevron />
      <section className={styles.contact} ref={contactRef}>
        <h2 className={styles.contactTitle}>Let's create awesome experiences.</h2>
        <p className={styles.contactSub}>If you'd like to work with me, please get in touch!</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formLeft}>
            <input className={styles.input} type="text" placeholder="Name *" required />
            <input className={styles.input} type="email" placeholder="Email *" required />
            <input className={styles.input} type="text" placeholder="Subject" />
          </div>
          <textarea className={styles.textarea} placeholder="Message" rows={6} />
          <div className={styles.formFooter}>
            <button className={styles.sendBtn} type="submit">Send</button>
          </div>
        </form>

        <div className={styles.contactSocial}>
          <a href="https://au.linkedin.com/in/tami-titheridge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://twitter.com/TamiTitheridge" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://medium.com/@tami.titheridge" target="_blank" rel="noopener noreferrer" aria-label="Blog">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
          </a>
        </div>
        <p className={styles.contactEmail}>Tami Titheridge : hello@tami-cx.com</p>
      </section>

    </div>
  )
}
