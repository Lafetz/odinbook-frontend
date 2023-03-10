import { Navigate } from "react-router-dom";
import { UserContext } from "./userContext";
import { useContext } from "react";
export const ProtectRoutes = ({ children }) => {
  const { user, setUser } = useContext(UserContext);
  if (Object.keys(user).length == 0) {
    return <Navigate to="/login" />;
  } else return children;
};
