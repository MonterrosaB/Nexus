import { useState } from "react";

const ProductDetail = ({ product }) => {
  if (!product) return <div className="text-center mt-10">Producto no encontrado.</div>;

  const [mainImage, setMainImage] = useState(product.images);

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {/* Galería de imágenes */}
      <div className="flex flex-col gap-6">
        {/* Imagen principal */}
        <div className="flex items-center justify-center border rounded-xl overflow-hidden shadow-md bg-white">
          <img
            src={mainImage}
            alt="Imagen principal del producto"
            className="object-contain max-h-[500px] w-full"
          />
        </div>

        {/* Miniaturas */}
        <div className="flex gap-4 overflow-x-auto">
          {[product.images].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover border-2 rounded-md cursor-pointer transition-transform hover:scale-105 ${mainImage === img ? 'border-indigo-500' : 'border-gray-200'
                }`}
              alt={`Vista ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Información del producto */}
      <div className="col-span-2 flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-bold text-indigo-600 mt-2">${product.unitPrice.toFixed(2)}</p>

          <button className="mt-6 w-full lg:w-64 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-shadow shadow-md">
            Añadir al carrito
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-8">Descripción</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">{product.description}</p>
        </div>

        {product.specs?.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2">Especificaciones:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.specs.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
