import Footer from '../components/Footer'
import { BLOG_POSTS } from '../data/profile'

export default function Blog() {
  return (
    <div className="page">
      <main className="container">
        <p className="eyebrow">04 // blog</p>
        <div className="page-heading">
          <h1>Notes on AI and software</h1>
          <p>
            Beginner-friendly writing for people who want to understand AI and software without heavy technical
            language.
          </p>
        </div>

        <div className="blog-list">
          {BLOG_POSTS.map(post => (
            <article key={post.slug} className="card blog-card">
              <div className="blog-card-header">
                <p className="card-kicker">{post.readingTime}</p>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
              </div>

              <div className="blog-sections">
                {post.sections.map(section => (
                  <section key={section.heading}>
                    <h3>{section.heading}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
