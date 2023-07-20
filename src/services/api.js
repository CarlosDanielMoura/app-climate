//017c3cc301e8494987e93bdd68c89dfd

//https://api.openweathermap.org/data/2.5/forecast?q=Coromandel&units=metric&appid=7b8c0d8073cfe57c6d7f8765a07c55e6&lang=pt

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/forecast",
});

export default api;
