import api from "../axios";

const loginAPI = {
    login: (user) => api.get("/login", user),
};
export default loginAPI;
