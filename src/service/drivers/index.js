import api from "../axios";

const driversAPI = {
    getDrivers: () => api.get("/drivers"),
    postDrivers: (data) => api.post("/drivers", data),
    editDrivers: (id, updatedData) => api.put(`/drivers/${id}`, updatedData),
    deleteDrivers: (id) => api.delete(`/drivers/${id}`),
};

export default driversAPI;
