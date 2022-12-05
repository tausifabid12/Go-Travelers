import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../ProviderContext";

const PrivatePage = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>loading .........</div>;
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default PrivatePage;
