import React from "react";
import { useParams } from "react-router-dom";
import Producto from "../../components/Product";
import { productosBase } from "../../data/productosBase"; // Asegúrate de importar la lista base tu componente que muestra la card grande

const ProductoPage = () => {
  const { id } = useParams();
  const producto = productosBase.find(p => p.id === parseInt(id));

  if (!producto) return <p className="text-center mt-10">Producto no encontrado</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Producto product={producto} />
    </div>
  );
};

export default ProductoPage;
