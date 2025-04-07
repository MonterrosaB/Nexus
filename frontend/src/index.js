// Desvanecer la pantalla de carga
gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 1.0,
    }
  );
  
  // Animar el texto del logo (Nexus)
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.1,
    }
  );
  
  // 💡 Agregar efecto pulsante al logo (imagen SVG)
  gsap.fromTo("#svg",
    { opacity: 0, scale: 0.5, rotation: -90 },
    { opacity: 1, scale: 1, rotation: 0, duration: 2, ease: "elastic.out(1, 0.5)" }
  );
  