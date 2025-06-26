import { useState, createContext, useEffect } from "react";
import { logoutRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import { useContext } from "react";

const AuthContext = createContext();

export const AuthProviderAdmin = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log("user", user);

      console.log(res);

      setUser(res.data);
      setIsAuthenticated(true);
      setErrors([]);

    } catch (error) {
      const errorData = error?.response?.data;

      if (Array.isArray(errorData)) {
        setErrors(errorData);
      } else if (typeof errorData === "string") {
        setErrors([errorData]);
      } else if (typeof errorData === "object") {
        setErrors([errorData.message || "Error desconocido"]);
      } else {
        setErrors(["Error desconocido"]);
      }
    }
  };

  const logout = async () => {
    try {
      await logoutRequest();
      setUser(null);
      setIsAuthenticated(false);
    } catch (err) {
      console.error("Error al cerrar sesión", err);
    }
  };

  // ✅ Verificar token al iniciar la app
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await verifyTokenRequest();
        setUser(res.data);
        setIsAuthenticated(true);
      } catch {
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => setErrors([]), 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{ signin, logout, user, isAuthenticated, errors, loading }}    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
