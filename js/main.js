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

// Header con sombra al hacer scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

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

// Fecha mínima: hoy
const fechaInput = document.getElementById('fecha');
const today = new Date().toISOString().split('T')[0];
fechaInput.min = today;
