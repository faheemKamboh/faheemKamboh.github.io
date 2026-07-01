import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { THEMES } from '../themes'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Work' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        Faheem Ul Islam<span>.</span>
      </NavLink>

      <div className={`nav-links${open ? ' open' : ''}`}>
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

      <div className="nav-right">
        <div className="theme-dots">
          {Object.entries(THEMES).map(([key, t]) => (
            <button
              key={key}
              className={`theme-dot${theme === key ? ' active' : ''}`}
              style={{ background: t.dot }}
              title={t.label}
              onClick={() => setTheme(key)}
              aria-label={`Switch to ${t.label} theme`}
            />
          ))}
        </div>
        <button className="burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
