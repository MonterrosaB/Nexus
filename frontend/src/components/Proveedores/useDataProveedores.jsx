/*
    firstName,
    lastName,
    company,
    email,
    phoneNumber
*/

import React, { useState, useEffect } from "react";

const useDataProveedores = () => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [providerName, setProviderName] = useState("");
    const [providerLastName, setProviderLastName] = useState("");
    const [providerCompany, setProviderCompany] = useState("");
    const [providerEmail, setproviderEmail] = useState("");
    const [providerPhoneNumber, setProviderPhoneNumber] = useState("");
    const [id, setId] = useState("");

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
        setProviderName("");
        setProviderLastName("");
        setProviderCompany("");
        setproviderEmail("");
        setProviderPhoneNumber("");
    };

    // useEffect
    useEffect(() => {
        fetchProviders();
    }, []);

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
        saveProvider,/*
        deleteProduct,
        updateProduct,
        handleEdit,
        onImageChange*/
    };
}
export default useDataProveedores;