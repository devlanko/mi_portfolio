
// JavaScript
function cambiaClase() {
    this.classList.toggle("is-active");
    document.querySelector("body").classList.toggle("nav-activo");
   
}
  
document.querySelector(".header-nav-icon").addEventListener("click", cambiaClase);
  
  