const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://raghavk.dev/',
  title: 'RK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Raghav Khandelwal',
  role: 'Software Engineer',
  picture: '',

  description:
    'I design high-scale backend architectures, deploy optimized AI/LLM pipelines, and ship clean, developer-friendly APIs. Equal parts rigorous engineer and rapid prototyper. Active in the market for New Grad SWE roles.',
  resume: '/resume_Raghav_.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/raghav-k847/',
    github: 'https://github.com/Raghav847',
    leetcode: 'https://leetcode.com/u/Badbane/',
  },
}

const experience = [
  {
    type: 'Work',
    organization: 'Community Dreams Foundation',
    title: 'Software Developer',
    date: 'Mar 2026 - Present',
    location: 'Remote, USA',
    highlights: [
      'Developed a TypeScript and Express admin REST API that replaced 10+ hours per week of manual donor exports with self-serve access.',
      'Integrated Stripe and Mailchimp APIs to automate recurring payment processing and campaign triggers.',
      'Implemented JWT-based RBAC with middleware guards across volunteer, staff, and admin roles.',
      'Built a Redis and Bull background job system for reports and email dispatch, reducing UI wait time by 70%.',
    ],
  },
  {
    type: 'Education',
    organization: 'Washington State University',
    title: 'Master of Science in Computer Science',
    date: 'Dec 2025',
    location: 'Pullman, WA',
    highlights: [
      'Relevant coursework: Advanced Algorithms, Distributed Systems, Machine Learning, and Database Systems.',
    ],
  },
  {
    type: 'Work',
    organization: 'Headstarter AI',
    title: 'Software Engineering Fellow',
    date: 'Jun 2024 - Jul 2024',
    location: 'Remote, USA',
    highlights: [
      'Deployed a full-stack LLM chatbot with Next.js, OpenAI streaming, and WebSockets, supporting 500+ concurrent sessions with sub-300ms latency.',
      'Engineered a TypeScript and Redux state layer with optimistic updates that reduced perceived load time by 40%.',
    ],
  },
  {
    type: 'Work',
    organization: 'DXC Technology',
    title: 'Associate Professional Software Engineer',
    date: 'Jun 2022 - Nov 2022',
    location: 'India',
    highlights: [
      'Designed and deployed a Python and SQL ETL pipeline moving 6+ GB per month from DB2 into PostgreSQL.',
      'Built REST APIs for insurance policy operations, sustaining 99.5% uptime at 500+ RPM.',
      'Containerized enterprise applications with Docker and configured AWS services, reducing environment setup time by 60%.',
      'Optimized SQL Server and DB2 queries through index tuning and join refactoring, cutting latency from 4.2s to 800ms.',
    ],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Snowpack Prediction',
    description:
      'Transformer-powered SWE forecasting across 9M+ weather records with a deployable prediction UI.',
    stack: ['Python', 'PyTorch', 'Flask', 'React'],
    sourceCode: '',
    livePreview: 'https://badgr.com/public/assertions/bzcGorNqSwqoNwf_Ypmh3g?identity__email=raghav.khandelwal%40wsu.edu',
    image: '',
  },
  {
    name: 'Snippetbox',
    description:
      'Production-grade Go web app with clean middleware, panic recovery, and a MySQL-backed architecture.',
    stack: ['Go', 'MySQL', 'net/http', 'Go Templates'],
    sourceCode: 'https://github.com/Raghav847/snippetbox',
    livePreview: '',
  },
  {
    name: 'AI Agent',
    description:
      'Multi-tool RAG agent that lifts answer quality with semantic retrieval and reusable prompt workflows.',
    stack: ['TypeScript', 'Node.js', 'Python', 'OpenAI API', 'RAG'],
    sourceCode: 'https://github.com/Raghav847/agents-production',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'TypeScript',
  'Go',
  'JavaScript',
  'SQL',
  'C++',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Redux',
  'Flask',
  'PyTorch',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Docker',
  'AWS',
  'Kubernetes',
  'Redis',
  'OpenAI API',
  'RAG Pipelines',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'raghav.k.0847@gmail.com',
}

export { header, about, experience, projects, skills, contact }
