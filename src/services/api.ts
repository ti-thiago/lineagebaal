import axios from "axios";

const api = axios.create({
  baseURL: "https://lineagebaal-dpmhb.ondigitalocean.app/peixinho",
  timeout: 30000,
});

export default api;
