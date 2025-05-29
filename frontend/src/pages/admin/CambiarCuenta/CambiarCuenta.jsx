import React, { useState } from "react";

const CambiarCuenta = () => {
  const [cuentas] = useState([
    {
      id: 1,
      nombre: "Administrador",
      descripcion: "Acceso completo al sistema",
      imagen:
        "https://img.freepik.com/vector-gratis/icono-contacto-ilustracion-vectorial-3d-boton-azul-simbolo-perfil-usuario-sitios-red-o-aplicaciones-estilo-dibujos-animados-aislados-fondo-blanco-comunicacion-linea-concepto-marketing-digital_778687-1715.jpg?ga=GA1.1.2065239873.1734051911&semt=ais_items_boosted&w=740",
      contraseña: "admin123",
    },
    {
      id: 2,
      nombre: "Vendedor",
      descripcion: "Gestión de ventas y productos",
      imagen:
        "https://img.freepik.com/vector-premium/icono-membresia-plateado-icono-perfil-avatar-defecto-icono-miembros-imagen-usuario-redes-sociales-ilustracion-vectorial_561158-4195.jpg?semt=ais_items_boosted&w=740",
      contraseña: "vendedor123",
    },
    {
      id: 3,
      nombre: "Soporte",
      descripcion: "Soporte técnico y atención al cliente",
      imagen:
        "https://img.freepik.com/vector-premium/icono-membresia-plateado-icono-perfil-avatar-defecto-icono-miembros-imagen-usuario-redes-sociales-ilustracion-vectorial_561158-4195.jpg?semt=ais_items_boosted&w=740",
      contraseña: "soporte123",
    },
  ]);

  const [cuentaSeleccionada, setCuentaSeleccionada] = useState(null);

  const seleccionarCuenta = (cuenta) => {
    const contraseñaIngresada = prompt(
      `Ingrese la contraseña para la cuenta "${cuenta.nombre}":`
    );

    if (contraseñaIngresada === null) {
      // Canceló el prompt
      return;
    }

    if (contraseñaIngresada === cuenta.contraseña) {
      setCuentaSeleccionada(cuenta);
      alert(`Cambiaste a la cuenta: ${cuenta.nombre}`);
    } else {
      alert("Contraseña incorrecta. No se pudo cambiar la cuenta.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Cambiar de Cuenta
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cuentas.map((cuenta) => (
            <div
              key={cuenta.id}
              className={`bg-white rounded-3xl shadow-xl p-6 text-center transform hover:scale-105 transition duration-300 ${
                cuentaSeleccionada?.id === cuenta.id ? "ring-4 ring-indigo-400" : ""
              }`}
            >
              <img
                src={cuenta.imagen}
                alt={cuenta.nombre}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700 mb-1">
                {cuenta.nombre}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{cuenta.descripcion}</p>
              <button
                onClick={() => seleccionarCuenta(cuenta)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition"
              >
                Cambiar a esta cuenta
              </button>
            </div>
          ))}
        </div>

        {cuentaSeleccionada && (
          <div className="mt-12 bg-white shadow-md rounded-xl p-6 text-center">
            <h3 className="text-lg text-gray-700 font-medium mb-2">Cuenta seleccionada:</h3>
            <p className="text-indigo-600 font-bold text-2xl">
              {cuentaSeleccionada.nombre}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CambiarCuenta;
