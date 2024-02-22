import * as React from "react";
import { createBrowserRouter, Navigate, useRoutes } from "react-router-dom";
import Login from "../pages/Auth/Login";
import Layout from "../pages/Layout/Layout";
const GuardedDashboard = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        return <Layout />;
    } else {
        return <Navigate to="/" />;
    }
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <GuardedDashboard />,
    },
]);

export const logout = () => {
    localStorage.removeItem("loggedInUser");
};

export default router;
