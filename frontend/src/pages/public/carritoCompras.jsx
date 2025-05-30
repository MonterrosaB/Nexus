import React, { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

const ShoppingCart = ({ initialItems }) => {
  const [cartItems, setCartItems] = useState(initialItems);

  const handleIncrease = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const handleDecrease = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    }
  };

  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col lg:flex-row px-4 py-6 sm:px-6 lg:p-10 bg-white text-black gap-6 lg:gap-10">
      {/* Carrito */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>

        <div className="space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4 gap-4"
              >
                {/* Info del producto */}
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-black underline cursor-pointer">
                      Más información
                    </p>
                    <p className="font-medium mt-2">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Botones y precio */}
                <div className="flex justify-between sm:justify-end items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                    {item.quantity === 1 ? (
                      <button
                        onClick={() => handleRemove(index)}
                        className="text-gray-600 hover:text-black"
                      >
                        <Trash2 size={18} />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDecrease(index)}
                        className="text-gray-600 hover:text-black"
                      >
                        <Minus size={18} />
                      </button>
                    )}
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(index)}
                      className="text-gray-600 hover:text-black"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="text-right font-semibold text-lg min-w-[80px]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-20">
              No hay productos en el carrito.
            </div>
          )}
        </div>
      </div>

      {/* Resumen del carrito */}
      <div className="w-full lg:max-w-sm bg-gray-50 p-6 rounded-xl shadow-md h-fit">
        <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Total de artículos:</span>
          <span className="font-semibold">{totalItems}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="text-gray-700">Subtotal:</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <button
          disabled={cartItems.length === 0}
          className={`w-full py-3 rounded-full font-semibold text-white transition ${
            cartItems.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

// Ejemplo de uso
const cartItemsExample = [
  {
    name: "Radeon RX 6950 XT",
    price: 117,
    quantity: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/GPU_image.png",
  },
  {
    name: "M.2 SSD 512GB",
    price: 50,
    quantity: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/84/M2_SSD_image.png",
  },
];

export default function App() {
  return <ShoppingCart initialItems={cartItemsExample} />;
}
