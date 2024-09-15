// Obtener los elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Función para alternar el estado del menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'open' en el sidebar
    sidebar.classList.toggle('open');
    
    // Mover el icono del menú junto con el sidebar
    menuToggle.classList.toggle('menu-open');
    
    // Cambiar el icono entre '☰' y '×'
    if (sidebar.classList.contains('open')) {
        menuToggle.textContent = '×';  // Mostrar la cruz cuando el menú esté abierto
    } else {
        menuToggle.textContent = '☰';  // Mostrar el icono de menú cuando esté cerrado
    }
});
