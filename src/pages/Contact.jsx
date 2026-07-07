import { useState } from 'react'
import Footer from '../components/Footer'

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/faheemkamboh',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/faheemkamboh',
  },
  {
    label: 'Email',
    href: 'mailto:im@faheemulislam.com',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = e.target.elements
    const subject = encodeURIComponent(`Portfolio contact from ${name.value}`)
    const body = encodeURIComponent(`${message.value}\n\nFrom: ${name.value} <${email.value}>`)
    window.location.href = `mailto:im@faheemulislam.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div className="page">
      <div className="container">
        <p className="section-label fade-in">04 // contact</p>
        <h2 className="fade-in-1">Get In Touch</h2>

        <div className="contact-wrap">
          <div className="contact-intro fade-in-2">
            <p>
              I'm currently open to new opportunities — full-time roles, freelance projects,
              or just a conversation about tech. Drop me a message and I'll get back to you promptly.
            </p>
            <div className="contact-socials" style={{ marginTop: '2rem' }}>
              {SOCIALS.map(({ label, href, icon }) => (
                <a key={label} href={href} className="social-link" target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener">
                  {icon} {label}
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form fade-in-3" onSubmit={handleSubmit}>
            {sent ? (
              <div className="card" style={{ textAlign: 'center', color: 'var(--accent2)' }}>
                <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</p>
                <p>Your email client should have opened. Talk soon!</p>
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Smith" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="jane@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={6} placeholder="Hi Faheem, I'd love to chat about..." required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
