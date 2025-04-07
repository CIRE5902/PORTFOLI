document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("SCiElbajNfEMtFbNb");
  
    const form = document.querySelector("form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        emailjs.sendForm("service_9sk31cp", "template_c7r2mmg", this).then(
            function () {
            alert("Correo enviado!");
          },
          function (error) {
            console.error("Error al enviar", error);
          }
        );
      });
    }
  });
  