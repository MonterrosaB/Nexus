import React, { useState } from "react";
import Login from "../../components/Login";
import Register from "../../components/Register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => setIsLogin((prev) => !prev);

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
