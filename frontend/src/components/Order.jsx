import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const OrderList = ({ title, orders }) => {
  const [activeOrders, setActiveOrders] = useState([]);

  const toggleOrder = (id) => {
    setActiveOrders((prev) =>
      prev.includes(id)
        ? prev.filter((orderId) => orderId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        {title}
      </h2>
      {orders.length > 0 ? (
        <div className="flex flex-col items-center gap-4">
          {orders.map((order) => {
            const isActive = activeOrders.includes(order._id);

            return (
              <div
                key={order._id}
                className="w-full bg-white rounded-2xl shadow-md p-6 transition hover:shadow-lg"
              >
                <div
                  className="w-full text-center flex justify-center items-center"
                  onClick={() => toggleOrder(order._id)}
                >
                  <div>
                    <p className="text-gray-500 mb-1">
                      Estado: <span className="font-medium">{order.status}</span>
                    </p>
                    <p className="text-gray-800 font-semibold mb-1">
                      ${order.total}
                    </p>
                    <p className="text-sm text-gray-400">
                      Fecha: {order.date}
                    </p>
                  </div>
                  {isActive ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>

                {isActive && (
                  <div className="w-full mt-4 border-t pt-4">
                    {order.idCartProduct?.products?.map((productItem) => (
                      <div
                        key={productItem._id}
                        className="border-gray-200 pb-4 mb-4"
                      >
                        <img
                          src={productItem.idProduct.images}
                          alt={productItem.idProduct.name}
                          className="w-24 h-20 object-contain mx-auto mb-2"
                        />
                        <p className="text-center text-gray-700 font-semibold">
                          {productItem.idProduct.name}
                        </p>
                        <p className="text-center text-gray-500 text-sm">
                          Cantidad: {productItem.quantity} | Subtotal: $
                          {productItem.subtotal}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No hay pedidos para mostrar.</p>
      )}
    </div>
  );
};

export default OrderList;
