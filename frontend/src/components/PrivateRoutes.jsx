import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/authContextAdmin";

export default function PrivateRoute() {
    const { isAuthenticated, loading } = useAuth();

    if (loading) return <h2>Verificando sesión...</h2>;

    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
}
