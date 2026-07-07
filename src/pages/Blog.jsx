import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { BLOG_POSTS } from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="page">
      <Seo
        title="Blog"
        description="Readable articles by Faheem Ul Islam about AI, software engineering, Ruby on Rails, portfolio quality, and responsible development."
        path="/blog"
      />
      <main className="container">
        <p className="eyebrow">04 // blog</p>
        <div className="page-heading">
          <h1>Useful writing on AI and software</h1>
          <p>
            Simple, useful articles written for non-technical readers, junior developers, founders, and people
            who want to understand AI and software without confusing jargon.
          </p>
        </div>

        <div className="blog-list article-list">
          {BLOG_POSTS.map(post => (
            <article key={post.slug} className="card article-card">
              <div>
                <p className="card-kicker">{post.readingTime} · {post.audience}</p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
              </div>
              <div className="tag-row">
                {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
              </div>
              <Link to={`/blog/${post.slug}`} className="text-link">Read article</Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
