import { useNavigate } from "react-router-dom";

// Componente Card local (sin importar desde otro archivo)
const Card = ({ children, className = "", onClick }) => (
  <div
    onClick={onClick}
    className={`rounded-xl bg-blue-100 shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer p-6 text-center ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className="flex flex-col items-center justify-center">{children}</div>
);

const collections = [
  { name: "Categorías", icon: "👥", path: "/admin/agregar-categorias" },
  { name: "Proveedores", icon: "🚚", path: "/admin/agregar-proveedores" },
  { name: "Marcas", icon: "⭐", path: "/admin/agregar-marcas" },
  { name: "Productos", icon: "📦", path: "/admin/agregar-producto" },
  { name: "Usuarios", icon: "👤", path: "/admin/agregar-usuario" },
];

const RegistrarDatos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-300 via-blue-200 to-white rounded-xl p-6 md:p-12 text-center shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          ¡YA PUEDES AGREGAR DATOS!
        </h1>
        <p className="mt-4 text-gray-700 text-sm md:text-base">
          Selecciona una de las secciones y agrega tus datos
        </p>
        <p className="text-gray-700 text-sm md:text-base">
          Si necesitas ver tus datos ingresados puedes ir a el apartado de
          tablas de datos
        </p>
        <div className="mt-6">
          <img
            src="/assets/avatar-pointing.png"
            alt="Avatar señalando"
            className="mx-auto max-h-40 md:max-h-52"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {collections.map((item) => (
          <Card key={item.name} onClick={() => navigate(item.path)}>
            <CardContent>
              <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
              <div className="text-lg md:text-xl font-semibold text-blue-900">
                {item.name}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RegistrarDatos;
