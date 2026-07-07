import Footer from '../components/Footer'
import { FEATURED_WORK } from '../data/profile'

export default function Projects() {
  return (
    <div className="page">
      <main className="container">
        <p className="eyebrow">03 // work</p>
        <div className="page-heading">
          <h1>Selected work</h1>
          <p>
            A careful mix of personal open-source work, professional open-source contribution, and product
            engineering examples. Company-assigned open-source contributions are described transparently.
          </p>
        </div>

        <div className="projects-grid">
          {FEATURED_WORK.map(({ title, category, description, role, tags, link }) => (
            <article key={title} className="card project-card">
              <div className="project-top">
                <div>
                  <p className="card-kicker">{category}</p>
                  <h2>{title}</h2>
                </div>
              </div>
              <p>{description}</p>
              <p className="project-role"><strong>Role:</strong> {role}</p>
              <div className="project-footer">
                {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              {link ? (
                <a href={link} className="text-link" target="_blank" rel="noopener noreferrer">
                  Open project
                </a>
              ) : (
                <span className="quiet-note">Link can be added when public details are finalized.</span>
              )}
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
