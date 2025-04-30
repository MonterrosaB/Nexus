import React from "react";

const OrderList = ({ title, orders }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        {title}
      </h2>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {orders.map((order) => (
            <div
              key={order.id}
              className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 flex flex-col items-center transition hover:shadow-lg"
            >
              <img
                src={order.image}
                alt={order.name}
                className="w-36 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-bold text-gray-700 mb-1">{order.name}</h3>
              <p className="text-gray-500 mb-1">Estado: <span className="font-medium">{order.status}</span></p>
              <p className="text-gray-800 font-semibold mb-1">${order.price}</p>
              <p className="text-sm text-gray-400">Fecha: {order.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No hay pedidos para mostrar.</p>
      )}
    </div>
  );
};

export default OrderList;
