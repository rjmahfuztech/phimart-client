import useAuthContext from "../hooks/useAuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, errorMsg, loading } = useAuthContext();

  if (loading) return <h1 className="text-center">Loading...</h1>;
  if (errorMsg || !user) return <Navigate to="/login" />;

  return children;
};

export default PrivateRoute;
