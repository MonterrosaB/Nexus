import React, { useState, useEffect } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  // Verificar sesión activa al cargar
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/profileCustomer", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setIsAuthenticated(true);
          setUserProfile(data);
        } else {
          setIsAuthenticated(false);
          setUserProfile(null);
        }
      } catch {
        setIsAuthenticated(false);
        setUserProfile(null);
      }
    };
    checkAuth();
  }, []);

  const toggleView = () => setIsLogin((prev) => !prev);

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/logout", {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) {
        setIsAuthenticated(false);
        setUserProfile(null);
        setIsLogin(true);
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  if (isAuthenticated && userProfile) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-full bg-white p-8 shadow-md text-center rounded-md max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Perfil de Usuario</h2>
          <p className="mb-2">
            <strong>Nombre:</strong> {userProfile.username || "Usuario"}
          </p>
          <p className="mb-6">
            <strong>Email:</strong> {userProfile.email}
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  // Si no está autenticado, muestra el login/register como tienes
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full bg-white p-8 shadow-md">
        {isLogin ? <Login /> : <Register />}

        <div className="mt-6 text-center">
          {isLogin ? (
            <p className="text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <button
                onClick={toggleView}
                className="text-blue-600 hover:underline font-medium"
              >
                Regístrate aquí
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <button
                onClick={toggleView}
                className="text-blue-600 hover:underline font-medium"
              >
                Inicia sesión aquí
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
