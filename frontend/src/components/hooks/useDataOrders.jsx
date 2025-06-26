import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const useDataOrders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/orders", {
                credentials: "include",
            });

            if (response.status === 401) {
                Swal.fire({
                    icon: "info",
                    title: "Debes iniciar sesión",
                    text: "Para ver tus pedidos necesitas estar registrado y logueado.",
                    showCancelButton: true,
                    confirmButtonText: "Ir a Iniciar sesión",
                    cancelButtonText: "Crear cuenta",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/cuenta");
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        navigate("/cuenta");
                    }
                });
                setOrders([]); // vaciar lista de pedidos
                return;
            }

            if (!response.ok) throw new Error("Error al obtener los pedidos");

            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const createOrder = async (orderData) => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch("http://localhost:4000/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(orderData),
            });

            if (res.status === 401) {
                Swal.fire({
                    icon: "info",
                    title: "Debes iniciar sesión",
                    text: "Para crear un pedido necesitas estar registrado y logueado.",
                    showCancelButton: true,
                    confirmButtonText: "Ir a Iniciar sesión",
                    cancelButtonText: "Crear cuenta",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/cuenta");
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        navigate("/cuenta");
                    }
                });
                return null;
            }

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al crear la orden");
            }

            const newOrder = await res.json();
            Swal.fire("Éxito", "Tu pedido ha sido realizado", "success");
            return newOrder;
        } catch (err) {
            console.error("Error creando orden:", err);
            setError(err.message);
            Swal.fire("Error", err.message, "error");
        } finally {
            setLoading(false);
        }
    };

    return {
        orders,
        loading,
        createOrder,
        error,
    };
};

export default useDataOrders;
