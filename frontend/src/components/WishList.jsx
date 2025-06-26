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
          key={product.idProduct?._id}
          className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center relative"
        >
          <img
            src={product.idProduct?.images}
            alt={product.idProduct?.name}
            className="w-32 h-20 object-contain mb-4"
          />
          <h2 className="font-semibold text-lg">{product.idProduct?.name}</h2>
          <p className="text-gray-700">${product.idProduct?.unitPrice}</p>
          <p
            className={`font-medium ${product.idProduct?.stock ? "text-green-600" : "text-red-500"
              }`}
          >
            {product.idProduct?.stock ? "En stock" : "Agotado"}
          </p>

          <div className="mt-4 flex flex-col items-center relative">
            {/* Selector */}
            <button
              className="bg-black text-white text-sm px-4 py-1 rounded-full"
              onClick={() => toggleMenu(product.idProduct?._id)}
            >
              seleccionar opciones
            </button>

            {/* Menú desplegable estilizado */}
            {openMenu === product.idProduct?._id && (
              <div className="absolute top-12 z-20 w-48 bg-white shadow-md rounded-2xl py-2 text-sm border border-gray-200 transition-all">
                <button
                  onClick={() => {
                    onAddToCart(product.idProduct?._id);
                    setOpenMenu(null);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Pasar al carrito
                </button>
                <button
                  onClick={() => {
                    onRemove(product.idProduct?._id);
                    setOpenMenu(null);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                >
                  Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
