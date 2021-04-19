import axios from "axios";

const api = axios.create({
  baseURL: "http://35.198.6.114:3000",
  timeout: 30000,
});

export default api;
