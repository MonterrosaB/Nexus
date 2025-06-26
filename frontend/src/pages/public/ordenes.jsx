import React, { useState } from "react";
import OrderList from "../../components/Order";
import useDataOrders from "../../components/hooks/useDataOrders";

const OrderTrackingPage = () => {

  const { orders } = useDataOrders();

  // Filtrar pedidos activos o pendientes
  const activeOrders = orders.filter(
    (order) =>
      order.status === "En proceso" ||
      order.status === "En Transito"
  );

  // Filtrar historial (por ejemplo completados o cancelados)
  const historyOrders = orders.filter(
    (order) =>
      order.status === "Cancelado" ||
      order.status === "Entregado"
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Seguimiento de pedidos</h1>
      <OrderList title="Pedidos activos" orders={activeOrders} />
      <OrderList title="Historial de Pedidos" orders={historyOrders} />
    </div>
  );
};

export default OrderTrackingPage;
