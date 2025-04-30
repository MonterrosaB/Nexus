import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Lista temporal de productos con imágenes
const productosBase = [
    { id: 1, nombre: "RTX 4090", categoria: "Tarjeta gráfica", marca: "NVIDIA", color: "Negro", precio: 1500, imagen: "./src/assets/GRAFICA-BANER-1.svg" },
    { id: 2, nombre: "Samsung SSD 1TB", categoria: "Almacenamiento", marca: "Samsung", color: "Negro", precio: 120, imagen: "./src/assets/ALMACENAMIENTO.svg" },
    { id: 3, nombre: "Cooler Master AIO", categoria: "Enfriamiento", marca: "Cooler Master", color: "Blanco", precio: 95, imagen: "./src/assets/VENTILADOR-BANER-1.svg" },
    { id: 4, nombre: "Corsair Vengeance 16GB", categoria: "Memoria Ram", marca: "Corsair", color: "Rojo", precio: 80, imagen: "./src/assets/MEMORIARAM-BANER-1.svg" },
    { id: 5, nombre: "NZXT H510", categoria: "Cases", marca: "NZXT", color: "Blanco", precio: 90, imagen: "./src/assets/PC-BANER-1.svg" },
    { id: 6, nombre: "EVGA 650W Gold", categoria: "Fuente de poder", marca: "EVGA", color: "Negro", precio: 110, imagen: "./src/assets/FUENTEDEPODER.svg" },
    { id: 7, nombre: "ASUS Z790", categoria: "Tarjeta madre", marca: "ASUS", color: "Gris", precio: 290, imagen: "./src/assets/TARGETAMADRE-BANER-1.svg" },
    { id: 8, nombre: "AMD Ryzen 9", categoria: "Procesadores", marca: "AMD", color: "Negro", precio: 450, imagen: "./src/assets/PROCESADOR.svg" },
    { id: 9, nombre: "UPS APC", categoria: "Protección", marca: "APC", color: "Negro", precio: 60, imagen: "./src/assets/PROTECCION.svg" },
    { id: 10, nombre: "Samsung Odyssey G9", categoria: "Monitores", marca: "Samsung", color: "Negro", precio: 1300, imagen: "./src/assets/MONITORES.svg" },
    { id: 11, nombre: "Dell XPS 15", categoria: "Laptops", marca: "Dell", color: "Gris", precio: 1800, imagen: "./src/assets/LAPTOPS.svg" },
    { id: 12, nombre: "Logitech Combo", categoria: "Perifericos", marca: "Logitech", color: "Negro", precio: 75, imagen: "./src/assets/PERIFERICOS.svg" },
  ]; 
  
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
        <aside className="md:w-1/4">
          <h3 className="font-bold text-lg mb-2">Filtrado por :</h3>
  
          {Object.entries(camposFiltro).map(([tipo, campo]) => (
            <div key={tipo} className="mb-4">
              <h4 className="font-semibold capitalize">{tipo}</h4>
              {Array.from(new Set(productosBase.map((p) => p[campo]))).map((opcion, i) => (
                <label key={i} className="block text-sm">
                  <input
                    type="checkbox"
                    checked={filtros[tipo].includes(opcion)}
                    onChange={() => toggleFiltro(tipo, opcion)}
                  />
                  {" "}{opcion}
                </label>
              ))}
            </div>
          ))}
  
          {/* RANGO DE PRECIO */}
          <div className="mb-4">
            <h4 className="font-semibold">Rango de precio</h4>
            <input
              type="range"
              min={25}
              max={1800}
              value={filtros.precio[1]}
              onChange={(e) =>
                setFiltros((prev) => ({ ...prev, precio: [25, +e.target.value] }))
              }
              className="w-full"
            />
            <div className="text-sm text-gray-600">
              ${filtros.precio[0]} - ${filtros.precio[1]}
            </div>
          </div>
        </aside>
  
        {/* PRODUCTOS */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-4">
            <p>{productosFiltrados.length} productos</p>
            <select
              className="border p-1 rounded"
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
              className="rounded-2xl p-4 bg-white/70 backdrop-blur-sm shadow-lg border border-white/10 transition-transform hover:scale-[1.02] hover:shadow-xl"
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