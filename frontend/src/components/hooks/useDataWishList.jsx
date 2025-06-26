import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const useDataWishList = () => {
    const navigate = useNavigate();
    const [wishList, setWishList] = useState({ products: [] });
    const [loading, setLoading] = useState(false);
    const [loadingToggle, setLoadingToggle] = useState(false);

    const fetchWishList = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/wishList", {
                credentials: "include",
            });

            if (response.status === 401) {
                Swal.fire({
                    icon: "info",
                    title: "Debes iniciar sesión",
                    text: "Para ver tu lista de deseos necesitas estar registrado y logueado.",
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
                setWishList({ products: [] }); // vaciar wishlist
                return;
            }

            if (!response.ok) throw new Error("Error al obtener la lista de deseos");

            const data = await response.json();
            setWishList(data);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWishList();
    }, []);

    const toggleWishlist = async (productId) => {
        try {
            setLoadingToggle(true);
            const res = await fetch(`http://localhost:4000/api/wishList/${productId}`, {
                method: "PUT",
                credentials: "include",
            });

            if (res.status === 401) {
                Swal.fire({
                    icon: "info",
                    title: "Debes iniciar sesión",
                    text: "Para modificar tu lista de deseos necesitas estar registrado y logueado.",
                    showCancelButton: true,
                    confirmButtonText: "Ir a Iniciar sesión",
                    cancelButtonText: "Crear cuenta",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/login");
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        navigate("/register");
                    }
                });
                return;
            }

            if (!res.ok) throw new Error("Error al actualizar la lista de deseos");

            const updatedWishlist = await res.json();
            setWishList(updatedWishlist);
        } catch (err) {
            console.error("Error al actualizar la lista de deseos:", err);
            Swal.fire("Error", "No se pudo modificar la lista de deseos", "error");
        } finally {
            setLoadingToggle(false);
        }
    };

    const isInWishlist = (productId) => {
        return wishList?.products?.some(
            (item) => item.idProduct._id === productId
        );
    };

    return {
        wishList,
        loading,
        loadingToggle,
        toggleWishlist,
        isInWishlist,
    };
};

export default useDataWishList;
