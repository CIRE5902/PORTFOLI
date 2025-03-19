const translations = {
    es: {
        thirdStudies: "TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB",
        secondStudies: "TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED",
        firstStudies: "TÉCNICO SUPERIOR EN SISTEMAS MICROINFORMÁTICOS Y REDES",
        thirdExperience: "TÉCNICO SUPERIOR EN DESARROLLO DE APLICACIONES WEB",
        secondExperience: "TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED",
        firstExperience: "TÉCNICO SUPERIOR EN ADMINISTRACIÓN DE SISTEMAS INFORMÁTICOS EN RED",
        menuHome: "Inicio",
        menuAbout: "Sobre",
        menuProjects: "Proyectos",
        menuStudies: "Trayectoria",
        menuContact: "Contacto",
        menuStack: "Stack",
        mainTitle: 'Hola, soy <span class="animate-title">Éric</span>',
        mainDescription: 'Soy <span class="animate-description">Desarrollador Web</span>',
        btnCV: "Curriculum",
        btnAvailable: "Disponible",
        experienceTitle: "Experiencia",
        studiesTitle: "Estudios",
        projectsTitle: "Proyectos",
        stackTitle: "Stack"
    },
    en: {
        thirdStudies: "HIGHER TECHNICIAN IN WEB APPLICATION DEVELOPMENT",
        secondStudies: "HIGHER TECHNICIAN IN NETWORK SYSTEM ADMINISTRATION",
        firstStudies: "HIGHER TECHNICIAN IN MICROCOMPUTER SYSTEMS AND NETWORKS",
        thirdExperience: "WEB APPLICATIONS DEVELOPMENT TECHNICIAN",
        secondExperience: "COMPUTER SYSTEMS ADMINISTRATION TECHNICIAN",
        firstExperience: "COMPUTER SYSTEMS ADMINISTRATION TECHNICIAN",
        menuHome: "Home",
        menuAbout: "About",
        menuProjects: "Projects",
        menuStudies: "Trajectory",
        menuContact: "Contact",
        menuStack: "Stack",
        mainTitle: 'Hi, i\'m <span class="animate-title">Éric</span>',
        mainDescription: 'I\'m a <span class="animate-description">Web Developer</span>',
        btnCV: "Resume",
        btnAvailable: "Available",
        experienceTitle: "Experience",
        studiesTitle: "Studies",
        projectsTitle: "Projects",
        stackTitle: "Stack"
    },
    ca: {
        thirdStudies: "TÈCNIC SUPERIOR EN DESENVOLUPAMENT D'APLICACIONS WEB",
        secondStudies: "TÈCNIC SUPERIOR EN ADMINISTRACIÓ DE SISTEMES INFORMÀTICS EN XARXA",
        firstStudies: "TÈCNIC SUPERIOR EN SISTEMES MICROINFORMÀTICS I XARXES",
        thirdExperience: "TÈCNIC SUPERIOR EN DESENVOLUPAMENT D'APLICACIONS WEB",
        secondExperience: "TÈCNIC SUPERIOR EN ADMINISTRACIÓ DE SISTEMES INFORMÀTICS EN XARXA",
        firstExperience: "TÈCNIC SUPERIOR EN ADMINISTRACIÓ DE SISTEMES INFORMÀTICS EN XARXA",
        menuHome: "Inici",
        menuAbout: "Sobre",
        menuProjects: "Projectes",
        menuStudies: "Trajectòria",
        menuContact: "Contacte",
        menuStack: "Stack",
        mainTitle: 'Hola, sóc <span class="animate-title">Éric</span>',
        mainDescription: 'Sóc <span class="animate-description">Desenvolupador Web</span>',
        btnCV: "Currículum",
        btnAvailable: "Disponible",
        experienceTitle: "Experiència",
        studiesTitle: "Estudis",
        projectsTitle: "Projectes",
        stackTitle: "Stack"
    }
};

// Función para cambiar el idioma
function changeLanguage(language) {
    document.getElementById("menu-home").textContent = translations[language].menuHome;
    document.getElementById("menu-about").textContent = translations[language].menuAbout;
    document.getElementById("menu-projects").textContent = translations[language].menuProjects;
    // document.getElementById("menu-studies").textContent = translations[language].menuStudies;
    document.getElementById("menu-contact").textContent = translations[language].menuContact;
    document.getElementById("menu-stack").textContent = translations[language].menuStack;
    document.getElementById("main-title").innerHTML = translations[language].mainTitle;
    document.getElementById("main-description").innerHTML = translations[language].mainDescription;
    document.getElementById("btn-cv").textContent = translations[language].btnCV;
    document.getElementById("btn-available").textContent = translations[language].btnAvailable;
    document.getElementById("experience-title").textContent = translations[language].experienceTitle;
    document.getElementById("studies-title").textContent = translations[language].studiesTitle;
    document.getElementById("projects-title").textContent = translations[language].projectsTitle;
    document.getElementById("stack-title").textContent = translations[language].stackTitle;
    document.getElementById("firstStudies").textContent = translations[language].firstStudies;
    document.getElementById("secondStudies").textContent = translations[language].secondStudies;
    document.getElementById("thirdStudies").textContent = translations[language].thirdStudies;
    document.getElementById("firstExperience").textContent = translations[language].firstExperience;
    document.getElementById("secondExperience").textContent = translations[language].secondExperience;
    document.getElementById("thirdExperience").textContent = translations[language].thirdExperience;

    localStorage.setItem('selectedLanguage', language);
}

// Cargar idioma guardado al iniciar
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
    changeLanguage(savedLanguage);

    const savedFlagSrc = document.querySelector(`div[data-lang="${savedLanguage}"] img`).src;
    document.getElementById('selectedLanguage').innerHTML = `<img src="${savedFlagSrc}" alt="Bandera">`;
});

const languageSelector = document.getElementById('languageSelector');
const languageOptions = document.querySelector('.language-options');

languageSelector.addEventListener('click', function () {
    languageSelector.classList.toggle('show-options');
});

languageOptions.addEventListener('click', function (e) {
    if (e.target.closest('div[data-lang]')) {
        const selectedOption = e.target.closest('div[data-lang]');
        const language = selectedOption.getAttribute('data-lang');
        const imgSrc = selectedOption.querySelector('img').src;

        document.getElementById('selectedLanguage').innerHTML = `<img src="${imgSrc}" alt="Bandera">`;
        languageSelector.classList.remove('show-options');
        changeLanguage(language);
    }
});

window.addEventListener('click', function (e) {
    if (!languageSelector.contains(e.target)) {
        languageSelector.classList.remove('show-options');
    }
});
