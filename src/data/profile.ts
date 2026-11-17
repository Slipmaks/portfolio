export const profile = {
  name: 'Maksym Matsydulskas',
  title: 'Senior Front-End Engineer',
  focus: 'TypeScript',
  summary:
    '5+ years in web development across telecom, fintech and B2B SaaS. Front-end lead on an enterprise fiber network platform: architecture, code review, mentoring two developers, and working directly with the client.',
  lead: 'Front-end lead on an enterprise fiber network platform: architecture, code review, mentoring two developers, and working directly with the client.',
  spec: [
    { label: 'Experience', value: '5+ yrs' },
    { label: 'Core stack', value: 'TypeScript · Vue 3 / Nuxt · React' },
    { label: 'Domains', value: 'Telecom · Fintech · B2B SaaS' },
    { label: 'Availability', value: 'Full-time or contract · Now' },
    { label: 'Timezone', value: 'UTC+2' },
  ],
  status: 'Open to work',
  contactNote: 'Looking for a senior or lead front-end role, full-time or contract. LinkedIn gets the fastest reply.',
  location: 'Ukraine · Remote (UTC+2)',
  email: 'slipmaks@gmail.com',
  linkedin: 'https://www.linkedin.com/in/maksym-matsydulskas',
  github: 'https://github.com/Slipmaks',
  telegram: 'https://t.me/m_maksym_n',
  cv: '/Maksym_Matsydulskas_Resume.pdf',
  skills: [
    { group: 'Front end', items: ['TypeScript', 'Vue 3', 'Nuxt', 'React', 'Pinia'] },
    { group: 'Testing & build', items: ['Vitest', 'Playwright', 'Vite'] },
    { group: 'Back end', items: ['Node.js (Hono)', 'PostgreSQL'] },
  ],
};

export type Job = {
  company: string;
  country: string;
  role: string;
  period: string;
  note: string;
};

export const experience: Job[] = [
  {
    company: 'CONNECT 972',
    country: 'Israel',
    role: 'Front-End Engineer · front-end lead',
    period: '03/2025 – 10/2026',
    note: 'Led the front end of an enterprise fiber network management platform; built a ticketing portal and a payment store from scratch.',
  },
  {
    company: 'SDA',
    country: 'Estonia',
    role: 'Front-End Engineer · part-time contract',
    period: '03/2026 – 07/2026',
    note: 'Sole front-end developer on a 250+ component B2B platform with six permission roles.',
  },
  {
    company: 'EVE.calls',
    country: 'USA',
    role: 'Front-End Engineer · part-time',
    period: '12/2024 – 03/2025',
    note: 'Sole front-end developer on a node-based editor for AI voice-call scenarios.',
  },
  {
    company: 'Onepointcollab / OneVOIPlanet',
    country: 'Ukraine',
    role: 'Front-End Developer',
    period: '09/2023 – 06/2024',
    note: 'One of two core front-end developers on a cloud telephony customer cabinet: 80+ components across 8 modules.',
  },
  {
    company: 'E-groshi',
    country: 'Ukraine',
    role: 'Front-End Developer',
    period: '04/2023 – 08/2023',
    note: 'Built an investment CRM as the sole developer, with a ChatGPT assistant and a Telegram bot.',
  },
  {
    company: 'Visit Everywhere',
    country: 'Ukraine',
    role: 'Front-End Developer',
    period: '11/2022 – 02/2023',
    note: 'B2B restaurant management admin panel in a three-person startup.',
  },
  {
    company: 'University of Customs and Finance',
    country: 'Ukraine',
    role: 'Web Developer · part-time',
    period: '01/2021 – 01/2026',
    note: 'Built and maintained the university website; Lighthouse Performance from under 30 to 98.',
  },
];

export type Project = {
  name: string;
  description: string;
  stack: string;
  url?: string;
};

export const projects: Project[] = [
  {
    name: 'Tech graph',
    description: 'An interactive map of the technologies I know, how they connect, and how deeply I have used each one.',
    stack: 'React · TypeScript · ELK',
    url: 'https://my-tech-graph.vercel.app',
  },
  {
    name: '“Python-1” Station',
    description: 'A browser game used in grade-9 classrooms, with server-side answer checking and a teacher dashboard.',
    stack: 'SvelteKit · Svelte 5 · Drizzle · Turso · Playwright',
    url: 'https://station-python-1.vercel.app',
  },
  {
    name: 'Challenge tracker',
    description: 'Set a goal and mark it off day by day; miss one and the streak resets. An installable PWA in Rust compiled to WebAssembly, with no hand-written JavaScript.',
    stack: 'Rust · Leptos · Trunk · PWA',
    url: 'https://slipmaks.github.io/challenge-tracker',
  },
];
