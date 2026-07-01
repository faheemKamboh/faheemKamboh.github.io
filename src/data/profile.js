export const PROFILE = {
  name: 'Faheem Ul Islam',
  fullName: 'Faheem Ul Islam Arshad Kamboh',
  shortName: 'Faheem',
  email: 'im@faheemulislam.com',
  location: 'Lahore, Pakistan',
  title: 'Full-Stack Engineer',
  headline: 'Ruby, Rails, Python, React & practical AI-assisted product development',
  avatar: '/avatar.svg',
  github: 'https://github.com/faheemkamboh',
  linkedin: 'https://linkedin.com/in/faheemkamboh',
}

export const METRICS = [
  { value: '6+', label: 'Years building software' },
  { value: 'Rails', label: 'Core backend strength' },
  { value: 'OSS', label: 'Ruby ecosystem work' },
  { value: 'AI', label: 'Practical workflow adoption' },
]

export const FEATURED_WORK = [
  {
    title: 'z_ai-ruby',
    category: 'Open-source Ruby gem',
    description:
      'A personal open-source Ruby project focused on making Z.ai usage cleaner and easier from Ruby applications.',
    role: 'Maintainer and contributor',
    tags: ['Ruby', 'Gem', 'API Client', 'Open Source'],
    link: 'https://github.com/faheemkamboh/z_ai-ruby',
  },
  {
    title: 'Plurimath and standards-focused Ruby tooling',
    category: 'Professional open-source contribution',
    description:
      'Contributed professionally to Ruby libraries used for mathematical and standards-oriented document processing work. This work was completed through company-assigned development accounts, so it is presented here as professional contribution experience rather than personal account ownership.',
    role: 'Contributor through company-assigned profile',
    tags: ['Ruby', 'MathML', 'LaTeX', 'UnicodeMath', 'Standards'],
    link: null,
  },
  {
    title: 'GreensVilla',
    category: 'Product engineering',
    description:
      'A Rails-based property platform focused on practical workflows, vendor/admin experiences, responsive interfaces, and production-readiness improvements.',
    role: 'Full-stack engineering and product implementation',
    tags: ['Rails', 'React', 'PostgreSQL', 'UX', 'Deployment'],
    link: null,
  },
  {
    title: 'Taleemi Idara',
    category: 'Education management platform',
    description:
      'A school and institution management project with role-based portals, dashboards, attendance-focused workflows, and responsive product screens.',
    role: 'Full-stack product development',
    tags: ['Rails', 'Education', 'Dashboards', 'Responsive UI'],
    link: null,
  },
]

export const SKILL_GROUPS = [
  { category: 'Backend', items: ['Ruby', 'Ruby on Rails', 'Python', 'REST APIs', 'JSON', 'Background Jobs'] },
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Responsive UI'] },
  { category: 'Data & Storage', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'ActiveRecord'] },
  { category: 'Testing & Quality', items: ['RSpec', 'Minitest', 'Capybara', 'Code Review', 'CI', 'Refactoring'] },
  { category: 'DevOps & Delivery', items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Deployments', 'Monitoring basics'] },
  { category: 'AI-assisted Workflows', items: ['Prompting', 'Code review support', 'Local AI exploration', 'API integration', 'Practical automation'] },
]

export const BLOG_POSTS = [
  {
    slug: 'what-is-ai',
    title: 'What Is AI? A Simple Explanation for Non-Technical People',
    summary:
      'AI is software that learns patterns from examples and uses those patterns to help with tasks like writing, searching, coding, and decision support.',
    readingTime: '4 min read',
    sections: [
      { heading: 'The simple idea', body: 'Artificial intelligence is not magic. It is a way of building software that can learn from examples. If a normal program follows fixed instructions, an AI system tries to find patterns in data and use those patterns to produce useful answers.' },
      { heading: 'A daily-life example', body: 'Think about how a child learns the difference between a cat and a dog. The child sees many examples, notices shapes, sounds, and behavior, and slowly improves. AI works in a similar pattern-based way, but with data instead of human experience.' },
      { heading: 'What AI is good at', body: 'AI can summarize text, explain ideas, translate languages, help write code, classify information, and generate drafts. It is useful when the task has patterns and examples.' },
      { heading: 'What AI is not good at', body: 'AI can be confidently wrong. It can misunderstand context, invent details, or miss real-world constraints. That is why important AI output should be checked by a person.' },
    ],
  },
  {
    slug: 'ai-for-developers',
    title: 'How AI Can Help Developers Without Replacing Good Thinking',
    summary: 'AI can speed up software work, but developers still need judgment, testing, architecture, and responsibility.',
    readingTime: '5 min read',
    sections: [
      { heading: 'AI is a helper, not the engineer', body: 'A good developer does more than write code. They understand the problem, choose tradeoffs, protect user data, review quality, and maintain the system over time. AI can help with code drafts and explanations, but it does not replace responsibility.' },
      { heading: 'Where it helps most', body: 'AI is useful for creating first drafts, explaining unfamiliar code, suggesting test cases, writing documentation, and finding possible edge cases. These tasks save time when the developer reviews the result carefully.' },
      { heading: 'Where humans still matter', body: 'Humans still decide what should be built, whether the solution fits the business, whether the code is safe, and whether the final behavior is correct. AI can suggest. The developer must verify.' },
      { heading: 'A safe habit', body: 'Treat AI output like a junior draft. Read it, test it, improve it, and never ship it blindly.' },
    ],
  },
  {
    slug: 'using-ai-safely',
    title: 'Using AI Safely: Simple Rules for Work, Learning, and Daily Life',
    summary: 'AI is useful, but safe usage requires privacy awareness, verification, and clear limits.',
    readingTime: '4 min read',
    sections: [
      { heading: 'Do not share private information casually', body: 'Avoid pasting passwords, secret keys, private customer records, bank details, or confidential company information into AI tools unless the tool and policy clearly allow it.' },
      { heading: 'Check important answers', body: 'AI can sound correct even when it is wrong. For legal, medical, financial, or production software decisions, verify the answer with reliable sources or a qualified person.' },
      { heading: 'Use AI to learn, not just copy', body: 'The best use of AI is asking it to explain, compare, simplify, and test your understanding. Copying without learning creates dependency. Learning with AI builds skill.' },
      { heading: 'Keep humans responsible', body: 'AI can support decisions, but people remain responsible for the final result. Use it as a tool, not as an excuse.' },
    ],
  },
]
