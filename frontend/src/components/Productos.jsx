import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { productosBase } from "../data/productosBase";

  
  const filtrosIniciales = {
    categorias: [],
    subcategorias: [],
    marcas: [],
    colores: [],
    precio: [25, 1800],
  };
  
  const Productos = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [filtros, setFiltros] = useState(filtrosIniciales);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [orden, setOrden] = useState("relevancia");
  
    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const categorias = queryParams.get("categorias")?.split(",") || [];
  
      setFiltros(prev => ({
        ...prev,
        categorias,
      }));
    }, [location.search]);
  
    useEffect(() => {
      let filtrados = productosBase.filter((prod) => {
        const matchCategoria =
          filtros.categorias.length === 0 || filtros.categorias.includes(prod.categoria);
        const matchPrecio = prod.precio >= filtros.precio[0] && prod.precio <= filtros.precio[1];
        const matchMarca =
          filtros.marcas.length === 0 || filtros.marcas.includes(prod.marca);
        const matchColor =
          filtros.colores.length === 0 || filtros.colores.includes(prod.color);
  
        return matchCategoria && matchPrecio && matchMarca && matchColor;
      });
  
      if (orden === "precioMenor") {
        filtrados.sort((a, b) => a.precio - b.precio);
      } else if (orden === "precioMayor") {
        filtrados.sort((a, b) => b.precio - a.precio);
      }
  
      setProductosFiltrados(filtrados);
    }, [filtros, orden]);
  
    const toggleFiltro = (tipo, valor) => {
      setFiltros((prev) => {
        const yaIncluye = prev[tipo].includes(valor);
        const nuevoArray = yaIncluye
          ? prev[tipo].filter((item) => item !== valor)
          : [...prev[tipo], valor];
        return {
          ...prev,
          [tipo]: nuevoArray,
        };
      });
    };
  
    const camposFiltro = {
      categorias: "categoria",
      marcas: "marca",
      colores: "color",
    };
  
    return (
      <div className="flex flex-col md:flex-row gap-4 p-4 md:px-10 lg:px-20">
        {/* FILTROS */}
        <aside className="md:w-1/4 bg-white p-4 rounded-2xl shadow-md border border-gray-200">
  <h3 className="font-bold text-xl mb-4 text-gray-800">Filtrar por</h3>

  {Object.entries(camposFiltro).map(([tipo, campo]) => (
    <div key={tipo} className="mb-6">
      <h4 className="font-semibold text-gray-700 capitalize mb-2">{tipo}</h4>
      <div className="space-y-1">
        {Array.from(new Set(productosBase.map((p) => p[campo]))).map((opcion, i) => (
          <label key={i} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={filtros[tipo].includes(opcion)}
              onChange={() => toggleFiltro(tipo, opcion)}
              className="accent-black"
            />
            {opcion}
          </label>
        ))}
      </div>
    </div>
  ))}

  {/* RANGO DE PRECIO */}
  <div className="mb-4">
    <h4 className="font-semibold text-gray-700 mb-2">Rango de precio</h4>
    <input
      type="range"
      min={25}
      max={1800}
      value={filtros.precio[1]}
      onChange={(e) =>
        setFiltros((prev) => ({ ...prev, precio: [25, +e.target.value] }))
      }
      className="w-full accent-black"
    />
    <div className="text-sm text-gray-600 mt-1">
      ${filtros.precio[0]} - ${filtros.precio[1]}
    </div>
  </div>
</aside>

  
        {/* PRODUCTOS */}
        <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
  <p className="text-gray-800 font-semibold">{productosFiltrados.length} productos</p>
  <select
    className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none text-sm"
    onChange={(e) => setOrden(e.target.value)}
    value={orden}
  >
    <option value="relevancia">Ordenar por relevancia</option>
    <option value="precioMenor">Precio: menor a mayor</option>
    <option value="precioMayor">Precio: mayor a menor</option>
  </select>
</div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {productosFiltrados.map((prod) => (
              <div
  key={prod.id}
  onClick={() => navigate(`/producto/${prod.id}`)} // <-- Esto es nuevo
  className="cursor-pointer rounded-2xl p-4 bg-white/70 backdrop-blur-sm shadow-lg border border-white/10 transition-transform hover:scale-[1.02] hover:shadow-xl"
>
  <img
    src={prod.imagen}
    alt={prod.nombre}
    className="w-full h-40 object-contain mb-4 rounded-xl"
  />
  <h3 className="font-semibold text-lg">{prod.nombre}</h3>
  <p className="text-sm text-gray-600">{prod.categoria} - {prod.marca}</p>
  <p className="text-sm text-gray-500">{prod.color}</p>
  <p className="font-bold text-indigo-600">${prod.precio}</p>
</div>
            
            ))}
          </div>
  
          {productosFiltrados.length === 0 && (
            <p className="text-center mt-10 text-gray-500">No se encontraron productos.</p>
          )}
        </main>
      </div>
    );
  };
  
  export default Productos;