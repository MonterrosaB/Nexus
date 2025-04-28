import React, { useState, useRef  } from "react";

const contactanos = () => {

  const [submitted, setSubmitted] = useState(false);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí podrías agregar el envío de datos a tu backend o servicio de email
  };

  const handleInput = () => {
    const textarea = messageRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set to scrollHeight
    }
  };

  return (
    <>

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                className="w-full border-b-2 border-black focus:outline-none focus:border-blue-500 py-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Apellido</label>
              <input
                type="text"
                className="w-full border-b-2 border-black focus:outline-none focus:border-blue-500 py-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              className="w-full border-b-2 border-black focus:outline-none focus:border-blue-500 py-1"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Escribe un mensaje
            </label>
            <textarea
              rows="5"
              className="w-full border-b-2 border-black focus:outline-none focus:border-blue-500 py-1 resize-none overflow-y-auto"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition"
            >
              Enviar
            </button>
            {submitted && (
              <p className="text-green-600 font-semibold mt-4 md:mt-0">
                ¡Gracias por tu mensaje!
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
    </>
  )
};
export default contactanos;
