/*
    firstName,
    lastName,
    company,
    email,
    phoneNumber
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";


const useDataProveedores = () => {
    const navigate = useNavigate();
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [providerName, setProviderName] = useState("");
    const [providerLastName, setProviderLastName] = useState("");
    const [providerCompany, setProviderCompany] = useState("");
    const [providerEmail, setproviderEmail] = useState("");
    const [providerPhoneNumber, setProviderPhoneNumber] = useState("");
    const [id, setId] = useState("");

    const cleanData = () => {
        setProviderName("");
        setProviderLastName("");
        setProviderCompany("");
        setproviderEmail("");
        setProviderPhoneNumber("");
        setId("")
    };

    const fetchProviders = async () => {
        const response = await fetch("http://localhost:4000/api/providers");

        if (!response.ok) {
            throw new Error("Hubo un error al obtener los proveedores");
        }

        const data = await response.json();
        setProviders(data);
        setLoading(false);
    };

    const saveProvider = async (e) => {
        e.preventDefault();

        const newProvider = {
            firstName: providerName,
            lastName: providerLastName,
            company: providerCompany,
            email: providerEmail,
            phoneNumber: providerPhoneNumber
        };

        const response = await fetch("http://localhost:4000/api/providers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProvider),
        });

        if (!response.ok) {
            throw new Error("Hubo un error al registrar el proveedor");
        }

        const data = await response.json();
        console.log(data);

        alert("Provedor registrada correctamente");
        fetchProviders();
        cleanData();

    };

    // useEffect
    useEffect(() => {
        fetchProviders();
    }, []);

    const deleteProvider = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:4000/api/providers/${id}`,
                {
                    method: "DELETE",
                    body: JSON.stringify(deleteProvider),
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el proveedor");
            }

            const result = await response.json();
            console.log("Deleted:", result);
            console.log(id);

            // Actualizar la lista después de borrar
            fetchProviders();
        } catch (error) {
            console.error("Error deleting employee sfs:", error);
        }
    };

    const navigateForm = (provider) => {
        navigate("/admin/agregar-proveedores", { state: { provider } });
    };

    const updatedProvider = async (provider) => {
        console.log(provider._id);

        setId(provider._id);
        setProviderName(provider.firstName);
        setProviderLastName(provider.lastName);
        setProviderCompany(provider.company);
        setproviderEmail(provider.email);
        setProviderPhoneNumber(provider.phoneNumber);
        navigateForm(provider);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const updatedProvider = {
                firstName : providerName,
                lastName : providerLastName,
                company : providerCompany,
                email : providerEmail,
                phoneNumber : providerPhoneNumber
            };

            const response = await fetch(
                `http://localhost:4000/api/providers/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedProvider),
                }
            );

            if (!response.ok) {
                throw new Error("Error al actualizar el proveedor" + Error);
            }
            cleanData();
            fetchProviders(); // Volver a cargar la lista
        } catch (error) {
            alert("Error al actualizar el proveedor");
            console.error(error);
        } finally {
            setLoading(false);
        }
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
        setproviderEmail,
        providerPhoneNumber,
        setProviderPhoneNumber,
        id,
        setId,
        saveProvider,
        deleteProvider,
        navigateForm,
        handleUpdate
    };
}
export default useDataProveedores;