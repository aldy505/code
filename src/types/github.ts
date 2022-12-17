export interface GithubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  fork: boolean;
  language: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  license: License;
  topics: Record<number, string>;
  default_branch: string;
}

interface License {
  // "gpl-3.0"
  key: string;
  // "GNU General Public License v3.0"
  name: string;
  // "GPL-3.0"
  spdx_id: string;
  // "https://api.github.com/licenses/gpl-3.0"
  url: string;
  // "MDc6TGljZW5zZTk="
  node_id: string;
}

export type GithubLanguage = 'go' | 'julia' | 'javascript' | 'typescript' | 'lua' | 'shell' |'vue' | 'svelte' | 'html' | 'c#' | 'dart' | 'tex';
