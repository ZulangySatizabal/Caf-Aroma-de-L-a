export function addCart(productId){

        //Se accede al nombre y al id del producto
        const productName = document.querySelector(`#product-${productId} .product-name`).textContent;

        //Se muestra una alerta con el nombre del producto cuando se selecciona 
        alert(`Producto ${productName} agregado al carrito`);
}

// Hacer que `addCart` esté disponible globalmente para el uso en onclick
window.addCart = addCart;