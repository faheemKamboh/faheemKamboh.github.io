import Footer from '../components/Footer'

const GH_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const EXT_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const PROJECTS = [
  {
    icon: '🛒',
    title: 'Rails E-Commerce API',
    desc: 'A full-featured e-commerce backend built with Rails. Includes product management, cart, orders, Stripe payments, and Sidekiq-powered email notifications.',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Sidekiq', 'Stripe', 'RSpec'],
    github: 'https://github.com/faheemkamboh',
    live: null,
  },
  {
    icon: '📋',
    title: 'Task Management App',
    desc: 'A full-stack task manager with real-time updates, user auth (Devise), role-based access, and a React frontend consuming a Rails JSON API.',
    tags: ['Rails API', 'React', 'Devise', 'JWT', 'PostgreSQL'],
    github: 'https://github.com/faheemkamboh',
    live: null,
  },
  {
    icon: '🤖',
    title: 'Ruby CLI Toolkit',
    desc: 'A collection of pure Ruby CLI tools for automating developer workflows — git helpers, file processors, and report generators.',
    tags: ['Pure Ruby', 'Thor', 'Shell', 'GitHub Actions'],
    github: 'https://github.com/faheemkamboh',
    live: null,
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    desc: 'A data dashboard with a Rails backend aggregating metrics via background jobs, served to a React frontend with interactive charts.',
    tags: ['Rails', 'React', 'Sidekiq', 'Redis', 'Chart.js'],
    github: 'https://github.com/faheemkamboh',
    live: null,
  },
]

export default function Projects() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label fade-in">03 // projects</p>
        <h2 className="fade-in-1">Things I've Built</h2>

        <div className="projects-grid">
          {PROJECTS.map(({ icon, title, desc, tags, github, live }, i) => (
            <div key={title} className={`card project-card fade-in-${Math.min(i + 1, 4)}`}>
              <div className="project-top">
                <span className="project-icon">{icon}</span>
                <div className="project-links">
                  {github && (
                    <a href={github} className="icon-btn" target="_blank" rel="noopener" title="GitHub">
                      {GH_ICON}
                    </a>
                  )}
                  {live && (
                    <a href={live} className="icon-btn" target="_blank" rel="noopener" title="Live demo">
                      {EXT_ICON}
                    </a>
                  )}
                </div>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className="project-footer">
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
