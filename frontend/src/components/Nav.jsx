import React,{ useState} from "react";
import { ChevronDown } from 'lucide-react';
import DropDown from "./DropDown";

const Nav = () =>{

    const [ openDropdown, setOpenDropDown] = useState(true);

    return (
        <>
                <header className=" w-full ">
            <div className="flex items-center justify-around shadow-md rounded-md py-4">
                <span className="bg-red-600 rounded-full px-8 py-1 color text-white">HOT</span><span>Envío express GRATIS en pedidos de $99 o más</span>
                <span className="bg-indigo-300 rounded-full px-8  py-1 color font-bold">¿Necesitas ayuda?</span>
                <div className="flex border-2 border-blue-800 rounded-full px-10 "><span>+503 7579 6598<span className="bg-blue-800 rounded-full px-4 text-white">Llámanos</span></span></div>
            </div>
            <div className="flex items-center justify-around py-4">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <input type="search" className="2xl:shadow-lg rounded-md" name="" id="" placeholder="Buscar Productos"/>

            <li className="min-w-2/4 flex justify-around">
                <a href="" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    Lista de Deseos
                    </a>
                <a href="" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    Seguimiento de Pedido
                    </a>
                <a href="" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    Cuenta 
                    </a>
                <a href="">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                </a>
            </li>
            

            </div>
            <nav className="">
                <ul className="flex items-center justify-around py-4 font-semibold text-lg">
                    <li className="py-2 px-3 cursor-pointer" onClick={() => setOpenDropDown
                        ((prev) => !prev)}>
                            <div className="flex items-center">Categoría de productos<ChevronDown />
                            {openDropdown &&( <DropDown/> )
        }</div>
                    </li>

                    <li className="py-2 px-3"><a href="">Exclusivo Online</a></li>
                    <li className="py-2 px-3"><a href="">Condiciones de ofertas</a></li>
                    <li className="py-2 px-3"><a href="">Sobre Nososotros</a></li>
                    <li className="py-2 px-3"><a href="">Contactanos</a></li>
                </ul>
            </nav>
        </header>

        
        </>

    )
}



export default Nav;