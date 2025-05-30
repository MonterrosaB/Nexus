import { useState, createContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import { useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signUp = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setErrors([]);
      return true;
    } catch (error) {
      const errorData = error.response?.data;

      if (Array.isArray(errorData)) {
        setErrors(errorData);
      } else if (typeof errorData === "string") {
        setErrors([errorData]);
      } else if (typeof errorData === "object") {
        setErrors(Object.values(errorData));
      } else {
        setErrors(["Error desconocido"]);
      }
      return false;
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
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

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <AuthContext.Provider
      value={{ signUp, signin, user, isAuthenticated, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
