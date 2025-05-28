import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Nav";
import NavAdmin from "./components/NavAdmin";
import Footer from "./components/Footer";

import SobreNosotros from "./pages/sobreNosotros/sobreNosotros";
import Contactanos from "./pages/contactanos/contactanos";
import TerminosNCondiciones from "./pages/terminosYCondiciones/terminosYCondiciones";
import ExclusivoOnline from "./pages/exclusivoOnline/exclusivoOnline";
import Inicio from "./pages/inicio/inicio";
import CarritoCompras from "./pages/carritoCompras/carritoCompras";
import ListaDeseos from "./pages/listaDeseos/listaDeseos";
import Categorias from "./pages/categorias/categorias";
import Productos from "./pages/Products";
import Producto from "./pages/productos/producto";
import Ordenes from "./pages/ordenes/ordenes";
import Cuenta from "./pages/cuenta/cuenta";

// Admin
import InicioAdmin from "./pages/admin/AdminInicio/AdminInicio";
import AgregarProductos from "./pages/admin/AgregarProductos/AgregarProductos";
import RegistrarDatos from "./pages/admin/RegistrarDatos/RegistrarDatos";
import AgregarUsuarios from "./pages/admin/AgregarUsuarios/AgregarUsuarios";
import Tablas from "./pages/admin/TablasDatos/TablasDatos";
import Perfil from "./pages/admin/PerfilAdmin/PerfilAdmin";
import CambiarCuenta from "./pages/admin/CambiarCuenta/CambiarCuenta";
import AgregarProveedores from "./pages/admin/AgregarProveedores/AgregarProveedores";
import AgregarMarcas from "./pages/admin/AgregarMarcas/AgregarMarcas";
import AgregarCategorias from "./pages/admin/AgregarCategorias/AgregarCategorias";
import Proveedores from "./pages/admin/Colecciones/Proveedores"
import Usuarios from "./pages/admin/Colecciones/Usuarios"

import { useEffect } from "react";

// Layout que detecta si está en ruta admin
/*

/admin/categorias
/admin/proveedores
/admin/marcas
/admin/producto
/admin/usuario
*/
function Layout({ children }) {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      {isAdminRoute && <NavAdmin />}

      <main className={`min-h-screen ${isAdminRoute ? "ml-64" : ""}`}>
        {children}
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/exclusivo-online" element={<ExclusivoOnline />} />
          <Route path="/terminos&Condiciones" element={<TerminosNCondiciones />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/listaDeseos" element={<ListaDeseos />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/carrito-de-compras" element={<CarritoCompras />} />
          <Route path="/cuenta" element={<Cuenta />} />

          {/* Rutas admin */}
          <Route path="/admin/inicio" element={<InicioAdmin />} />
          <Route path="/admin/agregar-producto" element={<AgregarProductos />} />
          <Route path="/admin/registrar-datos" element={<RegistrarDatos />} />
          <Route path="/admin/agregar-usuario" element={<AgregarUsuarios />} />
          <Route path="/admin/tablas" element={<Tablas />} />
          <Route path="/admin/perfil" element={<Perfil />} />
          <Route path="/admin/cambiar-cuenta" element={<CambiarCuenta />} />
          <Route path="/admin/agregar-proveedores" element={<AgregarProveedores />} />
          <Route path="/admin/agregar-marcas" element={<AgregarMarcas />} />
          <Route path="/admin/agregar-categorias" element={<AgregarCategorias />} />
          <Route path="/admin/proveedores" element={<Proveedores />} />
          <Route path="/admin/usuarios" element={<Usuarios />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
