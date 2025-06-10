import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Proxied to Django
});

export default api;