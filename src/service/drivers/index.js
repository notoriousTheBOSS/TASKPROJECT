import api from "../axios";

const driversAPI = {
    getDrivers: () => api.get("/drivers"),
    getOneDriver: (id) => api.get(`/drivers/${id}`),
    postDrivers: (data) => api.post("/drivers", data),
    editDrivers: (id, updatedData) => api.put(`/drivers/${id}`, updatedData),
    deleteDrivers: (id) => api.delete(`/drivers/${id}`),
};

export default driversAPI;
