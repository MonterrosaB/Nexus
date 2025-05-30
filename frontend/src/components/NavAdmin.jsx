import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nexus from "../assets/Nexus.svg"
import { logoutRequest } from "../api/auth"; // debes tener esta función
import { useAuth } from "../context/authContext";

const links = [
  { to: "/admin", label: "Inicio" },
  { to: "/admin/registrar-datos", label: "Registrar Datos" },
  { to: "/admin/agregar-producto", label: "Agregar Productos" },
  { to: "/admin/agregar-usuario", label: "Agregar Usuarios" },
  { to: "/admin/tablas", label: "Tablas de datos" },
  { to: "/admin/perfil", label: "Perfil" },
  { to: "/admin/cambiar-cuenta", label: "Cambiar de cuenta" },
];

const NavAdmin = () => {
    const { setUser, setIsAuthenticated } = useAuth();

    const handleLogout = async () => {
  try {
    await logoutRequest(); // elimina la cookie desde el backend
    // limpiar estado de sesión en el frontend (si usas contexto)
    setUser(null);
    setIsAuthenticated(false);
  } catch (error) {
    console.error("Error al cerrar sesión", error);
  }
};

  const { pathname } = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-white hidden lg:flex flex-col fixed z-10 shadow-md text-[#2B3674]">
      <div className="flex items-center justify-center p-6 gap-2 shadow-sm">
        <img src={Nexus} alt="Logotipo Nexus" className="w-min" />
        <span className="text-2xl font-semibold">Nexus</span>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${pathname === link.to
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "hover:bg-gray-100"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <button
      onClick={handleLogout} // Asegúrate de definir esta función
      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all font-semibold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-10V5" />
      </svg>
      Cerrar sesión
    </button>
        </ul>
      </nav>

  
    </aside>
  );
};

export default NavAdmin;
