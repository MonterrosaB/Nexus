import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../components/CardProducts";

const Productos = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);

  const BASE_URL = "http://localhost:4000";


  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/products`);
        const data = await res.json();
        setProductos(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };

    fetchProductos();
  }, []);

  const handleClick = (producto) => {
    navigate(`/producto/${producto._id}`, { state: { producto } });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 md:px-10 lg:px-20">


      {/* PRODUCTOS */}
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-800 font-semibold">{productos.length} productos</p>
          <select
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none text-sm"
          >
            <option value="relevancia">Ordenar por relevancia</option>
            <option value="precioMenor">Precio: menor a mayor</option>
            <option value="precioMayor">Precio: mayor a menor</option>
          </select>
        </div>

        <CardProduct
          productos={productos}
          handleClick={handleClick}
        />

        {productos.length === 0 && (
          <p className="text-center mt-10 text-gray-500">No se encontraron productos.</p>
        )}
      </main>
    </div>
  );
};

export default Productos;
