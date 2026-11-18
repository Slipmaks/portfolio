export const profile = {
  name: 'Maksym Matsydulskas',
  title: 'Senior Front-End Engineer · Lead',
  focus: 'TypeScript',
  summary:
    'Senior front-end engineer and lead, 5+ years across telecom, fintech and B2B SaaS. Led five apps for a fiber network operator: 0 to 884 unit tests, builds from 26 s to 4 s.',
  lead: 'Front-end lead across a five-app platform for a fiber network operator. I led a refactor from 0 to 884 unit tests without a feature freeze, cut builds from 26 s to 4 s, and built two TypeScript apps from scratch.',
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
  cases?: string[];
  alongside?: boolean;
};

export const experience: Job[] = [
  {
    company: 'CONNECT 972',
    country: 'Israel',
    role: 'Front-End Engineer · front-end lead',
    period: '03/2025 – 10/2026',
    note: 'Front-end lead across five apps of an enterprise fiber network platform: admin panel, customer portal, ticket portal, payment store and multi-tenant call center. Built the ticket portal and payment store from scratch in TypeScript and moved two apps from Vue CLI to Vite.',
    cases: ['architecture-overhaul', 'dashboard-builder', 'ticket-portal-and-payment-store'],
  },
  {
    company: 'SDA',
    country: 'Estonia',
    role: 'Front-End Engineer · part-time contract',
    period: '03/2026 – 07/2026',
    note: 'Brought in to take over a 250+ component B2B platform from the previous developer, as its only dedicated front-end developer. Built sign-in and access for six permission roles, the product editor and the front-end architecture docs.',
  },
  {
    company: 'EVE.calls',
    country: 'USA',
    role: 'Front-End Engineer · part-time',
    period: '12/2024 – 03/2025',
    note: 'Sole front-end developer extending a node-based editor for AI voice-call scenarios: added extract-and-compare branching to speech recognition and an SMS node.',
  },
  {
    company: 'Onepointcollab / OneVOIPlanet',
    country: 'Ukraine',
    role: 'Front-End Developer',
    period: '09/2023 – 06/2024',
    note: 'One of two core front-end developers on a cloud telephony customer cabinet: 80+ components across 8 modules, CRM integrations with SalesDrive, KeyCRM and NetHunt, and the upgrade to Vite 5 and Vue 3.4.',
    cases: ['embeddable-callback-widget'],
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
    alongside: true,
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
