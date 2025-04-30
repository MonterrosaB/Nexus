import React, { useRef } from "react";

const categories = [
  {
    name: "Cases",
    products: 11,
    image: "./src/assets/PC-BANER-1.svg",
  },
  {
    name: "Screen Protectors",
    products: 4,
    image: "https://via.placeholder.com/100x150?text=Screen+Protector",
  },
  {
    name: "MagSafe",
    products: 2,
    image: "https://via.placeholder.com/100x150?text=MagSafe",
  },
  {
    name: "Cables",
    products: 5,
    image: "https://via.placeholder.com/100x150?text=Cable",
  },
  {
    name: "Chargers",
    products: 4,
    image: "https://via.placeholder.com/100x150?text=Charger",
  },
  {
    name: "Power Banks",
    products: 3,
    image: "https://via.placeholder.com/100x150?text=Power+Bank",
  },
  {
    name: "Adapters",
    products: 3,
    image: "https://via.placeholder.com/100x150?text=Adapter",
  },
];

const PopularCategories = () => {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Función para manejar el inicio del arrastre
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  // Función para manejar cuando el ratón sale del área de las cards
  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // Función para manejar cuando el ratón se levanta
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Función para mover el carrusel al arrastrar
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 3; // 3 es el factor de velocidad
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Funciones para manejar el arrastre táctil en móviles
  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 3; // 3 es el factor de velocidad
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="py-8 px-4 relative md:mr-30 md:ml-30">
      <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>

      <div className="relative">
  {/* Botón Izquierdo */}
  <button
    onClick={() => scrollRef.current.scrollBy({ left: -300, behavior: "smooth" })}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md"
  >
    ◀
  </button>

  {/* Botón Derecho */}
  <button
    onClick={() => scrollRef.current.scrollBy({ left: 300, behavior: "smooth" })}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-md"
  >
    ▶
  </button>

  {/* Carrusel horizontal sin scroll */}
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-hidden scrollbar-hide w-full"
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    onTouchStart={handleTouchStart}
    onTouchEnd={handleTouchEnd}
    onTouchMove={handleTouchMove}
  >
    {categories.map((category) => (
      <div
        key={category.name}
        className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] bg-[#e5fafc] bg-opacity-70 rounded-2xl shadow-lg flex-shrink-0 flex flex-col items-center p-6 text-center hover:shadow-xl transition h-[400px]"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-50 h-60 object-cover mb-4 rounded-lg"
        />
        <h3 className="font-semibold text-xl mb-2">{category.name}</h3>
        <p className="text-gray-500 text-sm">{category.products} products</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default PopularCategories;
