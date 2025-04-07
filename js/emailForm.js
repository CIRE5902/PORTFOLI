// const form = document.getElementById('contact-form');
// const responseMessage = document.getElementById('response-message');

// form.addEventListener('submit', async function (e) {
//   // e.preventDefault(); 

//   const formData = new FormData(form);

//   try {
//     const response = await fetch('https://formspree.io/f/xwplwbvo', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       responseMessage.textContent = '¡Mensaje enviado con éxito!';
//       responseMessage.style.color = 'green';
//       form.reset(); 
//     } else {
//       responseMessage.textContent = 'Ocurrió un error al enviar tu mensaje.';
//       responseMessage.style.color = 'red';
//     }
//   } catch (error) {
//     responseMessage.textContent = 'No se pudo conectar con el servidor.';
//     responseMessage.style.color = 'red';
//   }
// });
