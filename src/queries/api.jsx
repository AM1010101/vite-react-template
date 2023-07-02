import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://featherweight-production-c1c1.up.railway.app/',
});
