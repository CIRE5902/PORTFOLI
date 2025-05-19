const translations = {
  es: {
    home: {
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
    contact: {
      contactTitle: "Contacto",
      contactIntro: "¿Quieres ponerte en contacto conmigo? Rellena el formulario."
    }
  },
  en: {
    home: {
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
    contact: {
      contactTitle: "Contact",
      contactIntro: "Want to get in touch with me? Fill out the form."
    }
  },
  ca: {
    home: {
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
    },
    contact: {
      contactTitle: "Contacte",
      contactIntro: "Vols contactar amb mi? Omple el formulari."
    }
  }
};

function changeLanguage(language, page) {
  const global = translations[language]?.global || {};
  const pageContent = translations[language]?.[page] || {};
  const content = { ...global, ...pageContent };

  for (const id in content) {
    const el = document.getElementById(id);
    if (el) {
      const text = content[id];
      el[text.includes('<span') ? 'innerHTML' : 'textContent'] = text;
    }
  }

  localStorage.setItem('selectedLanguage', language);
}

function setupLanguageSelector(page) {
  const selector = document.getElementById('languageSelector');
  const options = document.querySelector('.language-options');

  selector?.addEventListener('click', () => {
    selector.classList.toggle('show-options');
  });

  options?.addEventListener('click', (e) => {
    const selected = e.target.closest('div[data-lang]');
    if (selected) {
      const lang = selected.getAttribute('data-lang');
      const imgSrc = selected.querySelector('img').src;
      document.getElementById('selectedLanguage').innerHTML = `<img src="${imgSrc}" alt="Bandera">`;
      selector.classList.remove('show-options');
      changeLanguage(lang, page);
    }
  });

  window.addEventListener('click', (e) => {
    if (!selector?.contains(e.target)) {
      selector.classList.remove('show-options');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.getAttribute('data-page') || 'home';
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'es';
  changeLanguage(savedLanguage, page);

  const selectedFlag = document.querySelector(`div[data-lang="${savedLanguage}"] img`);
  if (selectedFlag) {
    document.getElementById('selectedLanguage').innerHTML = `<img src="${selectedFlag.src}" alt="Bandera">`;
  }

  setupLanguageSelector(page);
});
