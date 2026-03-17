const hero = document.querySelector('.hero-section');
const sections = document.querySelectorAll('.about-section, .products-section, .why-us-section, .gallery-section, .contact-section');
const navLinks = document.querySelectorAll('.main-nav a, .hero-buttons a');

function hideAllSections(){
  sections.forEach(section=>{
    section.style.display = "none";
    section.classList.remove("show");
  });
}

function showSection(id){

  if(id === "#hero"){
    hideAllSections();
    hero.style.display = "flex";
    return;
  }

  hero.style.display = "none";
  hideAllSections();

  const section = document.querySelector(id);

  if(section){
    section.style.display = "block";

    setTimeout(()=>{
      section.classList.add("show");
    },100);
  }

}

navLinks.forEach(link=>{
  link.addEventListener("click", function(e){

    const target = this.getAttribute("href");

    if(target.startsWith("#")){
      e.preventDefault();
      showSection(target);
    }

  });
});