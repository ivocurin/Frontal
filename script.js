const hero = document.querySelector('.hero-section');

const sections = document.querySelectorAll(
  '.about-section, .products-section, .why-us-section, .gallery-section, .contact-section'
);

const navLinks = document.querySelectorAll('.main-nav a, .hero-buttons a');

const logo = document.querySelector('.logo');

/* hide everything */

function hideAllSections(){

  sections.forEach(section=>{
    section.style.display = "none";
    section.classList.remove("show");
  });

  hero.style.display = "none";
  hero.classList.remove("show");

}

/* show selected section */

function showSection(id){

  hideAllSections();

  if(id === "#hero"){

    hero.style.display = "flex";

    setTimeout(()=>{
      hero.classList.add("show");
    },100);

    return;

  }

  const section = document.querySelector(id);

  if(section){

    section.style.display = "block";

    setTimeout(()=>{
      section.classList.add("show");
    },100);

  }

}

/* navigation links */

navLinks.forEach(link=>{

  link.addEventListener("click", function(e){

    const target = this.getAttribute("href");

    if(target.startsWith("#")){
      e.preventDefault();
      showSection(target);
    }

  });

});

/* logo reset */

logo.addEventListener("click", function(e){

  e.preventDefault();
  showSection("#hero");

});

/* initial state */

showSection("#hero");