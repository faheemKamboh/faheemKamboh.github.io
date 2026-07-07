import { useEffect } from 'react'
import { PROFILE, SITE } from '../data/profile'

function ensureMeta(kind, key) {
  const selector = kind === 'property' ? `meta[property="${key}"]` : `meta[name="${key}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(kind, key)
    document.head.appendChild(tag)
  }
  return tag
}

function ensureCanonical() {
  let tag = document.head.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  return tag
}

function ensureStructuredData() {
  let tag = document.getElementById('page-structured-data')
  if (!tag) {
    tag = document.createElement('script')
    tag.id = 'page-structured-data'
    tag.type = 'application/ld+json'
    document.head.appendChild(tag)
  }
  return tag
}

export default function Seo({ title, description, path = '/', type = 'website', schema }) {
  useEffect(() => {
    const cleanPath = path === '/' ? '' : path
    const url = `${SITE.url}${cleanPath}`
    const fullTitle = title.includes(PROFILE.name) ? title : `${title} | ${PROFILE.name}`

    document.title = fullTitle
    ensureMeta('name', 'description').setAttribute('content', description)
    ensureMeta('property', 'og:title').setAttribute('content', fullTitle)
    ensureMeta('property', 'og:description').setAttribute('content', description)
    ensureMeta('property', 'og:type').setAttribute('content', type)
    ensureMeta('property', 'og:url').setAttribute('content', url)
    ensureMeta('property', 'og:image').setAttribute('content', SITE.image)
    ensureMeta('name', 'twitter:title').setAttribute('content', fullTitle)
    ensureMeta('name', 'twitter:description').setAttribute('content', description)
    ensureMeta('name', 'twitter:image').setAttribute('content', SITE.image)
    ensureCanonical().setAttribute('href', url)

    if (schema) {
      ensureStructuredData().textContent = JSON.stringify(schema)
    }
  }, [title, description, path, type, schema])

  return null
}
