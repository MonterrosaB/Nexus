import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/admin/inicio", label: "Inicio" },
  { to: "/admin/registrar-datos", label: "Registrar Datos" },
  { to: "/admin/agregar-productos", label: "Agregar Productos" },
  { to: "/admin/usuarios", label: "Agregar Usuarios" },
  { to: "/admin/tablas", label: "Tablas de datos" },
  { to: "/admin/perfil", label: "Perfil" },
  { to: "/admin/cambiar-cuenta", label: "Cambiar de cuenta" },
];

const NavAdmin = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-white border-r hidden lg:flex flex-col fixed z-10">
      <div className="h-16 flex items-center justify-center border-b">
        <span className="text-2xl font-bold text-black">Nexus</span>
      </div>

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {links.map((link, i) => (
            <li key={i}>
              <Link
                to={link.to}
                className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all ${
                  pathname === link.to
                    ? "bg-blue-100 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
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
