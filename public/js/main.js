// Navegación móvil
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Cerrar menú al hacer clic en un enlace
navMenu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

// Header con sombra y ocultación del menú general al hacer scroll
const header = document.getElementById('header');
const body = document.body;

const updateScrollState = () => {
  const scrolled = window.scrollY > 24;
  body.classList.toggle('is-scrolled', scrolled);
  header.classList.toggle('scrolled', scrolled);
};

window.addEventListener('scroll', updateScrollState, { passive: true });
updateScrollState();

// Resaltar enlace activo según sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -40% 0px' }
);

sections.forEach(section => observer.observe(section));

// Formulario de citas
const form = document.getElementById('appointment-form');
if (form) {
  const formSuccess = document.getElementById('form-success');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const especialidad = form.especialidad.value;

    if (!nombre || !telefono || !especialidad) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    if (!form.privacidad.checked) {
      alert('Debes aceptar la política de privacidad.');
      return;
    }

    // Aquí puedes conectar con un backend o servicio de email (Formspree, etc.)
    form.reset();
    formSuccess.hidden = false;

    setTimeout(() => {
      formSuccess.hidden = true;
    }, 6000);
  });
}

// Fecha mínima: hoy
const fechaInput = document.getElementById('fecha');
if (fechaInput) {
  const today = new Date().toISOString().split('T')[0];
  fechaInput.min = today;
}

// Buscador global del panel superior
const searchInput = document.getElementById('site-search-input');
const searchResults = document.getElementById('site-search-results');

if (searchInput && searchResults) {
  const normalizeText = value =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();

  const rawSearchIndex = JSON.parse(searchInput.dataset.searchIndex || '[]');
  const searchIndex = rawSearchIndex.map(item => {
    const fullText = [item.label, ...(item.keywords || [])].join(' ');
    return {
      ...item,
      normalized: normalizeText(fullText),
      normalizedLabel: normalizeText(item.label),
    };
  });

  let activeIndex = -1;
  let visibleResults = [];

  const hideResults = () => {
    searchResults.hidden = true;
    searchInput.setAttribute('aria-expanded', 'false');
    activeIndex = -1;
  };

  const showResults = () => {
    searchResults.hidden = false;
    searchInput.setAttribute('aria-expanded', 'true');
  };

  const goToResult = result => {
    if (!result || !result.url) return;
    window.location.href = result.url;
  };

  const getMatches = query => {
    const normalizedQuery = normalizeText(query);
    if (!normalizedQuery) return [];

    return searchIndex
      .map(item => {
        const startsWith = item.normalizedLabel.startsWith(normalizedQuery);
        const includes = item.normalized.includes(normalizedQuery);
        if (!startsWith && !includes) return null;
        return {
          ...item,
          score: startsWith ? 0 : 1,
        };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score || a.label.localeCompare(b.label, 'es'))
      .slice(0, 7);
  };

  const renderResults = matches => {
    visibleResults = matches;
    searchResults.innerHTML = '';

    if (!matches.length) {
      hideResults();
      return;
    }

    matches.forEach((match, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'search-panel__result';
      button.setAttribute('role', 'option');
      button.setAttribute('data-index', String(index));
      button.innerHTML = `<span>${match.label}</span><small>${match.url.replace(/^\//, '/')}</small>`;
      button.addEventListener('click', () => goToResult(match));
      li.appendChild(button);
      searchResults.appendChild(li);
    });

    showResults();
  };

  const syncActiveItem = () => {
    const options = searchResults.querySelectorAll('.search-panel__result');
    options.forEach(option => option.classList.remove('is-active'));

    if (activeIndex < 0 || activeIndex >= options.length) return;
    options[activeIndex].classList.add('is-active');
    options[activeIndex].scrollIntoView({ block: 'nearest' });
  };

  searchInput.addEventListener('input', () => {
    activeIndex = -1;
    renderResults(getMatches(searchInput.value));
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) {
      renderResults(getMatches(searchInput.value));
    }
  });

  searchInput.addEventListener('keydown', event => {
    if (searchResults.hidden && event.key !== 'Enter') return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!visibleResults.length) return;
      activeIndex = (activeIndex + 1) % visibleResults.length;
      syncActiveItem();
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!visibleResults.length) return;
      activeIndex = activeIndex <= 0 ? visibleResults.length - 1 : activeIndex - 1;
      syncActiveItem();
      return;
    }

    if (event.key === 'Escape') {
      hideResults();
      return;
    }

    if (event.key === 'Enter') {
      const matches = getMatches(searchInput.value);
      if (!matches.length) return;
      event.preventDefault();
      const selected = activeIndex >= 0 ? visibleResults[activeIndex] : matches[0];
      goToResult(selected);
    }
  });

  document.addEventListener('click', event => {
    const clickedInsideSearch = event.target.closest('.search-panel__search');
    if (!clickedInsideSearch) {
      hideResults();
    }
  });
}

// Carrusel móvil de Club CSV con indicadores
const clubPlansTrack = document.querySelector('.club__plans');

if (clubPlansTrack) {
  const clubPlans = Array.from(clubPlansTrack.querySelectorAll('.club__plan[id]'));
  const clubChipButtons = Array.from(document.querySelectorAll('.club__mobile-chip[data-plan-target]'));
  const clubDotButtons = Array.from(document.querySelectorAll('.club__mobile-dot[data-plan-target]'));
  const controlButtons = [...clubChipButtons, ...clubDotButtons];

  const setActivePlan = planId => {
    clubChipButtons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.planTarget === planId);
    });

    clubDotButtons.forEach(button => {
      button.classList.toggle('is-active', button.dataset.planTarget === planId);
      button.setAttribute('aria-current', button.dataset.planTarget === planId ? 'true' : 'false');
    });
  };

  const scrollToPlan = planId => {
    const plan = clubPlans.find(item => item.id === planId);
    if (!plan) return;
    plan.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

  controlButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const target = button.dataset.planTarget;
      if (!target) return;
      setActivePlan(target);
      scrollToPlan(target);
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActivePlan(entry.target.id);
        }
      });
    },
    {
      root: clubPlansTrack,
      threshold: 0.65,
    }
  );

  clubPlans.forEach(plan => observer.observe(plan));
}
