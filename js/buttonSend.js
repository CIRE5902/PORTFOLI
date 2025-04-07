document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.querySelector('.btn-send');
    const btnText = sendBtn.querySelector('p');
  
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      if (!sendBtn.classList.contains('clicked')) {
        sendBtn.classList.add('clicked');
        btnText.textContent = "Sent!";
  
        setTimeout(() => {
          sendBtn.classList.remove('clicked');
          btnText.textContent = "Send Message";
        }, 2000);
      }
    });
  });
  