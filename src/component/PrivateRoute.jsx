import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // التحقق من تسجيل الدخول
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

export default PrivateRoute;
