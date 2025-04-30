import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/Nexus.svg";
import laptop from "../assets/laptop.svg";
import fondo from "../assets/fondoRarito.svg";

import { useState } from "react";

const Login = () => {
  const [mostrar, setMostrar] = useState(false);


  return (
<div className="min-h-screen bg-[#e3efff] flex items-center justify-center p-10 md:pt-20 lg:pt-10">
   <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-full max-w-5xl  grid grid-cols-1 md:grid-cols-2 space-y-8">
        {/* Izquierda: Formulario */}
        <div className="pt-32 md:pt-50 lg:pt-40 px-20">
          <h2 className="text-2xl font-bold mb-10 text-center ">Iniciar sesión</h2>

          <div className="sm:col-span-2 relative">
            <div>
              <label className="text-sm text-gray-700">Usuario</label>
              <input
                className="w-full border-b outline-none py-1 pr-8"
                type="text"
              />
            </div> <br /><br />
            <div className="relative">
              <label className="text-sm text-gray-700">Contraseña</label>
              <input
                className="w-full border-b outline-none py-1 pr-8"
                type={mostrar ? "text" : "password"}
              />
              <div
                className="absolute right-2 bottom-2 w-4 h-4 text-gray-400 cursor-pointer"
                onClick={() => setMostrar(!mostrar)}
              >
                {mostrar ? <Eye /> : <EyeOff />}
              </div>
            </div>
            
            <div className="col-span-full w-full flex justify-center mt-9">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Continuar
              </button>
            </div>

          </div>
        </div>

        {/* Derecha: Bienvenida */}
        <div className="relative w-full h-full relative w-full min-h-screen rounded-tl-3xl rounded-bl-none rounded-br-3xl md:rounded-bl-3xl md:rounded-br-none overflow-hidden">
          {/* Imagen de fondo */}
          <img
            src={fondo}
            alt="Fondo"
            className="absolute inset-0 w-full h-full object-cover z-0 "
          />

          {/* Contenido encima */}
          <div className="relative z-10  text-white p-10 flex flex-col justify-center items-center gap-6 w-full h-full">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <h2 className="text-2xl font-bold text-center">
              ¡Bienvenido a Nexus!
            </h2>
            <p className="text-center text-sm">
              Accede a tu cuenta y lleva tu experiencia tecnológica al siguiente
              nivel.
            </p>
            <img src={laptop} alt="laptop" className="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
