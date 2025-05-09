import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";

import SobreNosotros from "./pages/sobreNosotros/sobreNosotros"
import Contactanos from "./pages/contactanos/contactanos"
import TerminosNCondiciones from "./pages/terminosYCondiciones/terminosYCondiciones"
import ExclusivoOnline from "./pages/exclusivoOnline/exclusivoOnline"
import Inicio from "./pages/inicio/inicio"
import CarritoCompras from "./pages/carritoCompras/carritoCompras"
import ListaDeseos from "./pages/listaDeseos/listaDeseos"
import Categorias from "./pages/categorias/categorias";
import Productos from './components/Productos';
import Producto from "./pages/productos/producto";
import Ordenes from "./pages/ordenes/ordenes";
import Cuenta from "./pages/cuenta/cuenta";




function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-[calc(100vh-/* altura navbar y footer */)]">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/categorias" element={<Categorias/>}/>
          <Route path="/Productos" element={<Productos/>}/>
          <Route path="/exclusivo-online" element={<ExclusivoOnline />} />
          <Route path="/terminos&Condiciones" element={<TerminosNCondiciones />} />
          <Route path="/sobreNosotros" element={<SobreNosotros />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/listaDeseos" element={<ListaDeseos />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/carrito-de-compras" element={<CarritoCompras />} />
          <Route path="/cuenta" element={<Cuenta />} />


          <Route path="/" element = {<Producto/>} />

      <Route path="/producto/:id" element = {<Producto/>} />
        </Routes>
      </main>

       <Footer/>
    </Router>
    

    
  );
}

export default App;

