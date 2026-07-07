import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav" aria-label="Primary navigation">
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="logo-text">Faheem Ul Islam</span>
      </NavLink>

      <div className={`nav-links${open ? ' open' : ''}`} id="primary-navigation">
        {LINKS.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </div>

      <button
        className="burger"
        onClick={() => setOpen(value => !value)}
        aria-label="Toggle navigation menu"
        aria-controls="primary-navigation"
        aria-expanded={open}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
