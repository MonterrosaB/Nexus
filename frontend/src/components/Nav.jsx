import React, { useState } from "react";
import {
    Heart,
    Package,
    User,
    ShoppingBag,
    Phone,
    ChevronDown
} from "lucide-react";

import { Link } from "react-router";


const Nav = () => {

    const [openDropdown, setOpenDropDown] = useState(false);

    return (
        <header className="w-full text-sm">
            {/* TOP BAR */}
            <div className="text-black py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-2">
                    <span className="bg-red-600 rounded-full px-8 py-1 color text-white">HOT</span>
                    <span>Envío express GRATIS en pedidos de $99 o más</span>
                </div>
                <div className="flex items-center gap-3">
                    <button className="bg-indigo-300 text-black font-bold px-4 py-1 rounded-full">
                        ¿Necesitas ayuda?
                    </button>
                    <div className="flex items-center gap-2 border border-blue-800 rounded-full px-4 py-1">
                        <Phone className="w-4 h-4 text-blue-800" />
                        <span>+503 7579 6598</span>
                        <button className="bg-blue-800 text-white px-3 py-0.5 rounded-full">Llámanos</button>
                    </div>
                </div>
            </div>

            {/* LOGO + SEARCH + ICONS */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 py-4">
                {/* Logo */}
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="Logo" />

                {/* Search */}
                <input
                    type="search"
                    placeholder="Buscar Productos"
                    className="w-full md:w-96 px-4 py-2 border rounded-full shadow-sm focus:outline-none"
                />

                {/* Icon Links */}
                <ul className="flex flex-wrap gap-6 items-center justify-center text-sm">
                    <li className="flex items-center gap-1">
                        <Heart className="w-5 h-5" />
                        <Link to={"/"}>Lista de Deseos</Link>
                    </li>
                    <li className="flex items-center gap-1">
                        <Package className="w-5 h-5" />
                        <Link to={""}>Seguimiento de pedido</Link>
                    </li>
                    <li className="flex items-center gap-1">
                        <User className="w-5 h-5" />
                        <Link to={""}>Cuenta</Link>
                    </li>
                    <li>
                        <Link to={""}><ShoppingBag className="w-5 h-5" /></Link>

                    </li>
                </ul>
            </div>

            {/* NAV MENU */}
            <nav className="border-t border-gray-200">
                <ul className="flex flex-wrap items-center justify-center md:justify-around py-4 font-semibold text-base gap-4 md:gap-0">
                    <li
                        className="flex items-center gap-1 cursor-pointer relative"
                        onClick={() => setOpenDropDown(!openDropdown)}
                    >
                        Categoría de productos <ChevronDown className="w-4 h-4" />
                        {/* Dropdown opcional */}
                        {openDropdown && (
                            <div className="absolute top-10 left-0 bg-white shadow-md p-4 rounded w-48">
                                {/* <DropDown /> contenido aquí si quieres */}
                                <Link><p className="text-sm text-gray-700 m-0.5 hover:bg-amber-300">Ejemplo de dropdown</p></Link>
                                <Link><p className="text-sm text-gray-700 m-0.5 hover:bg-amber-300">Ejemplo de dropdown</p></Link>
                                <Link><p className="text-sm text-gray-700 m-0.5 hover:bg-amber-300">Ejemplo de dropdown</p></Link>
                            </div>
                        )}
                    </li>
                    <li><Link to={""}>Exclusivo Online</Link></li>
                    <li><Link to={""}>Condiciones de ofertas</Link></li>
                    <li><Link to={"/sobreNosotros"}>Sobre Nosotros</Link></li>
                    <li><Link to={""}>Contáctanos</Link></li>
                </ul>
            </nav>
        </header>

    )
}



export default Nav;