// Función que maneja el envío del formulario sin redirección
function handleFormSubmission(e) {
    e.preventDefault(); // Previene la redirección de Netlify
  
    const form = e.target;
    const formData = new FormData(form);
  
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    .then((response) => {
      if (response.ok) {
        document.getElementById("form-response").style.display = "block";
        document.getElementById("form-response").innerText = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";
        form.reset(); // Limpiar el formulario
      } else {
        document.getElementById("form-response").style.display = "block";
        document.getElementById("form-response").innerText = "Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.";
      }
    })
    .catch(() => {
      document.getElementById("form-response").style.display = "block";
      document.getElementById("form-response").innerText = "Hubo un error al enviar el mensaje. Por favor, inténtalo nuevamente.";
    });
  }
  