import React, { useState, useEffect } from "react";
import { Trash2, Plus, Minus } from "lucide-react";
import useDataCart from "../../components/hooks/useDataCart";
import RegisterCheckOut from "../../components/RegisterCheckOut";
import useDataOrders from "../../components/hooks/useDataOrders";

const ShoppingCart = () => {
  const { cartProducts, loading, increaseProduct, decreaseProduct, moreInfo, fetchCartProducts } = useDataCart();
  const { createOrder } = useDataOrders();

  const total = cartProducts.products?.reduce(
    (acc, item) => acc + (item.subtotal || 0),
    0
  );
  const totalProducts = cartProducts.products?.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0
  );

  const [showCheckout, setShowCheckout] = useState(false);

  // Esta función envuelve createOrder para cerrar modal y recargar carrito después
  const handleCreateOrder = async (orderData) => {
    await createOrder(orderData);
    setShowCheckout(false);
    await fetchCartProducts();
  };

  return (
    <div className="flex flex-col lg:flex-row px-4 py-6 sm:px-6 lg:p-10 bg-white text-black gap-6 lg:gap-10">
      {/* Carrito */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6">Carrito de Compras</h1>

        {loading ? (
          <div className="text-center text-gray-500">Cargando...</div>
        ) : cartProducts.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No hay productos en el carrito.
          </div>
        ) : (
          <div className="space-y-6">
            {cartProducts?.products?.map((item, index) => (

              <div
                key={index}
                className="flex flex-col sm:flex-row justify-between sm:items-center border-b pb-4 gap-4"
              >
                {/* Info del producto */}
                <div className="flex gap-4">
                  <img
                    src={item.idProduct?.images}
                    alt={item.idProduct?.name}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2>{item.idProduct?.name}</h2>
                    <p>{item.idProduct?.idBrand?.name} | {item.idProduct?.idCategory?.name}</p>
                    <p className="text-sm text-black underline cursor-pointer"
                      onClick={() => moreInfo(item.idProduct)}>
                      Más información
                    </p>
                  </div>
                </div>

                {/* Botones y precio */}
                <div className="flex justify-between sm:justify-end items-center gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                    <button
                      onClick={() => decreaseProduct(cartProducts._id, item.idProduct?._id)}
                      className="text-gray-600 hover:text-black"
                    >
                      {item.quantity === 1 ? < Trash2 size={18} /> : <Minus size={18} />}
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => increaseProduct(cartProducts._id, item.idProduct?._id)}
                      className="text-gray-600 hover:text-black"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="text-right font-semibold text-lg min-w-[80px]">
                    ${(item.idProduct?.unitPrice * item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Resumen del carrito */}
      <div className="w-full lg:max-w-sm bg-gray-50 p-6 rounded-xl shadow-md h-fit">
        <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
        {cartProducts.products?.length === 0 ? (
          <div className="text-center text-gray-500 mb-6">
            No hay productos en el carrito.
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Total de artículos:</span>
              <span className="font-semibold">{totalProducts}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Subtotal:</span>
              <span className="font-semibold">${total}</span>
            </div>
          </>
        )}
        <button
          disabled={
            !cartProducts.products || cartProducts.products.length === 0
          } onClick={() => setShowCheckout(true)}
          className={`w-full py-3 rounded-full font-semibold text-white transition ${cartProducts.products?.length === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          Proceder al pago
        </button>

        {showCheckout && (
          <div
            className="fixed inset-0 flex justify-center items-center z-50"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))",
            }}
          >            <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
              <button
                onClick={() => setShowCheckout(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
                aria-label="Cerrar"
              >
                ×
              </button>


              <RegisterCheckOut
                idCartProduct={cartProducts._id}
                total={total}
                onSubmit={handleCreateOrder}
                onClose={() => setShowCheckout(false)}
                refreshCart={fetchCartProducts}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
