import { dropdownMenu, toggleMenu } from "./modules/btnActive.js";
import { renderProducts } from "./modules/products.js";
// import { addCart } from "./modules/cart.js"; se usa en products.js
import "./modules/cart.js";



// función para que se rendericen las tarjetas
renderProducts();
//mostrar u ocultar el nav responsive
toggleMenu();
//mostrar u ocultar el submenu
dropdownMenu();


