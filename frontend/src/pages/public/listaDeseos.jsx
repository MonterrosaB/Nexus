import React, { useState } from "react";
import Wishlist from "../../components/WishList";
import useDataWishList from "../../components/hooks/useDataWishList";
import useDataCart from "../../components/hooks/useDataCart";

const WishlistPage = () => {

  const { wishList, loading, toggleWishlist } = useDataWishList();
  const { addProduct } = useDataCart();

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Mi lista de deseos</h1>
      {loading ? (
        <p className="text-center text-gray-500">Cargando...</p>
      ) : wishList?.products.length > 0 ? (
        <Wishlist
          products={wishList.products}
          onRemove={toggleWishlist}
          onAddToCart={addProduct}
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
