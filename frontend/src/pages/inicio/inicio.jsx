import React from "react";

import HurryUpDeals from '../../components/HurryUpDeals';
import PopularCategories from "../../components/PopularCategories"
import LoadingPage from "../../components/LoadingPage"
import { useEffect, useState } from "react";
import BundleProducts from "../../components/bundleProducts";

import '../../index.css'


const inicio = () => {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
      // Inicializar lucide
      if (window.lucide) {
        window.lucide.createIcons();
      }

      const timer = setTimeout(() => {
          setLoading(false);
      }, 3000); // 3 segundos del loading page

      return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }


    return (
        <>
              {/* Sección de Ofertas */}
      <section className="ofertas">
        <div className="contenido">
          <div className="texto">
            <h1>
              <span className="resaltado">NUEVAS</span>
              <span className="resaltado">OFERTAS</span>
            </h1>
            <p>Ahorre hasta un 70% en estos productos hasta agotar sus existencias</p>
            <a href="#" className="boton">COMPRAR AHORA</a>
          </div>

          <div className="imagenes">
            <img src="./src/assets/GRAFICA2-BANER-1.svg" alt="Gráfica negra" className="grafica grafica1" />
            <img src="./src/assets/TARGETAMADRE-BANER-1.svg" alt="Targerta madre" className="TargertaMadre" />
            <img src="./src/assets/VENTILADOR-BANER-1.svg" alt="Ventilador Pc" className="VentiladorPc" />
            <img src="./src/assets/MEMORIARAM-BANER-1.svg" alt="Memoria RAM" className="ram" />
            <img src="./src/assets/GRAFICA-BANER-1.svg" alt="Gráfica roja" className="grafica grafica2" />
            <img src="./src/assets/PC-BANER-1.svg" alt="PC Gaming" className="pc" />
            <div className="decoracion"></div>
          </div>
        </div>
      </section>

      {/* Sección de beneficios */}
      <section className="w-full border-b py-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 text-center items-center">
          <div>
            <i data-lucide="truck" className="mx-auto text-blue-700 w-6 h-6"></i>
            <p className="text-sm font-semibold mt-2">Envío a todo el Salvador</p>
          </div>
          <div>
            <i data-lucide="dollar-sign" className="mx-auto text-blue-700 w-6 h-6"></i>
            <p className="text-sm font-semibold mt-2">Envío a todo el Salvador</p>
          </div>
          <div>
            <i data-lucide="headphones" className="mx-auto text-blue-700 w-6 h-6"></i>
            <p className="text-sm font-semibold mt-2">Soporte las 24 horas</p>
          </div>
          <div>
            <i data-lucide="credit-card" className="mx-auto text-blue-700 w-6 h-6"></i>
            <p className="text-sm font-semibold mt-2">Pago seguro</p>
          </div>
        </div>
      </section>

      <PopularCategories/>

      <HurryUpDeals/>

      <hr/>

      

      <div className="marquee-wrapper">
        <div className="marquee-track">
          <div className="marquee-group">
              {Array.from({ length: 10 }).map((_, i) => (
                 <span key={`a-${i}`}>
                  Envío gratis a partir de $300 en productos &nbsp; — &nbsp;
                </span>
            ))}
         </div>
         <div className="marquee-group">
               {Array.from({ length: 10 }).map((_, i) => (
                 <span key={`b-${i}`}>
                   Envío gratis a partir de $300 en productos &nbsp; — &nbsp;
                 </span>
             ))}
          </div>
       </div>
     </div>

     <BundleProducts/>
      



        </>
    )
}



export default inicio;