import { create } from "zustand";
import driversAPI from "../service/drivers";

const useDriverStore = create((set) => ({
    drivers: [],
    addDriver: (driver) =>
        set((state) => ({
            drivers: [...state.drivers, driver],
        })),
    getDrivers: () => {
        driversAPI.getDrivers().then((res) => set({ drivers: res.data }));
    },
}));

export default useDriverStore;
