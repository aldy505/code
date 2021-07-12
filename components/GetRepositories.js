import axios from 'axios';

async function getRepositories() {
  try {
    const response = (await axios.get('https://api.github.com/users/aldy505/repos')).data;
    const randNumber = Math.random() * (response.length - 5);
    return Promise.resolve(response.sort().slice(randNumber, randNumber + 5));
  } catch (error) {
    return Promise.reject(error);
  }
}

export default getRepositories;
