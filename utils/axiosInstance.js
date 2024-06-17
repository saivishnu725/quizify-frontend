import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2828",
  headers: {
    "Content-Type": "application/json",
    "Accept": "*/*",
  },
  timeout: 10000,
  withCredentials: true,
});

export default axiosInstance;
