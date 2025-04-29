import deiv from "../../assets/deiV.svg";
import mision from "../../assets/mision.svg";
import vision from "../../assets/vision.svg";

const SobreNosotros = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <img
        src={deiv}
        alt="Imagen representativa"
        className="rounded-lg w-full max-w-5xl mb-8"
      />

      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-6">Sobre Nosotros</h1>

        <h2 className="text-xl text-gray-700 mb-6">
          En Nexus, nos especializamos en la venta, armado y personalización de
          PCs, ofreciendo soluciones avanzadas para gamers, profesionales y
          empresas. Nuestra misión es proporcionar equipos de alto rendimiento
          con asesoramiento experto y una personalización única, asegurando que
          cada cliente obtenga exactamente lo que necesita.
        </h2>

        <h2 className="text-xl text-gray-700 mb-6">
          Todo comenzó cuando David Zepeda, nuestro fundador, buscaba un equipo
          que se adaptara a sus necesidades como programador full stack y
          creador de contenido en YouTube. Al explorar el mercado, notó que las
          opciones existentes no ofrecían la combinación ideal de componentes de
          calidad, asesoramiento especializado y personalización real. Viendo en
          esto una oportunidad, decidió crear Nexus, una empresa enfocada en
          ofrecer justo lo que otros no podían: tecnología de vanguardia con un
          enfoque personalizado.
        </h2>

        <h2 className="text-xl text-gray-700 mb-6">
          Hoy, Nexus se posiciona como un referente en tecnología, brindando una
          experiencia integral tanto en nuestra tienda física como en nuestra
          plataforma digital. Nos apasiona la tecnología y estamos comprometidos
          en impulsar el futuro del hardware con soluciones a la medida de cada
          usuario.
        </h2>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-12">
          ¿Buscas potencia, rendimiento y personalización? En Nexus, llevamos tu
          experiencia tecnológica al siguiente nivel.
        </h2>

        {/* Misión */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          <img
            src={mision}
            alt="Imagen de la misión"
            className="rounded-lg w-full max-w-xs md:max-w-sm"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Misión</h2>
            <p className="text-lg text-gray-700">
              Ofrecer a los entusiastas y profesionales del mundo de la
              computación una experiencia única en la compra y personalización
              de PC, proporcionando componentes de alta calidad y servicios de
              armado personalizados que se adapten a las necesidades de cada
              cliente.
            </p>
          </div>
        </div>

        {/* Visión */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Visión</h2>
            <p className="text-lg text-gray-700">
              Convertirse en el referente líder en el mercado de hardware y
              soluciones personalizadas para PC, destacándose por la innovación,
              el asesoramiento experto y la excelencia en el servicio al cliente.
            </p>
          </div>
          <img
            src={vision}
            alt="Imagen de la visión"
            className="rounded-lg w-full max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default SobreNosotros;
