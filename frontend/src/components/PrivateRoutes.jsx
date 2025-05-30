import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/authContext";

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
};
export default PrivateRoute;