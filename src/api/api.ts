import axios from 'axios';

const backendURL = '';
const api = axios.create({
  baseURL: backendURL,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
});


export default api;
// src/api/api.ts

export * from './projects';
export * from './profile';
