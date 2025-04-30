import './App.css'
import Navbar from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router";



import SobreNosotros from "./pages/sobreNosotros/sobreNosotros"
import Contactanos from "./pages/contactanos/contactanos"
import TerminosNCondiciones from "./pages/terminosYCondiciones/terminosYCondiciones"
import ExclusivoOnline from "./pages/exclusivoOnline/exclusivoOnline"
import Inicio from "./pages/inicio/inicio"
import CarritoCompras from "./pages/carritoCompras/carritoCompras"
import ListaDeseos from "./pages/listaDeseos/listaDeseos"
import Categorias from "./pages/categorias/categorias";
import Producto from "./pages/productos/producto";


 

import Productos from "./components/Productos";




function App() {


  return (
    <>
<Router>
      <Navbar />

      <Routes>
      <Route path="/" element={<Inicio/>} />  
      <Route path="/exclusivo-online" element={<ExclusivoOnline/>} />  
      <Route path="/Categorias" element={<Categorias/>}/>
      <Route path="/productos" element={<Productos />} />
      <Route path="/terminos&Condiciones" element={<TerminosNCondiciones/>} />  
      <Route path="/sobreNosotros" element={<SobreNosotros/>} />  
      <Route path="/contactanos" element = {<Contactanos/>} />

      <Route path="/listaDeseos" element = {<ListaDeseos/>} />
      <Route path="/carrito-de-compras" element = {<CarritoCompras/>} />

      <Route path="/producto/:id" element = {<Producto/>} />


      </Routes>
      </Router>

    </>
  );
}

export default App;
