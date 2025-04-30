import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "../../components/RelatedProducts";
import ProductDetail from "../../components/Product";

const Producto = () => {
  const  id  = "67dd9fe729fdf77d43a9553a";
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error al obtener producto:", err));
  }, [id]);

  return (
    <div className="bg-white text-black">
      <ProductDetail product={product} />
      <div className="mt-10 p-6">
        <h2 className="text-xl font-bold mb-2">Productos relacionados</h2>
        {product && (
          <RelatedProducts
            category={product.idCategory}
            currentId={product._id}
          />
        )}
      </div>
    </div>
  );
};

export default Producto;
