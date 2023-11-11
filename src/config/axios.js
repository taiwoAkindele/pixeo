import axios from "axios";

const defaultOptions = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(
  (config) => {
    if (config && config.headers) {
      const token = localStorage.getItem("token");
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default axiosInstance;

export const createAPIRequest = (config) => axiosInstance(config);
