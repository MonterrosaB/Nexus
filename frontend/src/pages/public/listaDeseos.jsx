import React, { useState } from "react";
import Wishlist from "../../components/WishList";

const initialProducts = [
  {
    id: 1,
    name: "Radeon RX 6950 XT",
    price: 117,
    image: "https://via.placeholder.com/150x100?text=GPU1",
    stock: true,
  },
  {
    id: 2,
    name: "Radeon RX 6950 XT",
    price: 250,
    image: "https://via.placeholder.com/150x100?text=GPU2",
    stock: true,
  },
];

const WishlistPage = () => {
  const [products, setProducts] = useState(initialProducts);

  const handleRemove = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleAddToCart = (id) => {
    const product = products.find((p) => p.id === id);
    console.log("Agregado al carrito:", product);
    // Aquí puedes añadir lógica para moverlo al carrito
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Mi lista de deseos</h1>
      {products.length > 0 ? (
        <Wishlist
          products={products}
          onRemove={handleRemove}
          onAddToCart={handleAddToCart}
        />
      ) : (
        <div className="text-center text-gray-500 mt-20 text-lg">
          Aún no hay productos en tu lista de deseos.
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
