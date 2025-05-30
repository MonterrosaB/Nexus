// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "../context/authContext";

import CustomerLayout from "../components/CustomerLayout";
import AdminLayout from "../components/AdminLayout";
import PrivateRoute from "../components/PrivateRoutes";

// páginas públicas
import Inicio from "../pages/public/inicio";
import Categorias from "../pages/public/categorias";
import Productos from "../pages/public/Products";
import Producto from "../pages/public/producto";
import ExclusivoOnline from "../pages/public/exclusivoOnline";
import TerminosNCondiciones from "../pages/public/terminosYCondiciones";
import SobreNosotros from "../pages/public/sobreNosotros";
import Contactanos from "../pages/public/contactanos";
import ListaDeseos from "../pages/public/listaDeseos";
import Ordenes from "../pages/public/ordenes";
import CarritoCompras from "../pages/public/carritoCompras";
import Cuenta from "../pages/public/cuenta";
import LoginAdmin from "../pages/public/login";

// páginas admin
import InicioAdmin from "../pages/admin/AdminInicio";
import AgregarProductos from "../pages/admin/AgregarProductos/AgregarProductos";
import RegistrarDatos from "../pages/admin/RegistrarDatos";
import AgregarUsuarios from "../pages/admin/Agregar/AgregarUsuarios";
import Tablas from "../pages/admin/TablasDatos";
import Perfil from "../pages/admin/PerfilAdmin";
import CambiarCuenta from "../pages/admin/CambiarCuenta";
import AgregarProveedores from "../pages/admin/Agregar/AgregarProveedores";
import AgregarMarcas from "../pages/admin/Agregar/AgregarMarcas";
import AgregarCategorias from "../pages/admin/Agregar/AgregarCategorias";
import Proveedores from "../pages/admin/Colecciones/Proveedores";
import Usuarios from "../pages/admin/Colecciones/Usuarios";
import ProductosAdmin from "../pages/admin/Colecciones/Productos";
import Marcas from "../pages/admin/Colecciones/Marcas";
import CategoriasAdmin from "../pages/admin/Colecciones/Categorias";

export default function AppRoutes() {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<CustomerLayout />}>
                <Route index element={<Inicio />} />
                <Route path="categorias" element={<Categorias />} />
                <Route path="productos" element={<Productos />} />
                <Route path="producto/:id" element={<Producto />} />
                <Route path="exclusivo-online" element={<ExclusivoOnline />} />
                <Route path="terminos&Condiciones" element={<TerminosNCondiciones />} />
                <Route path="sobreNosotros" element={<SobreNosotros />} />
                <Route path="contactanos" element={<Contactanos />} />
                <Route path="listaDeseos" element={<ListaDeseos />} />
                <Route path="ordenes" element={<Ordenes />} />
                <Route path="carrito-de-compras" element={<CarritoCompras />} />
                <Route path="cuenta" element={<Cuenta />} />
            </Route>

            {/* Ruta para login admin */}
            <Route path="/admin/login" element={<LoginAdmin />} />

            {/* Redirección /admin */}
            <Route path="/admin" element={
                isAuthenticated ? <Navigate to="/admin/inicio" /> : <Navigate to="/admin/login" />
            } />

            {/* Rutas admin protegidas */}
            <Route path="/admin" element={<PrivateRoute />}>
                <Route element={<AdminLayout />}>
                    <Route path="inicio" element={<InicioAdmin />} />
                    <Route path="agregar-producto" element={<AgregarProductos />} />
                    <Route path="registrar-datos" element={<RegistrarDatos />} />
                    <Route path="agregar-usuario" element={<AgregarUsuarios />} />
                    <Route path="tablas" element={<Tablas />} />
                    <Route path="perfil" element={<Perfil />} />
                    <Route path="cambiar-cuenta" element={<CambiarCuenta />} />
                    <Route path="agregar-proveedores" element={<AgregarProveedores />} />
                    <Route path="agregar-marcas" element={<AgregarMarcas />} />
                    <Route path="agregar-categorias" element={<AgregarCategorias />} />
                    <Route path="proveedores" element={<Proveedores />} />
                    <Route path="usuarios" element={<Usuarios />} />
                    <Route path="producto" element={<ProductosAdmin />} />
                    <Route path="marcas" element={<Marcas />} />
                    <Route path="categorias" element={<CategoriasAdmin />} />
                </Route>
            </Route>
        </Routes>
    );
}
