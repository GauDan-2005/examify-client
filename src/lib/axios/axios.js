import axios from "axios";

// instance
export const axios_instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptor
axios_instance.interceptors.request.use(
  (config) => {
    // get token and json parse as ls have stringified data
    const token = JSON.parse(localStorage.getItem("user"))?.token || null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
