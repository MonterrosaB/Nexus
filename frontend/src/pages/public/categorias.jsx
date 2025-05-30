import React from "react";
import { useNavigate } from "react-router-dom";

const categoriasData = [
  { nombre: "Tarjeta gráfica", img: "./src/assets/GRAFICA-BANER-1.svg" },
  { nombre: "Almacenamiento", img: "./src/assets/PC-BANER-1.svg" },
  { nombre: "Enfriamiento", img: "./src/assets/VENTILADOR-BANER-1.svg" },
  { nombre: "Memoria Ram", img: "./src/assets/MEMORIARAM-BANER-1.svg" },
  { nombre: "Cases", img: "./src/assets/PC-BANER-1.svg", grande: true },
  { nombre: "Fuente de poder", img: "./src/assets/FUENTEDEPODER.svg" },
  { nombre: "Tarjeta madre", img: "./src/assets/TARGETAMADRE-BANER-1.svg" },
  { nombre: "Procesadores", img: "./src/assets/PROCESADOR.svg" },
  { nombre: "Protección", img: "./src/assets/PROTECCION.svg" },
  { nombre: "Monitores", img: "./src/assets/MONITORES.svg" },
  { nombre: "Laptops", img: "./src/assets/LAPTOPS.svg" },
  { nombre: "Perifericos", img: "./src/assets/PERIFERICOS.svg", full: true },
];

const Categorias = () => {
  const navigate = useNavigate();

  const handleCategoriaClick = (categoria) => {
    navigate(`/productos?categorias=${encodeURIComponent(categoria)}`);
  };

  return (
    <section className="px-4 md:px-10 lg:px-20 py-10">
      <h2 className="text-2xl font-semibold mb-6">Todas las categorías</h2>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[300px]">
        {categoriasData.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleCategoriaClick(cat.nombre)}
            className={`relative cursor-pointer rounded-xl bg-sky-50 flex items-center justify-center p-2 overflow-hidden
              ${cat.grande ? "col-span-2 row-span-2 sm:row-auto sm:col-auto md:row-span-2 md:col-span-2" : ""}
              ${cat.full ? "col-span-2 sm:col-span-3 md:col-span-4 row-span-1 h-[300px]" : ""}
              ${cat.nombre === "Monitores" || cat.nombre === "Laptops" ? "md:col-span-2" : ""}
            `}
          >
            <img
              src={cat.img}
              alt={cat.nombre}
              className="object-contain h-full max-h-full max-w-full mx-auto"
            />
            <span className="absolute bottom-2 left-2 text-sm font-medium bg-white/80 text-black px-2 py-1 rounded">
              {cat.nombre}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categorias;
