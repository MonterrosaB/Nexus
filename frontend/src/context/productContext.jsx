// ProductContext.jsx

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [idcategory, setCategory] = useState("");
  const [idbrand, setBrand] = useState("");
  const [idprovider, setProvider] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productStock, setProductStock] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [id, setId] = useState("");

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:4000/api/products");

    if (!response.ok) {
      throw new Error("Error al obtener los productos");
    }
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };
  const createProducts = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("idCategory", idcategory);
    formData.append("idBrand", idbrand);
    formData.append("idProvider", idprovider);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    formData.append("image", imageFile);

        console.log("ID categoría:", idcategory); // debe ser algo como "663a3fe72d0454e9d68c1234"
        console.log("ID brand:", idbrand); // debe ser algo como "663a3fe72d0454e9d68c1234"
    console.log("ID provider:", idprovider); // debe ser algo como "663a3fe72d0454e9d68c1234"


    try {
      const response = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Producto guardado:", data);
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }

    alert("Producto registrada correctamente");
    fetchProducts();
    setId("");
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductStock("");
    setProductImage(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (productId) => {
    const response = await fetch(
      `http://localhost:4000/api/products/${productId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Error al eliminar el producto");
    }

    const data = await response.json();
    console.log(data);
    console.log(productId);
    console.log(`http://localhost:4000/api/products/${productId}`);

    alert("Modelo eliminado correctamente");
    fetchProducts();
  };

  const updateProduct = (product) => {
    setId(product._id);
    setProductName(product.name);
    setProductDescription(product.description);
    setCategory(product.idCategory);
    setBrand(product.idBrand);
    setProvider(product.idProvider);
    setProductPrice(product.price);
    setProductStock(product.stock);
    setProductImage(product.image);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productName);
    formData.append("description", productDescription);
    formData.append("idCategory", idcategory);
    formData.append("idBrand", idbrand);
    formData.append("idProvider", idprovider);
    formData.append("price", productPrice);
    formData.append("stock", productStock);
    if (imageFile) formData.append("image", imageFile);
    console.log(imageFile);

    const response = await fetch(`http://localhost:4000/api/products/${id}`, {
      method: "PUT",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el producto");
    }

    const data = await response.json();
    console.log("Producto actualizado:", data);
    alert("Modelo actualizado exitosamente");
    fetchProducts();
    setId("");
    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductStock("");
    setImageFile(null);
    setProductImage(null);
  };

  const onImageChange = (event) => {
     if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImageFile(file); 

      const reader = new FileReader();
      reader.onload = (e) => {
        setProductImage(e.target.result);
        console.log(file);
      };
      reader.readAsDataURL(file);
    }
  };


  return( 
      {
        products,
        loading,
        productName,
        setProductName,
        productDescription,
        setProductDescription,
        productPrice,
        setProductPrice,
        productStock,
        setProductStock,
        idcategory,
        setCategory,
        idbrand,
        setBrand,
        idprovider,
        setProvider,
        imageFile,
        setImageFile,
        productImage,
        setProductImage,
        id,
        setId,
        createProducts, // para AgregarProductos.jsx
        deleteProduct,
        updateProduct,
        handleEdit,
        onImageChange,
      })
};

export default useProducts;
