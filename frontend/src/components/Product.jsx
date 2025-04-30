import React from "react";
import { useParams } from "react-router-dom";
import { productosBase } from "../data/productosBase";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productosBase.find(p => p.id === parseInt(id));

  if (!product) return <div>Producto no encontrado...</div>;

  return (
    <div className="p-6 grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div className="flex gap-6 w-full max-h-[600px]">
        {/* Miniaturas verticales */}
        <div className="flex flex-col gap-4">
          {[product.imagen].map((img, i) => (
            <img
              key={i}
              src={img}
              className="w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition"
              alt={`Vista ${i + 1}`}
            />
          ))}
        </div>

        {/* Imagen principal */}
        <div className="flex items-center justify-center flex-1 border rounded overflow-hidden shadow">
          <img
            src={product.imagen}
            alt="Imagen principal del producto"
            className="object-contain max-h-[550px] w-full"
          />
        </div>
      </div>

      {/* Información */}
      <div className="col-span-2 flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold">{product.nombre}</h1>
          <p className="text-xl font-semibold mt-2">${product.precio.toFixed(2)}</p>
          <button className="mt-4 w-full lg:w-60 py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-900">
            Añadir al carrito
          </button>
        </div>

        <div>
          <h2 className="text-xl font-bold mt-6">Descripción</h2>
          <p className="text-gray-700">{product.descripcion}</p>
        </div>

        {/* Si hubiera specs */}
        {product.specs?.length > 0 && (
          <div>
            <h3 className="font-semibold mt-6">Especificaciones:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {product.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
