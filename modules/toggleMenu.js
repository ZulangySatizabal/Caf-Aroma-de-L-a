/* Alterna la visibilidad del menú de navegación cuando se hace clic en el botón de menú. */

export function toggleMenu(){
    let button = document.querySelector("#menu-toggle-button");
    let navMenu = document.getElementById("nav-menu");

    button.addEventListener("click", function() {
        console.log("click")
        navMenu.classList.toggle("active");
    });
};