
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