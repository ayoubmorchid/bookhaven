import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PrivateRoute = ({ element: Element }) => {
  return isAuthenticated() ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;