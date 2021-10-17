import { GithubRepository } from '../types/github';

async function getRepositories(): Promise<GithubRepository[]> {
  try {
    const response = await (await fetch('https://api.github.com/users/aldy505/repos')).json() as GithubRepository[];
    const randNumber = Math.random() * (response.length - 5);
    return Promise.resolve(response.sort().slice(randNumber, randNumber + 5));
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getRepositories;
