import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    return (
        <Route
            {...rest}
            element={loggedInUser ? <Element /> : <Navigate to="/" />}
        />
    );
};

export default PrivateRoute;
