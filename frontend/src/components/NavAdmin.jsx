import React from "react";
import { Link, useLocation } from "react-router-dom";
import Nexus from "../assets/Nexus.svg"

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
        </ul>
      </nav>
    </aside>
  );
};

export default NavAdmin;
