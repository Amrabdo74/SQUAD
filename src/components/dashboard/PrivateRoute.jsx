import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
 const [isAuthenticated,seyisAuthenticated] = useState(true)
  if (!isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default PrivateRoute;
