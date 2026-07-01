import Footer from '../components/Footer'
import { PROFILE } from '../data/profile'

export default function About() {
  return (
    <div className="page">
      <main className="container">
        <p className="eyebrow">01 // about</p>
        <div className="page-heading">
          <h1>About {PROFILE.shortName}</h1>
          <p>
            A full-stack engineer from Lahore, Pakistan, focused on practical delivery, maintainable
            architecture, and thoughtful use of modern development tools.
          </p>
        </div>

        <div className="about-grid">
          <section className="about-text card">
            <p>
              I am <strong>{PROFILE.fullName}</strong>, a software engineer working across Ruby, Ruby on
              Rails, Python, React, APIs, databases, testing, and deployment workflows.
            </p>
            <p>
              My strongest professional base is Ruby and Rails, but I also work across frontend interfaces,
              backend integrations, automation, and AI-assisted engineering workflows where they make a real
              product easier to build or maintain.
            </p>
            <p>
              I have contributed to open-source Ruby tooling through professional company-assigned accounts,
              including standards-focused libraries and mathematical document processing work. I also maintain
              personal open-source work under my public GitHub account, including <strong>z_ai-ruby</strong>.
            </p>
            <p>
              I prefer simple systems, clear naming, useful tests, and interfaces that make sense to the people
              using them. The goal is not just to write code, but to ship software that can be understood,
              reviewed, improved, and trusted.
            </p>
          </section>

          <aside className="about-sidebar">
            <div className="fact-card">
              <h2>Core focus</h2>
              <ul>
                <li><span>→</span> Ruby and Ruby on Rails systems</li>
                <li><span>→</span> Python and API integrations</li>
                <li><span>→</span> React-based frontend interfaces</li>
                <li><span>→</span> Open-source Ruby tooling</li>
                <li><span>→</span> AI-assisted development workflows</li>
              </ul>
            </div>

            <div className="fact-card">
              <h2>Working style</h2>
              <ul>
                <li><span>→</span> Clear, maintainable code</li>
                <li><span>→</span> Practical testing and review</li>
                <li><span>→</span> Production-minded decisions</li>
                <li><span>→</span> Calm, user-focused interfaces</li>
                <li><span>→</span> Careful handling of public claims</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
