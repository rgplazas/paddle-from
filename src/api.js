import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', // Cambia esto según tu backend
});

export default api;