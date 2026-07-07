import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import { BLOG_POSTS, findPost } from '../data/blogPosts'
import { PROFILE } from '../data/profile'
import { SITE } from '../data/site'

function slugify(value) {
  return value.toLowerCase().replaceAll(' ', '-')
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = findPost(slug)

  if (!post) {
    return (
      <div className="page">
        <Seo title="Article not found" description="Browse the blog for beginner-friendly writing about AI and software." path="/blog" />
        <main className="container narrow-container">
          <p className="eyebrow">Blog</p>
          <h1>Article not found</h1>
          <p className="lead">The article you opened is not available.</p>
          <Link to="/blog" className="btn btn-primary">Back to blog</Link>
        </main>
        <Footer />
      </div>
    )
  }

  const path = `/blog/${post.slug}`
  const url = `${SITE.url}${path}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Person', name: PROFILE.name, url: SITE.url },
    publisher: { '@type': 'Person', name: PROFILE.name, url: SITE.url },
    mainEntityOfPage: url,
    keywords: post.tags.join(', '),
  }

  const relatedPosts = BLOG_POSTS.filter(item => item.slug !== post.slug).slice(0, 3)

  return (
    <div className="page">
      <Seo title={post.title} description={post.description} path={path} type="article" schema={schema} />
      <main className="container article-container">
        <Link to="/blog" className="back-link">Back to blog</Link>
        <article className="article">
          <header className="article-header">
            <p className="eyebrow">{post.audience}</p>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
            <div className="article-meta">
              <span>{post.readingTime}</span>
              <span>Updated {post.updatedAt}</span>
              <span>{post.tags.join(' · ')}</span>
            </div>
          </header>

          <aside className="takeaway-box">
            <strong>Key takeaway</strong>
            <p>{post.takeaway}</p>
          </aside>

          <nav className="toc" aria-label="Article table of contents">
            <strong>In this article</strong>
            {post.sections.map(section => (
              <a key={section.heading} href={`#${slugify(section.heading)}`}>{section.heading}</a>
            ))}
          </nav>

          {post.sections.map(section => (
            <section key={section.heading} id={slugify(section.heading)} className="article-section">
              <h2>{section.heading}</h2>
              {section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </article>

        <section className="related-section">
          <h2>Related articles</h2>
          <div className="related-grid">
            {relatedPosts.map(item => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="related-card">
                <span>{item.readingTime}</span>
                <strong>{item.title}</strong>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
