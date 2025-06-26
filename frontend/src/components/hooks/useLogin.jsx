import axios from "axios";
import { useState, useEffect } from "react";

const useLogin = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/profile", {
                    withCredentials: true,
                });
                setUser(res.data); // Usuario autenticado si token es válido
            } catch (error) {
                setUser(null); // No autenticado
            }
        };

        fetchProfile();
    }, []);

    return {

    }
}
export default useLogin;