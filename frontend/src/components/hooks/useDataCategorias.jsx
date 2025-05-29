import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const useDataMarcas = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categoryName, setCategoryName] = useState("");
    const [id, setId] = useState("");

    const cleanData = () => {
        setCategoryName("");
        setId("");
    };

    const fecthCategories = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/categories");
            if (!response.ok) throw new Error("Error al obtener las categorias");

            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fecthCategories();
    }, []);

    const validateFields = () => {
        if (
            !categoryName.trim()
        ) {
            Swal.fire("Campos incompletos", "Por favor, completa todos los campos.", "warning");
            return false;
        }
        return true;
    };

    const saveCategory = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const newCategory = {
            name: categoryName
        };

        try {
            const response = await fetch("http://localhost:4000/api/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newCategory),
            });

            if (!response.ok) throw new Error("Error al registrar la categoría");

            const data = await response.json();
            console.log(data);

            Swal.fire("Éxito", "Categoría registrada correctamente", "success");
            cleanData();
        } catch (error) {
            console.error("Error al guardar la categoría: ", error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const deleteCategory = async (id) => {
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
            const response = await fetch(`http://localhost:4000/api/categories/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Error al eliminar la categoría");

            const result = await response.json();
            console.log("Deleted:", result);
            fecthCategories();

            Swal.fire("Eliminado", "Categoría eliminado correctamente", "success");
        } catch (error) {
            console.error("Error al eliminar la categoría:", error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const updateCategory = {
            name: categoryName
        };

        try {
            const response = await fetch(`http://localhost:4000/api/categories/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateCategory),
            });

            if (!response.ok) throw new Error("Error al actualizar la Categoría");

            Swal.fire("Actualizado", "Categoría actualizada correctamente", "success");
            cleanData();
        } catch (error) {
            console.error("Error al actualizar la categoría:", error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const navigateForm = (category) => {
        navigate("/admin/agregar-categorias", { state: { category } });
    };

    return {
        categories, loading,
        categoryName, setCategoryName,
        id, setId,
        saveCategory, deleteCategory,
        navigateForm, handleUpdate
    }

}
export default useDataMarcas;