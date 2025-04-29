import React, { useState } from "react";

const Wishlist = ({ products, onRemove, onAddToCart }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center relative"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-32 h-20 object-contain mb-4"
          />
          <h2 className="font-semibold text-lg">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p
            className={`font-medium ${
              product.stock ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock ? "En stock" : "Agotado"}
          </p>

          <div className="mt-4 flex flex-col items-center relative">
            {/* Selector */}
            <button
              className="bg-black text-white text-sm px-4 py-1 rounded-full"
              onClick={() => toggleMenu(product.id)}
            >
              seleccionar opciones
            </button>

            {/* Menú desplegable estilizado */}
            {openMenu === product.id && (
              <div className="absolute top-12 z-20 w-48 bg-white shadow-md rounded-2xl py-2 text-sm border border-gray-200 transition-all">
                <button
                  onClick={() => {
                    onAddToCart(product.id);
                    setOpenMenu(null);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Pasar al carrito
                </button>
                <button
                  onClick={() => {
                    onRemove(product.id);
                    setOpenMenu(null);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Eliminar
                </button>
              </div>
            )}

            {/* Ver más */}
            <button className="mt-2 bg-gray-200 text-sm px-4 py-1 rounded-full">
              Ver más
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
