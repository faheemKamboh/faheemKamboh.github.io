import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ROLES = [
  'Full Stack Developer',
  'Ruby on Rails Engineer',
  'Rubyist',
  'Problem Solver',
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timer

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    } else {
      timer = setTimeout(() => {
        setText(deleting
          ? word.slice(0, text.length - 1)
          : word.slice(0, text.length + 1)
        )
      }, deleting ? 45 : 95)
    }

    return () => clearTimeout(timer)
  }, [text, deleting, wordIdx, words])

  return text
}

export default function Home() {
  const role = useTypewriter(ROLES)

  return (
    <div className="hero-page">
      <div className="container">
        <p className="section-label fade-in">// hello, world!</p>
        <h1 className="hero-name fade-in-1">Faheem Kamboh</h1>
        <p className="hero-role fade-in-2">
          <span>{role}</span>
          <span className="cursor">|</span>
        </p>
        <p className="hero-tagline fade-in-3">
          Building robust, scalable web applications with Ruby on Rails and modern
          frontend tools. Clean code. Real solutions. Ship fast.
        </p>
        <div className="hero-cta fade-in-4">
          <Link to="/projects" className="btn btn-primary">View Projects</Link>
          <Link to="/about"    className="btn btn-outline">About Me</Link>
        </div>
        <div className="hero-stack fade-in-4">
          {['Ruby', 'Rails', 'React', 'PostgreSQL', 'RSpec'].map(s => (
            <span key={s} className="tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
