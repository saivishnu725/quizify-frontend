import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2828",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
