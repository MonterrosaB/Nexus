import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const useDataMarcas = () => {

    const navigate = useNavigate();
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(false);
    const [brandName, setBrandName] = useState("");
    const [id, setId] = useState("");

    const cleanData = () => {
        setBrandName("");
        setId("");
    };

    const fetchBrands = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/brands");
            if (!response.ok) throw new Error("Error al obtener las marcas");

            const data = await response.json();
            setBrands(data);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    const validateFields = () => {
        if (
            !brandName.trim()
        ) {
            Swal.fire("Campos incompletos", "Por favor, completa todos los campos.", "warning");
            return false;
        }
        return true;
    };

    const saveBrand = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const newBrand = {
            name: brandName
        };

        try {
            const response = await fetch("http://localhost:4000/api/brands", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBrand),
            });

            if (!response.ok) throw new Error("Error al registrar la marca");

            const data = await response.json();
            console.log(data);

            Swal.fire("Éxito", "Marca registrada correctamente", "success");
            cleanData();
        } catch (error) {
            console.error("Error al guardar la marca: ", error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const deleteBrand = async (id) => {
        const confirm = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (!confirm.isConfirmed) return;

        try {
            const response = await fetch(`http://localhost:4000/api/brands/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Error al eliminar la marca");

            const result = await response.json();
            console.log("Deleted:", result);

            Swal.fire("Eliminado", "Marca eliminado correctamente", "success");
            fetchBrands();
        } catch (error) {
            console.error("Error al eliminar la marca:", error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const updatedProvider = {
            name: brandName
        };

        try {
            const response = await fetch(`http://localhost:4000/api/brands/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProvider),
            });

            if (!response.ok) throw new Error("Error al actualizar la Marca");

            Swal.fire("Actualizado", "Marca actualizada correctamente", "success");
            cleanData();
        } catch (error) {
            console.error("Error al actualizar la marca:", error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const navigateForm = (brand) => {
        navigate("/admin/agregar-marcas", { state: { brand } });
    };

    return {
        brands, loading,
        brandName, setBrandName,
        id, setId,
        saveBrand, deleteBrand,
        navigateForm, handleUpdate
    }

}
export default useDataMarcas;