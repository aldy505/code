import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    type: 'library',
    stack: ['typescript'],
    title: 'Generate Passphrase',
    description: 'Secure random passphrase for Node.js',
    repository: 'https://github.com/aldy505/generate-passphrase',
    role: 'author',
  },
  {
    id: 2,
    type: 'library',
    stack: ['go'],
    title: 'Bob',
    description: 'SQL query builder as an extension of Squirrel',
    repository: 'https://github.com/aldy505/bob',
    role: 'author',
  },
  {
    id: 3,
    type: 'library',
    stack: ['go'],
    title: 'PHC Crypto',
    description: 'Password hashing with Argon2, Bcrypt, Scrypt, and PBKDF2 simplified',
    repository: 'https://github.com/aldy505/phc-crypto',
    role: 'author',
  },
  {
    id: 4,
    type: 'library',
    stack: ['typescript'],
    title: 'Malibu',
    description: 'Framework-agnostic CSRF middleware for modern Node.js applications',
    repository: 'https://github.com/tinyhttp/malibu',
    role: 'author',
  },
  {
    id: 5,
    type: 'application',
    stack: ['go', 'typescript', 'svelte', 'tailwindcss', 'postgresql', 'redis', 'sentry', 'docker'],
    title: 'Jokes Bapak2',
    description: 'Image API for serving Indonesian dad jokes',
    repository: 'https://github.com/aldy505/jokes-bapak2',
    website: 'http://jokesbapak2.pages.dev/',
    role: 'author',
  },
  {
    id: 6,
    type: 'library',
    stack: ['typescript'],
    title: 'Tinyhttp',
    description: 'Typescript-based framework as a replacement for Express',
    repository: 'https://github.com/tinyhttp/tinyhttp',
    role: 'maintainer',
  },
  {
    id: 7,
    type: 'application',
    stack: ['vuejs', 'nuxtjs', 'tailwindcss'],
    title: 'ARCET Creative Visual Studio',
    description: 'Website for ARCET',
    website: 'https://www.arcet.id',
    role: 'author',
  },
  {
    id: 8,
    type: 'application',
    stack: ['vuejs', 'nuxtjs', 'bootstrap'],
    title: 'Pesanyuk',
    description: 'Store-management application for Indonesian small to medium businesses',
    website: 'https://pesanyuk.id',
    role: 'contributor',
  },
  {
    id: 9,
    type: 'application',
    stack: ['javascript', 'redis', 'mongodb', 'sentry', 'docker'],
    title: 'Teknologi Umum Bot',
    description: 'A simple telegram bot for managing daily poll & programming-related quizes',
    repository: 'https://github.com/teknologi-umum/bot',
    role: 'author',
  },
  {
    id: 10,
    type: 'application',
    stack: ['typescript', 'nodejs', 'solidjs', 'sentry', 'docker'],
    title: 'Graphene',
    description: 'Code screenshot API as an alternative to Carbon.now.sh or Ray.so',
    repository: 'https://github.com/teknologi-umum/graphene',
    website: 'https://graphene.teknologiumum.com',
    role: 'contributor',
  },
  {
    id: 11,
    type: 'application',
    stack: ['go', 'mysql', 'redis', 'sentry', 'docker'],
    title: 'Polarite',
    description: 'Simple Pastebin clone with POST request support & secure compression',
    repository: 'https://github.com/teknologi-umum/polarite',
    website: 'https://polarite.teknologiumum.com',
    role: 'author'
  },
  {
    id: 12,
    type: 'library',
    stack: ['typescript'],
    title: 'Flourite',
    description: 'Programming language detector in Javascript',
    repository: 'https://github.com/teknologi-umum/flourite',
    role: 'author',
  },
  {
    id: 15,
    type: 'application',
    stack: ['vuejs', 'nuxtjs', 'tailwindcss'],
    title: 'Cbusters',
    description: 'Disinfecting service for workspace',
    website: 'https://www.cbusters.com',
    role: 'author',
  },
  {
    id: 16,
    type: 'application',
    stack: ['typescript', 'nextjs', 'tailwindcss'],
    title: 'Teknologi Umum Blog',
    description: 'Blog for about anything!',
    repository: 'https://github.com/teknologi-umum/blog',
    website: 'https://www.teknologiumum.com',
    role: 'maintainer',
  },
  {
    id: 17,
    type: 'library',
    stack: ['typescript'],
    title: 'SQL DSL',
    description: 'Mapped SQL query & argument from a template literal',
    repository: 'https://github.com/aldy505/sql-dsl',
    role: 'author'
  },
  {
    id: 18,
    type: 'library',
    stack: ['go'],
    title: 'Sentry Fiber',
    description: 'Unofficial Fiber handler for Sentry SDK',
    repository: 'https://github.com/aldy505/sentry-fiber',
    role: 'author'
  },
  {
    id: 19,
    type: 'library',
    stack: ['go', 'typescript'],
    title: 'Manusier',
    description: 'Humans-utils specifically for Indonesian locale',
    repository: 'https://github.com/teknologi-umum/manusier',
    role: 'author',
  }
];

export default projects;