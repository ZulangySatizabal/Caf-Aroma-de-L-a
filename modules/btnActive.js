/* Alterna la visibilidad del menú de navegación cuando se hace clic en el botón de menú. */

export function toggleMenu(){
    let button = document.querySelector("#menu-toggle-button");
    let navMenu = document.getElementById("nav-menu");

    button.addEventListener("click", function() {
        console.log("toggle")
        navMenu.classList.toggle("active");
    });
};


/* Alterna la visibilidad del submenu cuando se hace clic en la opción Productos */

export function dropdownMenu(){
    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            console.log("click")
            dropdown.classList.toggle('active');
        });
    });

}