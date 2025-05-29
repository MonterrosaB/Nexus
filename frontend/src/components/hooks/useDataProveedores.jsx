import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const useDataProveedores = () => {
    const navigate = useNavigate();
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [providerName, setProviderName] = useState("");
    const [providerLastName, setProviderLastName] = useState("");
    const [providerCompany, setProviderCompany] = useState("");
    const [providerEmail, setProviderEmail] = useState("");
    const [providerPhoneNumber, setProviderPhoneNumber] = useState("");
    const [id, setId] = useState("");

    const cleanData = () => {
        setProviderName("");
        setProviderLastName("");
        setProviderCompany("");
        setProviderEmail("");
        setProviderPhoneNumber("");
        setId("");
    };

    const fetchProviders = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:4000/api/providers");
            if (!response.ok) throw new Error("Error al obtener los proveedores");

            const data = await response.json();
            setProviders(data);
        } catch (error) {
            console.error(error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProviders();
    }, []);

    const validateFields = () => {
        if (
            !providerName.trim() ||
            !providerLastName.trim() ||
            !providerCompany.trim() ||
            !providerEmail.trim() ||
            !providerPhoneNumber.trim()
        ) {
            Swal.fire("Campos incompletos", "Por favor, completa todos los campos.", "warning");
            return false;
        }
        return true;
    };

    const saveProvider = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const newProvider = {
            firstName: providerName,
            lastName: providerLastName,
            company: providerCompany,
            email: providerEmail,
            phoneNumber: providerPhoneNumber,
        };

        try {
            const response = await fetch("http://localhost:4000/api/providers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProvider),
            });

            if (!response.ok) throw new Error("Error al registrar el proveedor");

            const data = await response.json();
            console.log(data);

            Swal.fire("Éxito", "Proveedor registrado correctamente", "success");
            fetchProviders();
            cleanData();
        } catch (error) {
            console.error("Error al guardar proveedor:", error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const deleteProvider = async (id) => {
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
            const response = await fetch(`http://localhost:4000/api/providers/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Error al eliminar el proveedor");

            const result = await response.json();
            console.log("Deleted:", result);

            Swal.fire("Eliminado", "Proveedor eliminado correctamente", "success");
            fetchProviders();
        } catch (error) {
            console.error("Error al eliminar proveedor:", error);
            Swal.fire("Error", error.message, "error");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!validateFields()) return;

        const updatedProvider = {
            firstName: providerName,
            lastName: providerLastName,
            company: providerCompany,
            email: providerEmail,
            phoneNumber: providerPhoneNumber,
        };

        try {
            const response = await fetch(`http://localhost:4000/api/providers/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedProvider),
            });

            if (!response.ok) throw new Error("Error al actualizar el proveedor");

            Swal.fire("Actualizado", "Proveedor actualizado correctamente", "success");
            cleanData();
            fetchProviders();
        } catch (error) {
            console.error("Error al actualizar proveedor:", error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const navigateForm = (provider) => {
        navigate("/admin/agregar-proveedores", { state: { provider } });
    };

    return {
        providers,
        setProviders,
        loading,
        setLoading,
        providerName,
        setProviderName,
        providerLastName,
        setProviderLastName,
        providerCompany,
        setProviderCompany,
        providerEmail,
        setProviderEmail,
        providerPhoneNumber,
        setProviderPhoneNumber,
        id,
        setId,
        saveProvider,
        deleteProvider,
        navigateForm,
        handleUpdate,
    };
};

export default useDataProveedores;
