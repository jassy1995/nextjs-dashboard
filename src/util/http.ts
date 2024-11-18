import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const http = axios.create({
  baseURL,
  headers: {
    // 'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use((config) => {
  const { intercept = true } = config as any;
  if (!intercept) return config;
  const currentUser = localStorage.getItem('userInfo') || '';
  const token = currentUser ? JSON.parse(currentUser) : null;
  if (token) config.headers.authorization = `Bearer ${token?.token}`;
  return config;
});

export default http;
