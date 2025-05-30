const CardProduct = ({ productos, handleClick }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {productos.map((prod) => (
          <div
            key={prod._id}
            onClick={() => handleClick(prod)} // <-- Esto es nuevo
            className="cursor-pointer rounded-2xl p-4 bg-white/70 backdrop-blur-sm shadow-lg border border-white/10 transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <img
              src={prod.images}
              alt={prod.name}
              className="w-full h-40 object-contain mb-4 rounded-xl"
            />
            <h3 className="font-semibold text-lg">{prod.name}</h3>
            <p className="text-sm text-gray-600">
              {(prod.idCategory?.name || prod.idBrand?.name)
                ? `${prod.idCategory?.name || ""} - ${prod.idBrand?.name || ""}`
                : "-"}
            </p>            <p className="text-sm text-gray-500">{prod.stock}</p>
            <p className="font-bold text-indigo-600">${prod.unitPrice}</p>
          </div>

        ))}
      </div>
    </>
  )
}

export default CardProduct;