import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (user == null) return <h1 className="text-center">Loading...</h1>;
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
