import { Eye, EyeOff } from "lucide-react";
import logo from "../assets/Nexus.svg";
import laptop from "../assets/laptop.svg";
import fondo from "../assets/fondoRarito.svg";

import { useState } from "react";

const Register = () => {
  const [mostrar, setMostrar] = useState(false);
  const [mostrarConfirm, setMostrarConfirm] = useState(false);

  const hoy = new Date();
  hoy.setFullYear(hoy.getFullYear() - 18);
  const maxFecha = hoy.toISOString().split("T")[0]; // "YYYY-MM-DD"

  return (
    <div className="min-h-screen flex items-center justify-center p-4 space-y-8">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 space-y-8">
        {/* Izquierda: Formulario */}
        <div className="p-10">
          <h2 className="text-2xl font-bold mb-8 text-center ">Registrarse</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Nombre</label>
              <input
                className="w-full border-b outline-none py-1"
                type="text"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 ">Apellido</label>
              <input
                className="w-full border-b outline-none py-1"
                type="text"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-700">Email</label>
              <input
                className="w-full border-b outline-none py-1"
                type="email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Usuario</label>
              <input
                className="w-full border-b outline-none py-1"
                type="text"
              />
            </div>
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
            <div className="sm:col-span-2 relative">
              <label className="text-sm text-gray-700">
                Confirmar contraseña
              </label>
              <input
                className="w-full border-b outline-none py-1 pr-8"
                type={mostrarConfirm ? "text" : "password"}
              />
              <div
                className="absolute right-2 bottom-2 w-4 h-4 text-gray-400 cursor-pointer"
                onClick={() => setMostrarConfirm(!mostrarConfirm)}
              >
                {mostrarConfirm ? <Eye /> : <EyeOff />}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">
                Fecha de Nacimiento
              </label>
              <input
                className="w-full border-b outline-none py-1"
                type="date"
                max={maxFecha}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Sexo</label>
              <input
                className="w-full border-b outline-none py-1"
                type="text"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm text-gray-700">
                Número de teléfono{" "}
                <span className="text-gray-400 text-xs">(opcional)</span>
              </label>
              <input
                type="tel"
                className="w-full border-b outline-none py-1"
                placeholder="########"
                maxLength={8}
                pattern="\d{8}"
                onInput={(e) => {
                  // Elimina todo lo que no sea dígito
                  e.currentTarget.value = e.currentTarget.value
                    .replace(/\D/g, "")
                    .slice(0, 8);
                }}
              />
            </div>
            <div className="col-span-full w-full flex justify-center mt-9">
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                Registrarse
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
            ¿Nuevo aqui?
            </h2>
            <p className="text-center text-sm">
            Regístrate y personaliza tu <br /> próxima PC con nosotros
            </p>
            
            <img src={laptop} alt="laptop" className="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
