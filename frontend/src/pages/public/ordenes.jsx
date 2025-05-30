import React, { useState } from "react";
import OrderList from "../../components/Order";

const activeOrdersMock = [
  {
    id: 1,
    name: "Ryzen 9 5900X",
    price: 450,
    image: "https://via.placeholder.com/150x100?text=CPU",
    status: "En tránsito",
    date: "2025-04-29",
  },
];

const orderHistoryMock = [
  {
    id: 2,
    name: "RTX 4070 Super",
    price: 620,
    image: "https://via.placeholder.com/150x100?text=GPU",
    status: "Entregado",
    date: "2025-04-15",
  },
];

const OrderTrackingPage = () => {
  const [activeOrders] = useState(activeOrdersMock);
  const [orderHistory] = useState(orderHistoryMock);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Seguimiento de pedidos</h1>
      <OrderList title="Pedidos activos" orders={activeOrders} />
      <OrderList title="Historial de pedidos" orders={orderHistory} />
    </div>
  );
};

export default OrderTrackingPage;
