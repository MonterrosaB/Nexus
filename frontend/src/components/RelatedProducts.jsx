import React, { useEffect, useState } from "react";

const RelatedProducts = ({ category, currentId }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/related/${category}`)
      .then((res) => res.json())
      .then((data) =>
        setRelated(data.filter((item) => item._id !== currentId))
      );
  }, [category, currentId]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Productos relacionados</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {related.map((prod) => (
          <div
            key={prod._id}
            className="bg-gray-100 p-4 rounded hover:shadow cursor-pointer"
            onClick={() => (window.location.href = `/producto/${prod._id}`)}
          >
            <img src={prod.images[0]} className="w-full h-32 object-contain mb-2" />
            <h4 className="text-sm font-semibold">{prod.name}</h4>
            <p className="text-sm text-gray-700">${prod.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
