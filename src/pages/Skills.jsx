import Footer from '../components/Footer'

const SKILLS = [
  {
    category: 'Languages',
    items: ['Ruby', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Bash'],
  },
  {
    category: 'Frameworks',
    items: ['Ruby on Rails', 'React', 'Sinatra', 'RSpec', 'Capybara', 'Minitest'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'ActiveRecord'],
  },
  {
    category: 'APIs & Protocols',
    items: ['REST', 'JSON', 'GraphQL', 'OAuth2', 'JWT', 'Webhooks'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Docker', 'GitHub Actions', 'Heroku', 'Linux', 'Nginx'],
  },
  {
    category: 'Background Jobs',
    items: ['Sidekiq', 'Delayed::Job', 'Action Mailer', 'ActiveJob', 'Cron'],
  },
  {
    category: 'Testing',
    items: ['RSpec', 'Minitest', 'FactoryBot', 'Faker', 'VCR', 'WebMock'],
  },
  {
    category: 'Practices',
    items: ['TDD', 'BDD', 'MVC', 'OOP', 'SOLID', 'Code Review', 'Agile'],
  },
]

export default function Skills() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label fade-in">02 // skills</p>
        <h2 className="fade-in-1">Tech Stack</h2>

        <div className="skills-grid">
          {SKILLS.map(({ category, items }, i) => (
            <div key={category} className={`card skill-card fade-in-${Math.min(i + 1, 4)}`}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {items.map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
