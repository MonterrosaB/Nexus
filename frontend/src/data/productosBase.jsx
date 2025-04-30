// src/data/productosBase.js

import grafica1 from "../assets/GRAFICA-BANER-1.svg";
import almacenamiento from "../assets/ALMACENAMIENTO.svg";
import ventilador from "../assets/VENTILADOR-BANER-1.svg";
import ram from "../assets/MEMORIARAM-BANER-1.svg";
import caseImg from "../assets/PC-BANER-1.svg";
import fuente from "../assets/FUENTEDEPODER.svg";
import motherboard from "../assets/TARGETAMADRE-BANER-1.svg";
import procesador from "../assets/PROCESADOR.svg";
import proteccion from "../assets/PROTECCION.svg";
import monitor from "../assets/MONITORES.svg";
import laptop from "../assets/LAPTOPS.svg";
import perifericos from "../assets/PERIFERICOS.svg";

export const productosBase = [
  {
    id: 1,
    nombre: "RTX 4090",
    categoria: "Tarjeta gráfica",
    marca: "NVIDIA",
    color: "Negro",
    precio: 1500,
    imagen: grafica1,
    descripcion:
      "La NVIDIA RTX 4090 ofrece un rendimiento gráfico sin precedentes con arquitectura Ada Lovelace, ideal para gaming en 4K, edición de video y tareas de inteligencia artificial.",
    specs: [
      "Memoria: 24GB GDDR6X",
      "Núcleos CUDA: 16384",
      "Interfaz de memoria: 384-bit",
      "Ray Tracing y DLSS 3",
      "Conectores: 3x DisplayPort, 1x HDMI"
    ]
  },
  {
    id: 2,
    nombre: "Samsung SSD 1TB",
    categoria: "Almacenamiento",
    marca: "Samsung",
    color: "Negro",
    precio: 120,
    imagen: almacenamiento,
    descripcion:
      "SSD Samsung de 1TB con tecnología V-NAND, velocidades ultra rápidas para cargas y transferencias.",
    specs: [
      "Capacidad: 1TB",
      "Formato: M.2 NVMe",
      "Velocidad lectura: hasta 3,500 MB/s",
      "Velocidad escritura: hasta 3,200 MB/s",
      "Tecnología: V-NAND 3-bit MLC"
    ]
  },
  {
    id: 3,
    nombre: "Cooler Master AIO",
    categoria: "Enfriamiento",
    marca: "Cooler Master",
    color: "Blanco",
    precio: 95,
    imagen: ventilador,
    descripcion:
      "Sistema AIO eficiente para mantener tu CPU fresco incluso en tareas exigentes.",
    specs: [
      "Radiador: 240mm",
      "Ventiladores: 2x 120mm PWM",
      "Compatibilidad: Intel y AMD",
      "Nivel de ruido: Bajo",
      "Iluminación: RGB"
    ]
  },
  {
    id: 4,
    nombre: "Corsair Vengeance 16GB",
    categoria: "Memoria Ram",
    marca: "Corsair",
    color: "Rojo",
    precio: 80,
    imagen: ram,
    descripcion:
      "Módulo DDR4 de alto rendimiento para gamers y creadores de contenido.",
    specs: [
      "Capacidad: 16GB (2x8GB)",
      "Velocidad: 3200MHz",
      "Tipo: DDR4",
      "Perfil XMP 2.0",
      "Latencia: CL16"
    ]
  },
  {
    id: 5,
    nombre: "NZXT H510",
    categoria: "Cases",
    marca: "NZXT",
    color: "Blanco",
    precio: 90,
    imagen: caseImg,
    descripcion:
      "Gabinete minimalista con excelente ventilación y gestión de cables.",
    specs: [
      "Formato: Mid Tower",
      "Compatibilidad: ATX, mATX, ITX",
      "Panel: Vidrio templado",
      "Filtros de polvo incluidos",
      "Bahías: 2x 2.5”, 2x 3.5”"
    ]
  },
  {
    id: 6,
    nombre: "EVGA 650W Gold",
    categoria: "Fuente de poder",
    marca: "EVGA",
    color: "Negro",
    precio: 110,
    imagen: fuente,
    descripcion:
      "Fuente modular con eficiencia 80+ Gold, ideal para PCs de alto rendimiento.",
    specs: [
      "Potencia: 650W",
      "Certificación: 80 Plus Gold",
      "Modularidad: Totalmente modular",
      "Ventilador silencioso de 135mm",
      "Protecciones: OVP, UVP, OCP, SCP"
    ]
  },
  {
    id: 7,
    nombre: "ASUS Z790",
    categoria: "Tarjeta madre",
    marca: "ASUS",
    color: "Gris",
    precio: 290,
    imagen: motherboard,
    descripcion:
      "Placa base potente y lista para el futuro, con soporte DDR5 y PCIe 5.0.",
    specs: [
      "Socket: LGA1700",
      "Chipset: Z790",
      "Memoria: DDR5 hasta 6400MHz",
      "PCIe 5.0 x16",
      "Conectividad: USB-C, Wi-Fi 6E"
    ]
  },
  {
    id: 8,
    nombre: "AMD Ryzen 9",
    categoria: "Procesadores",
    marca: "AMD",
    color: "Negro",
    precio: 450,
    imagen: procesador,
    descripcion:
      "Procesador de gama alta para multitarea, gaming y creación de contenido.",
    specs: [
      "Núcleos: 12",
      "Hilos: 24",
      "Frecuencia base: 3.8GHz",
      "Boost: hasta 5.6GHz",
      "Socket: AM5"
    ]
  },
  {
    id: 9,
    nombre: "UPS APC",
    categoria: "Protección",
    marca: "APC",
    color: "Negro",
    precio: 60,
    imagen: proteccion,
    descripcion:
      "Sistema de respaldo confiable para proteger tus equipos electrónicos.",
    specs: [
      "Capacidad: 600VA / 330W",
      "Salidas: 4 con respaldo",
      "Tiempo de autonomía: hasta 20 min",
      "Indicadores LED",
      "Software de gestión incluido"
    ]
  },
  {
    id: 10,
    nombre: "Samsung Odyssey G9",
    categoria: "Monitores",
    marca: "Samsung",
    color: "Negro",
    precio: 1300,
    imagen: monitor,
    descripcion:
      "Monitor curvo ultrawide con frecuencia ultra alta y colores vibrantes.",
    specs: [
      "Tamaño: 49 pulgadas",
      "Resolución: 5120 x 1440",
      "Frecuencia: 240Hz",
      "Tiempo de respuesta: 1ms",
      "Tecnología: QLED, HDR1000"
    ]
  },
  {
    id: 11,
    nombre: "Dell XPS 15",
    categoria: "Laptops",
    marca: "Dell",
    color: "Gris",
    precio: 1800,
    imagen: laptop,
    descripcion:
      "Laptop premium con pantalla 4K, ideal para edición, diseño y trabajo remoto.",
    specs: [
      "Pantalla: 15.6” 4K OLED",
      "Procesador: Intel i7",
      "RAM: 16GB DDR5",
      "Almacenamiento: 1TB SSD",
      "Gráficos: NVIDIA RTX 4050"
    ]
  },
  {
    id: 12,
    nombre: "Logitech Combo",
    categoria: "Perifericos",
    marca: "Logitech",
    color: "Negro",
    precio: 75,
    imagen: perifericos,
    descripcion:
      "Combo de teclado y mouse inalámbricos diseñados para productividad y confort.",
    specs: [
      "Tipo: Inalámbrico",
      "Conectividad: USB receptor 2.4GHz",
      "Duración de batería: hasta 36 meses",
      "Teclado: Silencioso y resistente a salpicaduras",
      "Mouse: Sensor óptico preciso"
    ]
  }
];


