export const BLOG_POSTS = [
  {
    slug: 'what-is-ai-in-simple-words',
    title: 'What Is AI? A Simple Explanation for Non-Technical People',
    description:
      'A clear beginner-friendly explanation of artificial intelligence, what it can do, what it cannot do, and how people should use it carefully.',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-01',
    readingTime: '8 min read',
    audience: 'Beginners, students, parents, business owners',
    tags: ['AI Basics', 'Non-technical Guide', 'Digital Literacy'],
    takeaway:
      'AI is useful software that learns patterns from examples, but it still needs human judgment, context, and verification.',
    sections: [
      {
        heading: 'The simple idea',
        body: [
          'Artificial intelligence, usually called AI, is software that can learn patterns from examples and use those patterns to produce useful results. A normal software program follows exact rules written by a developer. AI is different because it can study many examples and then make a likely prediction, suggestion, answer, summary, or draft.',
          'A simple way to understand it is to think about learning from experience. A child learns the difference between a cat and a dog after seeing many examples. The child notices size, shape, sound, and behavior. AI does something similar with data. It does not understand the world like a human, but it can find patterns in text, images, numbers, audio, or code.'
        ],
      },
      {
        heading: 'What AI can do well',
        body: [
          'AI can help with tasks where patterns matter. It can summarize a long article, rewrite a message, translate between languages, classify customer feedback, explain a technical topic, suggest code, find possible mistakes, and help people think through ideas. These tasks are useful because they save time and reduce the blank-page problem.',
          'For example, a business owner can ask AI to turn rough notes into a polite email. A student can ask for a simpler explanation of a topic. A developer can ask AI to review code and suggest test cases. In each case, AI works best as a helper that speeds up the first draft.'
        ],
      },
      {
        heading: 'What AI cannot do reliably',
        body: [
          'AI can be confidently wrong. It may invent details, misunderstand a question, ignore local context, or produce an answer that sounds correct but is not. This is why AI should not be treated as an authority by itself. It is a tool, not a replacement for judgment.',
          'AI also does not automatically know your private situation. If you ask it for business, legal, financial, or medical advice, it may miss facts that matter. Important decisions should be checked with reliable sources or qualified people.'
        ],
      },
      {
        heading: 'How to use AI safely',
        body: [
          'Use AI for drafts, explanations, comparisons, and checklists. Do not blindly copy the result. Read it, edit it, and verify important claims. Avoid sharing passwords, private customer data, secret keys, personal documents, or company information unless you are sure the tool and policy allow it.',
          'The safest habit is simple: ask AI to help you think, but keep the final responsibility with yourself. AI can be very helpful when humans stay in control.'
        ],
      },
    ],
  },
  {
    slug: 'how-ai-helps-developers-without-replacing-them',
    title: 'How AI Helps Developers Without Replacing Good Engineering Judgment',
    description:
      'A practical explanation of how developers can use AI for coding, debugging, testing, and documentation without depending on it blindly.',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-01',
    readingTime: '10 min read',
    audience: 'Developers, founders, hiring managers, students',
    tags: ['AI for Developers', 'Software Engineering', 'Code Quality'],
    takeaway:
      'AI can speed up software delivery, but architecture, verification, security, and responsibility still belong to the engineer.',
    sections: [
      {
        heading: 'AI is useful, but it is not the engineer',
        body: [
          'Software engineering is not only typing code. A good engineer understands the problem, asks better questions, chooses tradeoffs, designs maintainable structure, protects data, writes tests, reviews behavior, and keeps the system understandable for future changes. AI can help with many steps, but it does not own the product outcome.',
          'That difference matters. AI can produce a controller, a React component, a SQL query, or a test draft. But it may not know your business rules, deployment limits, team style, user expectations, or security boundaries. The developer must still decide whether the solution is correct.'
        ],
      },
      {
        heading: 'Where AI helps most in daily development',
        body: [
          'AI is strongest when used to reduce friction. It can explain unfamiliar code, suggest a refactor, create a first draft of tests, write documentation, generate example data, compare implementation options, and identify edge cases. This is especially useful when the engineer already understands the goal and can review the output.',
          'For example, a Rails developer can ask AI to identify missing model validations, generate RSpec examples, explain a slow query, or draft a migration. A frontend developer can ask it to simplify component state, improve accessibility labels, or suggest responsive layout improvements.'
        ],
      },
      {
        heading: 'Where AI output needs strict review',
        body: [
          'Security-sensitive code, authentication, payments, permissions, database migrations, background jobs, and data deletion logic need careful human review. AI may write code that works in a simple case but fails in production. It may also suggest outdated APIs, insecure patterns, or hidden performance problems.',
          'A professional workflow should treat AI output like a junior draft. It can be useful, but it needs review, tests, and context. If the code is important enough to ship, it is important enough to verify.'
        ],
      },
      {
        heading: 'A responsible AI-assisted workflow',
        body: [
          'Start by explaining the requirement clearly. Ask AI for options, not just one answer. Review the tradeoffs. Use the draft as a starting point. Then run tests, read the code, simplify it, and check edge cases. This process keeps the speed benefit without losing engineering control.',
          'The best developers will not be the people who copy the most AI output. They will be the people who use AI to think faster while still applying strong judgment.'
        ],
      },
    ],
  },
  {
    slug: 'using-ai-safely-at-work',
    title: 'Using AI Safely at Work: Privacy, Accuracy, and Responsibility',
    description:
      'Simple rules for using AI in professional environments without leaking private data, trusting wrong answers, or weakening responsibility.',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-01',
    readingTime: '9 min read',
    audience: 'Employees, freelancers, founders, developers',
    tags: ['AI Safety', 'Privacy', 'Workflows'],
    takeaway:
      'AI is safest when people avoid private data, verify important answers, and keep humans responsible for final decisions.',
    sections: [
      {
        heading: 'AI safety starts with privacy',
        body: [
          'The first rule is simple: do not paste private information into AI tools casually. Passwords, API keys, customer records, payroll data, contracts, bank details, medical details, private messages, and confidential company code should be protected. Even when a tool is trustworthy, your company policy may not allow that data to be shared.',
          'Before using AI at work, ask whether the information is public, internal, confidential, or restricted. Public information is usually safer. Confidential or restricted information needs approval and proper tooling.'
        ],
      },
      {
        heading: 'Accuracy still needs checking',
        body: [
          'AI can answer quickly, but quick does not always mean correct. It can mix facts, miss updates, misunderstand a local law, or invent a source. The risk is higher when the topic is legal, financial, medical, security-related, or highly specific.',
          'Use AI to get direction, structure, and possible options. Then verify the final answer using documentation, trusted sources, tests, or expert review. This is not a weakness of AI usage; it is part of professional usage.'
        ],
      },
      {
        heading: 'Responsibility cannot be outsourced',
        body: [
          'If an AI-written email creates confusion, a human owns the result. If AI-generated code breaks production, a human owns the result. If AI advice leads to a poor business decision, a human owns the result. This is why every AI-assisted workflow needs a responsible reviewer.',
          'For teams, this means AI should support existing quality processes instead of replacing them. Code review, QA, documentation, security checks, and approval flows still matter.'
        ],
      },
      {
        heading: 'Practical rules anyone can follow',
        body: [
          'Use AI for drafts, summaries, brainstorming, checklists, and explanations. Avoid sharing secrets. Ask for sources when facts matter. Test code before shipping. Keep a human reviewer for important decisions. These rules are simple, but they prevent many common problems.',
          'AI is powerful when used with discipline. The safest teams are not the teams that avoid AI completely. They are the teams that use it clearly, carefully, and responsibly.'
        ],
      },
    ],
  },
  {
    slug: 'ruby-on-rails-for-business-apps',
    title: 'Why Ruby on Rails Still Works Well for Business Web Applications',
    description:
      'A practical business-friendly explanation of why Ruby on Rails remains useful for dashboards, portals, CRMs, marketplaces, and internal systems.',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-01',
    readingTime: '9 min read',
    audience: 'Founders, product owners, technical managers',
    tags: ['Ruby on Rails', 'Business Apps', 'Web Development'],
    takeaway:
      'Rails is still valuable because it helps teams build complete, maintainable business applications without unnecessary complexity.',
    sections: [
      {
        heading: 'Rails is built for complete products',
        body: [
          'Ruby on Rails is a web framework designed to help developers build real applications quickly and cleanly. It includes routing, database models, controllers, views, background jobs, email support, validations, migrations, and many conventions that keep projects organized.',
          'For business software, this matters. Many products need user accounts, dashboards, admin panels, forms, reports, notifications, file uploads, and role-based workflows. Rails gives a strong foundation for these needs without forcing the team to assemble every part from scratch.'
        ],
      },
      {
        heading: 'Good conventions reduce confusion',
        body: [
          'A business application usually lives for years. New features are added, bugs are fixed, and requirements change. Rails conventions help developers understand where things belong. Models handle data rules, controllers handle requests, views handle presentation, and migrations track database changes.',
          'This structure is not only helpful for developers. It also helps the business because maintainable software is easier to improve. A messy product becomes expensive. A clear product stays flexible.'
        ],
      },
      {
        heading: 'Rails works well with modern frontend needs',
        body: [
          'Rails does not mean old-fashioned interfaces. A Rails backend can work with Hotwire, Stimulus, React, TypeScript, mobile apps, APIs, and modern deployment workflows. The right choice depends on the product, team, and budget.',
          'For many dashboards and portals, Rails with a focused frontend is enough. For richer interfaces, Rails can provide the backend while React handles interactive screens. The important point is choosing the simplest approach that serves users well.'
        ],
      },
      {
        heading: 'When Rails is a good fit',
        body: [
          'Rails is a strong fit for CRMs, admin systems, marketplaces, education platforms, property platforms, reporting tools, SaaS dashboards, internal tools, and workflow-heavy products. It is especially useful when the application needs reliable database behavior and fast iteration.',
          'No framework is perfect for everything. But for many business web applications, Rails remains a practical, mature, and productive choice.'
        ],
      },
    ],
  },
  {
    slug: 'what-makes-a-good-developer-portfolio',
    title: 'What Makes a Good Developer Portfolio?',
    description:
      'A practical guide to building a developer portfolio that explains skills, projects, credibility, and contact details clearly.',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-01',
    readingTime: '8 min read',
    audience: 'Developers, students, freelancers',
    tags: ['Portfolio', 'Career', 'Personal Branding'],
    takeaway:
      'A good portfolio is clear, honest, easy to navigate, and focused on proof instead of decoration.',
    sections: [
      {
        heading: 'A portfolio should answer simple questions',
        body: [
          'A developer portfolio does not need to be complicated. It should quickly answer: Who are you? What do you build? What technologies do you use? What have you worked on? How can someone contact you? If a visitor cannot answer these questions in one or two minutes, the portfolio is not doing its job.',
          'Design matters, but clarity matters more. A beautiful page with vague content is weaker than a simple page with clear proof.'
        ],
      },
      {
        heading: 'Projects need context, not just names',
        body: [
          'Many portfolios list project names without explaining why they matter. A stronger project section explains the problem, your role, the stack, the result, and whether the code or demo is public. This helps recruiters, clients, and collaborators understand your real contribution.',
          'If a project is private, say so honestly. You can still explain the type of work without revealing confidential details.'
        ],
      },
      {
        heading: 'Claims should be believable',
        body: [
          'A public portfolio should avoid fake confidence. Do not claim to be an expert in every technology. Do not show fake testimonials. Do not list confidential company work as personal ownership. Honest wording builds more trust than exaggerated wording.',
          'The strongest portfolios show focus. They explain what the developer is good at and where they are growing.'
        ],
      },
      {
        heading: 'Good UX helps credibility',
        body: [
          'Buttons should look like buttons. Links should look like links. Navigation should be obvious. Text should be readable on mobile. The visitor should not need to guess what is clickable. Small UX details affect trust because they show how carefully the developer thinks about users.',
          'A portfolio is not only a resume. It is also a small product. The quality of the portfolio reflects the quality of the thinking behind it.'
        ],
      },
    ],
  },
  {
    slug: 'how-to-think-about-software-quality',
    title: 'How to Think About Software Quality Without Overcomplicating It',
    description:
      'A simple explanation of software quality for non-technical stakeholders and junior developers, covering readability, tests, performance, and maintainability.',
    publishedAt: '2026-07-01',
    updatedAt: '2026-07-01',
    readingTime: '9 min read',
    audience: 'Junior developers, founders, product teams',
    tags: ['Software Quality', 'Maintainability', 'Testing'],
    takeaway:
      'Software quality means the product works today and can still be changed safely tomorrow.',
    sections: [
      {
        heading: 'Quality is more than whether the app works today',
        body: [
          'A feature can work during a demo and still be low quality. Real quality means the feature works for users, handles common edge cases, is understandable to developers, and can be changed later without breaking the whole system.',
          'This is why professional software teams care about naming, structure, tests, error handling, performance, and deployment process. These things may not always be visible to the user, but they protect the product over time.'
        ],
      },
      {
        heading: 'Readable code is a business advantage',
        body: [
          'Readable code reduces future cost. When code is clear, a developer can fix bugs faster, add features with less risk, and onboard new team members more easily. When code is confusing, every change becomes slower and more dangerous.',
          'Good code does not need clever tricks. It needs clear names, small methods, simple flow, and structure that matches the problem.'
        ],
      },
      {
        heading: 'Tests are protection, not decoration',
        body: [
          'Tests help teams change software with confidence. They catch mistakes before users do. They also document expected behavior. A useful test suite does not need to test every tiny detail, but it should protect the important paths: permissions, payments, data changes, reports, and workflows users rely on.',
          'For a business, tests reduce risk. For developers, tests reduce fear. For users, tests reduce bugs.'
        ],
      },
      {
        heading: 'Quality is a habit',
        body: [
          'Software quality is not one big task at the end. It is a habit built into daily work. Review code. Keep features small. Remove dead code. Improve names. Watch performance. Listen to user problems. Write tests for important behavior.',
          'The best software is not always the most complex. It is the software that solves the problem clearly and stays maintainable as the product grows.'
        ],
      },
    ],
  },
]

export function findPost(slug) {
  return BLOG_POSTS.find(post => post.slug === slug)
}
