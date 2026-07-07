import { Link } from 'react-router-dom'
import { FEATURED_WORK, METRICS, PROFILE, SKILL_GROUPS } from '../data/profile'
import Footer from '../components/Footer'

export default function Home() {
  const coreSkills = SKILL_GROUPS.flatMap(group => group.items).slice(0, 14)

  return (
    <div className="page home-page">
      <section className="hero-shell">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack software engineer</p>
          <h1>{PROFILE.name}</h1>
          <p className="hero-name-line">
            <span>Ruby on Rails · React · Python · Product engineering</span>
          </p>
          <p className="hero-tagline">
            I build maintainable web applications, internal tools, APIs, and product dashboards from backend
            architecture to user-facing interfaces. My work combines Rails, React, PostgreSQL, testing,
            deployment, and practical AI integration where it improves real workflows.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">View Work</Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>

          <div className="hero-stack" aria-label="Core skills">
            {coreSkills.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <aside className="profile-card" aria-label="Profile summary">
          <div className="avatar-wrap">
            {/* Developer note: replace public/avatar.svg with a real profile photo when available. */}
            <img src={PROFILE.avatar} alt="Faheem Ul Islam profile avatar" className="avatar" />
          </div>
          <h2>Engineering focus</h2>
          <p>{PROFILE.headline}</p>
          <div className="profile-links">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </aside>
      </section>

      <section className="metric-grid" aria-label="Highlights">
        {METRICS.map(metric => (
          <div key={metric.label} className="metric-card">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Public, professional, and product-focused work</h2>
          <p>
            A focused snapshot of open-source contribution, product engineering, and practical full-stack work.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURED_WORK.slice(0, 3).map(item => (
            <article key={item.title} className="card feature-card">
              <p className="card-kicker">{item.category}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="project-footer">
                {item.tags.slice(0, 5).map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              {item.link && (
                <a href={item.link} className="text-link" target="_blank" rel="noopener noreferrer">
                  Open project
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
