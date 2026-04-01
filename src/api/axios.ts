import axios from "axios";

export const api = axios.create({
  baseURL: "https://delivery-app-server-oq2h.onrender.com/delivery-app",
});
