import { Mail, Phone, ArrowRight } from "lucide-react";
import preguntas from "../assets/preguntas.svg"
import visa from "../assets/visa.svg"
import paypal from "../assets/paypal.svg"
import stripe from "../assets/stripe.svg"



const Footer = () => {

    return (
        <footer className="bg-white text-gray-800 px-6 py-10 shadow-inner border-t pt-10">
          {/* Sección de ayuda */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 ">
      {/* Cuadro morado */}
      <div className="flex-1 bg-[#6056F8] text-white p-6 rounded-2xl flex items-center justify-start gap-x-6 h-[180px] pl-4 ml-[5%] ">
        <div className=" p-3 rounded-full justify-start ml-[-30px] mr-[-60px]">
              <img src={preguntas} className="h-50 w-50" alt="preguntas" />
        </div>
        <div>
          <h1 className="text-[30px] font-semibold text-4xl">¿Necesitas ayuda?</h1> <br />
          <p>Estamos aquí para ayudarte con </p>
          <p>cualquier pregunta.</p>
        </div>
      </div>    
    
      {/* Contacto Soporte */}
      <div className="flex-1 bg-[#F8F3F3] p-6 rounded-2xl flex flex-col justify-start h-full mr-[5%]">
      {/* Fila 1: Teléfono + Horario */}
      <div className="flex items-center justify-start mb-4">
        <div className="flex items-center gap-3 text-lg font-semibold h-[80px] mr-[5%]">
          <Phone className="w-10 h-10 text-black" />
          +503 7586-4545
        </div>
        <p className="text-sm text-[18px]">Lunes a sábado - 8am–6pm</p>
      </div>
    
      {/* Fila 2: Botón + Enlace */}
      <div className="flex items-center justify-start gap-x-6 ">
        <button className=" ml-[30px] bg-[#D9E7ED] text-black px-4 py-2 rounded-lg flex items-center gap-2">
          Soporte Técnico <ArrowRight className="w-4 h-4" />
        </button>
        <a href="#" className="text-blue-600 text-sm underline text-[18px] ">
          Preguntas Frecuentes
        </a>
      </div>
    </div>
    
    </div>
    
    
          {/* Parte inferior del footer */}
          <div className="grid md:grid-cols-3 gap-8 pt-10">
            {/* Columna 1: Info */}
            <div>
              <h4 className="font-bold text-lg mb-2">NEXUS</h4>
              <p>Dirección: El Salvador, San Salvador Centro</p>
              <p>
                Correo electrónico:{" "}
                <a href="mailto:zapatito@gmail.com" className="underline">
                  zapatito@gmail.com
                </a>
              </p>
              <p>
                Teléfono:{" "}
                <a href="tel:+50374567890" className="underline">
                  +503 7456 7890
                </a>
              </p>
            </div>
    
            {/* Columna 2: Apoyo */}
            <div>
              <h4 className="font-bold text-lg mb-2">Apoyo</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>Ayuda y preguntas frecuentes</li>
                <li>Seguimiento de su pedido</li>
                <li>Envíos y devoluciones</li>
                <li>Accesibilidad</li>
              </ul>
            </div>
    
            {/* Columna 3: Suscripción */}
            <div>
              <h4 className="font-bold text-lg mb-2">
                Suscríbete a nuestro boletín informativo
              </h4>
              <form className="flex items-center border border-gray-200 rounded-full overflow-hidden max-w-md">
                <input
                  type="email"
                  placeholder="Dirección de correo electrónico..."
                  className="px-4 py-2 flex-grow outline-none text-sm text-gray-700"
                />
                <button className="bg-black text-white px-5 py-2 text-sm">
                  Suscribir
                </button>
              </form>
            </div>
          </div>
    
          {/* Final */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10 text-sm text-gray-500">
            <p>@NEXUS - todos los derechos reservados</p>
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <img src={visa} alt="Visa" className="h-25 w-25" />
              <img src={paypal} alt="Paypal" className="h-25 w-25" />
              <img src={stripe} alt="Stripe"className="h-25 w-25" />
            </div>
          </div>
        </footer>
      );
}

export default Footer;

