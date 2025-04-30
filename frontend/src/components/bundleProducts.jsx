import React from "react";

const bundleProducts = [
  {
    name: "Lenovo Tab M10 HD 2nd Gen Folio Case",
    category: "Cases",
    priceRange: "$112.00 – $114.00",
    rating: 4.5,
    colors: ["#00bcd4", "#607d8b"],
    image: "https://via.placeholder.com/200x120?text=Tablet+Case",
  },
  {
    name: "15W Power Adapter",
    category: "Chargers",
    priceRange: "$5.00 – $7.00",
    rating: 4,
    colors: ["#000", "#cfd8dc", "#8bc34a"],
    image: "https://via.placeholder.com/200x120?text=Power+Adapter",
  },
  {
    name: "RTX 4090",
    category: "Graphic card",
    priceRange: "$164.00 – $200.00",
    rating: 5,
    colors: ["#000", "#2196f3"],
    image: "https://via.placeholder.com/200x120?text=GPU+4090",
  },
  {
    name: "RTX 4090",
    category: "Graphic card",
    priceRange: "$164.00 – $200.00",
    rating: 5,
    colors: ["#000", "#2196f3"],
    image: "https://via.placeholder.com/200x120?text=GPU+4090",
  },
];

const BundleProducts = () => {
  return (
    <div className="py-10 px-4 md:px-34">
      <h2 className="text-2xl font-bold mb-6">Bundle Products</h2>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Promo card */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 flex flex-col justify-between max-w-xs min-h-[500px]">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Buy in bulk for your business and get volume discounts!
            </h3>
          </div>
          <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition">
            Shop Now
          </button>
        </div>

        {/* Product list and action */}
        <div className="flex flex-col w-full">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide py-2">
            {bundleProducts.map((product, idx) => (
              <div
                key={idx}
                className="min-w-[220px] bg-white rounded-2xl shadow-md p-4 flex-shrink-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain mb-4"
                />
                <div className="flex gap-1 mb-1">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 uppercase mb-1">{product.category}</p>
                <h3 className="text-md font-semibold mb-1 line-clamp-2">{product.name}</h3>
                <div className="text-yellow-500 mb-1">
                  {"★".repeat(Math.floor(product.rating)) +
                    (product.rating % 1 ? "½" : "")}
                </div>
                <p className="font-bold">{product.priceRange}</p>
              </div>
            ))}
          </div>

          {/* Button */}
<button className="w-full bg-black text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-800 transition flex justify-center items-center gap-2">
  🛒 ADD ALL TO CART
</button>


        </div>
      </div>
    </div>
  );
};

export default BundleProducts;
