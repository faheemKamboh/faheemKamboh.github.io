import Footer from '../components/Footer'
import { SKILL_GROUPS } from '../data/profile'

export default function Skills() {
  return (
    <div className="page">
      <main className="container">
        <p className="eyebrow">02 // skills</p>
        <div className="page-heading">
          <h1>Skills and tools</h1>
          <p>Ruby, Rails, Python, React, testing, deployment, and practical AI-assisted workflows.</p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map(({ category, items }) => (
            <article key={category} className="card skill-card">
              <h2>{category}</h2>
              <div className="skill-tags">
                {items.map(item => <span key={item} className="tag">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
