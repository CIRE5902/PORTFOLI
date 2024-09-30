// Seleccionamos el body, el icono y el botón de cambio de tema
const body = document.body;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Manejador del evento para cambiar entre modo claro y oscuro
themeToggle.addEventListener('click', function () {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');

    // Cambiar el icono y el tooltip según el modo actual
    if (body.classList.contains('light-mode')) {
        themeIcon.src = 'images/sun.png'; // Imagen para el modo claro
        themeIcon.alt = 'Modo Claro';
        themeToggle.setAttribute('data-tooltip', 'Modo Oscuro');
    } else {
        themeIcon.src = 'images/moon.png'; // Imagen para el modo oscuro
        themeIcon.alt = 'Modo Oscuro';
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
