import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, logoutRequest, verifyTokenRequest } from "../api/customerAuth.js"; // ⚠️ Ruta y funciones específicas para el cliente

const AuthCustomerContext = createContext();

export const useAuthCustomer = () => useContext(AuthCustomerContext);

export const AuthCustomerProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // En AuthCustomerProvider:
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const signIn = async (credentials) => {
        try {
            setLoading(true);
            setErrorMsg(null);
            const res = await loginRequest(credentials);
            setUser(res.data);
            setIsAuthenticated(true);

        } catch (error) {
            const errorData = error?.response?.data;
            if (typeof errorData === "string") {
                setErrorMsg(errorData);
            } else if (typeof errorData === "object") {
                setErrorMsg(errorData.message || "Error desconocido");
            } else {
                setErrorMsg("Error desconocido");
            }
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };


    const logout = async () => {
        await logoutRequest();
        setUser(null);
        setIsAuthenticated(false);
    };

    useEffect(() => {
        const verifyLogin = async () => {
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
        verifyLogin();
    }, []);

    return (
        <AuthCustomerContext.Provider value={{ user, isAuthenticated, signIn, logout, loading }}>
            {children}
        </AuthCustomerContext.Provider>
    );
};
