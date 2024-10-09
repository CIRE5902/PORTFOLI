// Seleccionamos el body y el botón de cambio de tema
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i'); // Seleccionamos el icono dentro del botón

// Manejador del evento para cambiar entre modo claro y oscuro
themeToggle.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Cambiar el icono y el tooltip según el modo actual
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambiamos el icono de luna a sol
        themeToggle.setAttribute('data-tooltip', 'Modo Oscuro');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambiamos el icono de sol a luna
        themeToggle.setAttribute('data-tooltip', 'Modo Claro');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show'); // Alternar la clase 'show' para abrir/cerrar el menú
    });
});


const languageSelector = document.getElementById('languageSelector');
    const selectedLanguage = document.getElementById('selectedLanguage');
    const languageOptions = document.querySelector('.language-options');

    languageSelector.addEventListener('click', function() {
        languageSelector.classList.toggle('show-options');
    });

    languageOptions.addEventListener('click', function(e) {
        if (e.target.closest('div[data-lang]')) {
            const selectedOption = e.target.closest('div[data-lang]');
            const imgSrc = selectedOption.querySelector('img').src;

            selectedLanguage.innerHTML = `<img src="${imgSrc}" alt="Bandera">`;
            languageSelector.classList.remove('show-options');
        }
    });

    // Cerrar el selector si se hace clic fuera de él
    window.addEventListener('click', function(e) {
        if (!languageSelector.contains(e.target)) {
            languageSelector.classList.remove('show-options');
        }
    });