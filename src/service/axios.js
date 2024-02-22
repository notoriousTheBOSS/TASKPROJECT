import axios from "axios";

const api = axios.create({
    baseURL: "https://64ae50e7c85640541d4ccbe1.mockapi.io/v1/dashboard",
});

export default api;
