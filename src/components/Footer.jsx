import { PROFILE } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <span>{PROFILE.name}</span> · Full-stack engineering, open-source Ruby work, and practical AI-assisted delivery ·{' '}
      {new Date().getFullYear()}
    </footer>
  )
}
