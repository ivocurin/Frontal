const hero = document.querySelector('.hero-section');

const sections = document.querySelectorAll(
  '.about-section, .services-section, .catalogue-section, .gallery-section, .contact-section'
);

const navLinks = document.querySelectorAll('.main-nav a, .hero-buttons a, .site-footer a');
const menuLinks = document.querySelectorAll('.main-nav a');

const logo = document.querySelector('.logo');
const header = document.querySelector('.site-header');
const footer = document.querySelector('.site-footer');

function hideAllSections() {
  sections.forEach(section => {
    section.style.display = 'none';
    section.classList.remove('show');
  });

  hero.style.display = 'none';
  hero.classList.remove('show');

}

function setActiveNav(targetId) {
  menuLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === targetId) {
      link.classList.add('active');
    }
  });
}

function showSection(id) {
  window.scrollTo(0, 0);

  hideAllSections();

  if (id === '#hero') {
    hero.style.display = 'flex';

    setTimeout(() => {
      hero.classList.add('show');
    }, 100);

    setActiveNav('#hero');
    return;
  }

  const section = document.querySelector(id);

  if (section) {
    section.style.display = 'block';

    setTimeout(() => {
      section.classList.add('show');
    }, 100);

    setActiveNav(id);
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const target = this.getAttribute('href');

    if (target && target.startsWith('#')) {
      e.preventDefault();
      showSection(target);
    }
  });
});

logo.addEventListener('click', function (e) {
  e.preventDefault();
  showSection('#hero');
});

function toggleFooterVisibility() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= docHeight - 20) {
    footer.classList.add('show');
  } else {
    footer.classList.remove('show');
  }
}

window.addEventListener('scroll', toggleFooterVisibility);
window.addEventListener('resize', toggleFooterVisibility);

showSection('#hero');
toggleFooterVisibility();