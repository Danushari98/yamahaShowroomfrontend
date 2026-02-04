import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://YOUR-BACKEND-URL.onrender.com/api/",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor (optional - for auth tokens)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
