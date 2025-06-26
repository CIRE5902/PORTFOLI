document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("tagCanvas");

  // Inicia TagCanvas
  try {
    TagCanvas.Start("tagCanvas", "tags", {
      textColour: null,
      outlineColour: "#ffffff",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      imageScale: 2,
      weight: true,
      clickToFront: 500,
      shape: "sphere",
      noSelect: true,
      fadeIn: 1000,
      initial: [0.1, -0.1],
    });
  } catch (e) {
    console.error("TagCanvas error:", e);
  }

  // 🔒 Bloquear zoom por scroll en touchpad o ratón si el canvas está activo
  canvas.addEventListener(
    "wheel",
    (e) => {
      // Previene zoom por scroll sin necesidad de ctrlKey
      if (canvas.matches(":hover")) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  // 🔒 Bloquear zoom por teclado
  window.addEventListener("keydown", (e) => {
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === "+" || e.key === "-" || e.key === "=") &&
      canvas.matches(":hover")
    ) {
      e.preventDefault();
    }
  });
});
