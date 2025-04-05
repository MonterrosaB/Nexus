import React from "react";

const Nav = () =>{
    return (
        <header className=" w-full ">
            <div className="flex flex-wrap items-center justify-between shadow-md rounded-md py-4">
                <span className="bg-red-600 rounded-full px-8 py-1 color text-white">HOT</span><span>Envío express GRATIS en pedidos de $99 o más</span>
                <span className="bg-indigo-300 rounded-full px-8  py-1 color font-bold">¿Necesitas ayuda?</span><div className="border-2 border-blue-800 rounded-full px-10 flex-wrap"><span>+503 7579 6598<span className="bg-blue-800 rounded-full px-4 text-white">Llámanos</span></span></div>
            </div>
            <div>
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
            <input type="search" name="" id="" />
            

            </div>
            <nav className="">
                <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="flex items-center "><a href="" className="block py-2 px-3">Exclusivo Online</a></li>
                    <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600"><a href="" className="block">Condiciones de ofertas</a></li>
                    <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600"><a href="" className="block">Sobre Nososotros</a></li>
                    <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600"><a href="" className="block">Contactanos</a></li>
                    <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600"><a href="" className="block py-2 px-3">Categoría de productos</a></li>
                </ul>
            </nav>
        </header>
    )
}



export default Nav;