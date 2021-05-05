import axios from "axios";

const api = axios.create({
  baseURL: "https://lineagebaal-2-m5mrf.ondigitalocean.app/peixinho",
  timeout: 30000,
});

export default api;
