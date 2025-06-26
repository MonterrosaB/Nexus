import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const useDataCart = () => {

    const navigate = useNavigate();
    const [cartProducts, setCartProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const moreInfo = (producto) => {
        navigate(`/producto/${producto._id}`, { state: { producto } });
    };

    const fetchCartProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/cartProducts", {
                credentials: "include",
            });

            if (response.status === 401) {
                // Usuario no autenticado
                Swal.fire({
                    icon: "info",
                    title: "Debes iniciar sesión",
                    text: "Para ver tu carrito necesitas estar registrado y logueado.",
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
                setCartProducts({ products: [] }); return;
            }

            if (!response.ok) throw new Error("Error al obtener el carrito de compras");

            const data = await response.json();

            setCartProducts(data);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchCartProducts();
    }, []);

    const increaseProduct = async (idCartProduct, idProduct) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cartProducts/increase/${idCartProduct}/${idProduct}`, {
                method: "PUT",
                credentials: "include", // 👈 IMPORTANTE
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) throw new Error(data.message || "Error al aumentar cantidad");
            fetchCartProducts();

            return data;
        } catch (error) {
            console.error("Error al aumentar cantidad:", error.message);
        }
    };



    const decreaseProduct = async (idCartProduct, idProduct) => {
        try {
            const response = await fetch(`http://localhost:4000/api/cartProducts/decrease/${idCartProduct}/${idProduct}`, {
                method: "PUT",
                credentials: "include", // 👈 IMPORTANTE
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) throw new Error("Error al disminuir cantidad");
            fetchCartProducts();

            const data = await response.json();
            console.log("Producto disminuido:", data);
            return data;
        } catch (error) {
            console.error("Error al disminuir cantidad:", error);
        }
    };


    const addProduct = async (idProduct) => {
        try {
            // Mostrar loading
            Swal.fire({
                title: "Agregando producto...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                },
            });

            const response = await fetch(`http://localhost:4000/api/cartProducts/add/${idProduct}`, {
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Error al agregar producto al carrito");

            // Actualizar carrito en el estado global o local
            fetchCartProducts();

            // Mostrar confirmación con dos opciones
            const result = await Swal.fire({
                title: "Producto agregado",
                text: "¿Qué quieres hacer ahora?",
                icon: "success",
                showCancelButton: true,
                confirmButtonText: "Ir al carrito",
                cancelButtonText: "Seguir comprando",
            });

            if (result.isConfirmed) {
                navigate("/carrito-de-compras");
            }

            return data;

        } catch (error) {
            Swal.fire("Error", error.message || "Error al agregar producto", "error");
            throw error; // Opcional si quieres manejar el error desde el componente también
        }
    };


    return {
        cartProducts, loading,
        increaseProduct, decreaseProduct,
        addProduct,
        moreInfo, fetchCartProducts
    }

}
export default useDataCart;