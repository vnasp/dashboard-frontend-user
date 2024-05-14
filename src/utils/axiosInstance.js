import axios from "axios";

const axiosInstance = axios.create({
  baseURL: '/acustica-frontend-user/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;