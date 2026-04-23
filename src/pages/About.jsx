import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <p className="section-label fade-in">01 // about</p>
        <h2 className="fade-in-1">About Me</h2>

        <div className="about-grid">
          <div className="about-text fade-in-2">
            <p>
              Hi! I'm <strong>Faheem Kamboh</strong>, a full stack developer with deep expertise in
              <strong> Ruby on Rails</strong> and <strong>pure Ruby</strong>. I love building things
              that are fast, reliable, and easy to maintain — from RESTful APIs to rich frontend experiences.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I've worked across the full stack: designing database schemas, crafting Rails backends,
              writing RSpec test suites, and building React frontends that connect to those APIs.
              I care about code quality, good architecture, and shipping products people actually enjoy using.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I'm always exploring — whether that's a new Ruby gem, a design pattern, or a better way
              to structure a Rails app. I believe great software is built on strong fundamentals,
              clear thinking, and a healthy obsession with the details.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Currently open to exciting new opportunities. Let's build something great together.
            </p>
          </div>

          <div className="about-sidebar fade-in-3">
            <div className="fact-card">
              <h3>Quick Facts</h3>
              <ul>
                <li><span className="arrow">→</span> Full Stack Developer</li>
                <li><span className="arrow">→</span> Ruby &amp; Rails specialist</li>
                <li><span className="arrow">→</span> Open to work</li>
                <li><span className="arrow">→</span> Remote friendly</li>
                <li><span className="arrow">→</span> Open source contributor</li>
                <li><span className="arrow">→</span> Lifelong learner</li>
              </ul>
            </div>

            <div className="fact-card">
              <h3>Interests</h3>
              <ul>
                <li><span className="arrow">→</span> Clean architecture</li>
                <li><span className="arrow">→</span> TDD &amp; BDD</li>
                <li><span className="arrow">→</span> API design</li>
                <li><span className="arrow">→</span> Performance tuning</li>
                <li><span className="arrow">→</span> Dev tooling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
