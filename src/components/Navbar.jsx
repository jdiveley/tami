import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Tami Titheridge
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => isActive ? styles.active : ''}
              onClick={() => setOpen(false)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
