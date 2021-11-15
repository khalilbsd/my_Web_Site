import axios from 'axios'

const url="https://api.github.com/users/khalilbsd"


export const fetchGithubAccount=()=>axios.get(url);
export const fetchGithubRepos=()=>axios.get(url+'/repos');

