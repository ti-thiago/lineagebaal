import axios from "axios";

const api = axios.create({
  baseURL: "104.16.243.78:3000",
  timeout: 30000,
});

export default api;
