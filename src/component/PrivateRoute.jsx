import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const PrivateRoute = ({ element: Element }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    localStorage.setItem("redirectPath", location.pathname);
    return <Navigate to="/login" replace />;
  }

  return <Element />;
};

export default PrivateRoute;