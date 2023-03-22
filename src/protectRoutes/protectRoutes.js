import { Navigate } from "react-router-dom";

export const ProtectRoutes = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) {
    return <Navigate to="/login" />;
  } else return children;
};
