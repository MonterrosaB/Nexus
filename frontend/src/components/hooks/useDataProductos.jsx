/*
    name,
    description,
    images,
    idCategory,
    idBrand,
    idProvider,
    stock,
    unitPrice
*/
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Swal from 'sweetalert2'



const useDataProductos = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [productImageFile, setProductImageFile] = useState(null);
    const [prodcutCategory, setProductCategory] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const [productProvider, setProductProvider] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productUnitPrice, setProductUnitPrice] = useState("");
    const [id, setId] = useState("");

    const cleanData = () => {
        setProductName("");
        setProductDescription("");
        setProductImage("");
        setProductImageFile("");
        setProductCategory("");
        setProductBrand("");
        setProductProvider("");
        setProductStock("");
        setProductUnitPrice("");
        setId("");
    };

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:4000/api/products");

        if (!response.ok) {
            throw new Error("Hubo un error al obtener los productos");
        }

        const data = await response.json();
        setProducts(data);
        setLoading(false);
    };

    // useEffect
    useEffect(() => {
        fetchProducts();
    }, []);

    const saveProduct = async (e) => {
        e.preventDefault();

        // Validaciones
        if (!productName || !productDescription || !productImageFile || !prodcutCategory ||
            !productBrand || !productProvider || !productStock || !productUnitPrice) {
            Swal.fire({
                title: "Campos incompletos",
                text: "Por favor completa todos los campos antes de continuar.",
                icon: "warning"
            });
            return;
        }

        if (isNaN(productStock) || productStock <= 0) {
            Swal.fire({
                title: "Stock inválido",
                text: "El stock debe ser un número mayor a 0.",
                icon: "error"
            });
            return;
        }

        if (isNaN(productUnitPrice) || productUnitPrice <= 0) {
            Swal.fire({
                title: "Precio inválido",
                text: "El precio unitario debe ser un número mayor a 0.",
                icon: "error"
            });
            return;
        }

        const formData = new FormData();
        formData.append("name", productName);
        formData.append("description", productDescription);
        formData.append("images", productImageFile);
        formData.append("idCategory", prodcutCategory);
        formData.append("idBrand", productBrand);
        formData.append("idProvider", productProvider);
        formData.append("stock", productStock);
        formData.append("unitPrice", productUnitPrice);

        try {
            const response = await fetch("http://localhost:4000/api/products", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Error al guardar el producto.");
            }

            const data = await response.json();
            console.log("Producto guardado:", data);

            Swal.fire({
                title: "Producto Registrado!",
                text: `${productName} ha sido agregado correctamente!`,
                icon: "success"
            });

            cleanData();
        } catch (error) {
            console.error("Error al guardar producto:", error);

            Swal.fire({
                title: "Error",
                text: error.message || "Ocurrió un error al guardar el producto.",
                icon: "error"
            });
        }
    };


    const deleteProduct = async (id) => {
        try {
            const response = await fetch(
                `http://localhost:4000/api/products/${id}`,
                {
                    method: "DELETE",
                    body: JSON.stringify(deleteProduct),
                }
            );

            if (!response.ok) {
                throw new Error("Error al eliminar el producto");
            }

            const result = await response.json();
            console.log("Deleted:", result);
            console.log(id);

            // Actualizar la lista después de borrar
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const navigateForm = (product) => {
        navigate("/admin/agregar-producto", { state: { product } });
    };

    const handleClick = (producto) => {
        navigate(`/producto/${producto._id}`, { state: { producto } });
    };


    const handleUpdate = async (e) => {
        e.preventDefault();

        // Validaciones mínimas (sin imagen obligatoria)
        if (
            !productName.trim() ||
            !productDescription.trim() ||
            !prodcutCategory ||
            !productBrand ||
            !productProvider ||
            !productStock ||
            !productUnitPrice
        ) {
            Swal.fire("Campos incompletos", "Por favor, completa todos los campos obligatorios.", "warning");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("name", productName);
            formData.append("description", productDescription);
            formData.append("idCategory", prodcutCategory._id);
            formData.append("idBrand", productBrand._id);
            formData.append("idProvider", productProvider._id);
            formData.append("stock", productStock);
            formData.append("unitPrice", productUnitPrice);

            // Solo agrega la imagen si hay una nueva seleccionada
            if (productImageFile && typeof productImageFile !== "string") {
                formData.append("images", productImageFile);
            }

            const response = await fetch(`http://localhost:4000/api/products/${id}`, {
                method: "PUT",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Error al actualizar el producto");
            }

            Swal.fire("Actualizado", "Producto actualizado correctamente", "success");
            cleanData();
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            Swal.fire("Error", error.message, "error");
        } finally {
            setLoading(false);
        }
    };

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setProductImageFile(file); // 👈 este es el que se usa para subir


            // Opcional: mostrar vista previa
            const reader = new FileReader();
            reader.onload = (e) => {
                setProductImage(e.target.result);
                console.log(file);
            };
            reader.readAsDataURL(file);
        }
    };

    return {
        products, loading,
        productName, setProductName,
        productDescription, setProductDescription,
        productImage, setProductImage,
        productImageFile, setProductImageFile,
        prodcutCategory, setProductCategory,
        productBrand, setProductBrand,
        productProvider, setProductProvider,
        productStock, setProductStock,
        productUnitPrice, setProductUnitPrice,
        id, setId,
        saveProduct, deleteProduct,
        handleUpdate, onImageChange,
        navigateForm
    }

}
export default useDataProductos;    