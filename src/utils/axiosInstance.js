import axios from "axios";

const axiosInstance = axios.create({
  baseURL: '/dashboard-frontend-user/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default axiosInstance;