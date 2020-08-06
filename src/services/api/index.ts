import axios from "axios";

const api = axios.create({
  baseURL: "https://belasartesjsons.blob.core.windows.net",
});

export default api;
