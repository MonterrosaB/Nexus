import './App.css'
import Navbar from "./components/Nav"
import { BrowserRouter as Router, Routes, Route } from "react-router";

import HurryUpDeals from './components/HurryUpDeals';
import PopularCategories from "./components/PopularCategories"
import { useEffect } from "react";

import SobreNosotros from "./pages/sobreNosotros/sobreNosotros"


function App() {
  useEffect(() => {
    // Inicializar lucide
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <>
<Router>
      <Navbar />
      <Routes>
      <Route path="/" />
      <Route path="/sobreNosotros" element={<SobreNosotros/>} />  
      </Routes>
      </Router>
      



    </>
  );
}

export default App;
