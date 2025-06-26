import { Heart } from "lucide-react";
import { useNavigate } from "react-router";
import React from "react";

const CardProduct = ({ productos, toggleWishlist, isInWishlist }) => {
  const navigate = useNavigate();

  const handleClick = (producto) => {
    navigate(`/producto/${producto._id}`, { state: { producto } });
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((prod) => {
        const liked = isInWishlist?.(prod._id); // ✅ mejor así

        return (
          <div
            key={prod._id}
            className="relative cursor-pointer rounded-2xl p-4 bg-white/70 backdrop-blur-sm shadow-lg border border-white/10 transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(prod._id); // ✅ actualiza lista en el hook
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
            >
              <Heart
                size={24}
                fill={liked ? "red" : "none"}
                stroke={liked ? "red" : "currentColor"}
              />
            </button>

            <div onClick={() => handleClick(prod)}>
              <img
                src={prod.images}
                alt={prod.name}
                className="w-full h-40 object-contain mb-4 rounded-xl"
              />
              <h3 className="font-semibold text-lg">{prod.name}</h3>
              <p className="text-sm text-gray-600">
                {`${prod.idCategory?.name || ""} - ${prod.idBrand?.name || ""}`}
              </p>
              <p className="text-sm text-gray-500">En Stock: {prod.stock}</p>
              <p className="font-bold text-indigo-600">${prod.unitPrice}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CardProduct;
