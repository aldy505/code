import { GithubRepository } from './github';

export type Stack =
  'bootstrap' |
  'bulma' |
  'docker' |
  'go' |
  'javascript' |
  'julia' |
  'lua' |
  'mongodb' |
  'mysql' |
  'nextjs' |
  'nodejs' |
  'nuxtjs' |
  'postgresql' |
  'redis' |
  'rust' |
  'sass' |
  'sentry' |
  'solidjs' |
  'tailwindcss' |
  'typescript' |
  'vuejs' |
  'svelte'

export interface Project {
  id: number;
  type: 'library' | 'application' | 'plugin';
  stack: Stack[];
  title: string;
  description: string;
  repository?: string;
  website?: string;
  role: 'author' | 'contributor' | 'maintainer';
  details?: string;
  github?: GithubRepository;
}
