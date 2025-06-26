import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardProduct from "../../components/CardProducts";
import useDataProductos from "../../components/hooks/useDataProductos";
import useDataWishList from "../../components/hooks/useDataWishList";

const Productos = () => {
  const { products } = useDataProductos();
  const { toggleWishlist, isInWishlist } = useDataWishList();
  const [sortOrder, setSortOrder] = useState("relevancia");


  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get("categorias");

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const filteredProducts = React.useMemo(() => {
    let result = [...products];

    if (categoriaParam) {
      result = result.filter(
        (p) => p.idCategory?.name === decodeURIComponent(categoriaParam)
      );
    }

    if (sortOrder === "precioMenor") {
      result.sort((a, b) => a.unitPrice - b.unitPrice);
    } else if (sortOrder === "precioMayor") {
      result.sort((a, b) => b.unitPrice - a.unitPrice);
    }

    return result;
  }, [products, categoriaParam, sortOrder]);


  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 md:px-10 lg:px-20">
      <main className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-800 font-semibold">
            {filteredProducts.length}{" "}
            {categoriaParam
              ? `resultados para "${decodeURIComponent(categoriaParam)}"`
              : "productos"}
          </p>

          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="border border-gray-300 p-2 rounded-lg shadow-sm focus:ring-2 focus:ring-black focus:outline-none text-sm"
          >
            <option value="relevancia">Ordenar por relevancia</option>
            <option value="precioMenor">Precio: menor a mayor</option>
            <option value="precioMayor">Precio: mayor a menor</option>
          </select>

        </div>

        <CardProduct
          productos={filteredProducts}
          toggleWishlist={toggleWishlist}
          isInWishlist={isInWishlist}
        />

        {filteredProducts.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            No se encontraron productos.
          </p>
        )}
      </main>
    </div>
  );
};

export default Productos;
