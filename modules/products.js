// lista con los productos
export const products = [
	{
		id: 1,
		img: "https://media.istockphoto.com/id/1174632449/es/foto/vista-lateral-del-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9-con-caf%C3%A9.jpg?s=612x612&w=0&k=20&c=4DoI5_igdynyhjBxrZrTKU5duSYjbPVf1oBfUEujnvY=",
		name: "Café ",
		description: "Una taza de café puro, de sabor intenso y aroma profundo, ideal para iniciar el día con energía.",
		price: 200,
    },
	{
		id: 2,
		img: "https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg",
		name: "Café Latte",
		description:"Delicado y cremoso, el café latte combina la intensidad del espresso con la suavidad de la leche.",
		price: 250,
	},
	{
		id: 3,
		img: "https://recetasd.com/wp-content/uploads/2013/01/IMG_191872-490x320.jpg",
		name: "Café Moca",
		description:"Un delicioso café moca, con una mezcla equilibrada de chocolate y espresso para los amantes del dulce.",
		price: 300,
	},
	{
		id: 4,
		img: "https://i.pinimg.com/originals/71/3f/0b/713f0b7701b3e801c15e1e6c43a1cb78.jpg",
		name: "Café",
		description:"Una taza de café puro, de sabor intenso y aroma profundo, ideal para iniciar el día con energía.",
		price: 150,
	},
	{
		id: 5,
		img: "https://i.pinimg.com/originals/71/3f/0b/713f0b7701b3e801c15e1e6c43a1cb78.jpg",
		name: "Café",
		description:"Una taza de café puro, de sabor intenso y aroma profundo, ideal para iniciar el día con energía.",
		price: 150,
	},
	{
		id: 6,
		img: "https://i.pinimg.com/originals/71/3f/0b/713f0b7701b3e801c15e1e6c43a1cb78.jpg",
		name: "Café",
		description:"Una taza de café puro, de sabor intenso y aroma profundo, ideal para iniciar el día con energía.",
		price: 150,
	},
	{
		id: 8,
		img: "https://i.pinimg.com/originals/71/3f/0b/713f0b7701b3e801c15e1e6c43a1cb78.jpg",
		name: "Café",
		description:"Una taza de café puro, de sabor intenso y aroma profundo, ideal para iniciar el día con energía.",
		price: 150,
	},
	{
		id: 9,
		img: "https://i.pinimg.com/originals/71/3f/0b/713f0b7701b3e801c15e1e6c43a1cb78.jpg",
		name: "Café",
		description:"Una taza de café puro, de sabor intenso y aroma profundo, ideal para iniciar el día con energía.",
		price: 150,
	},
];

//función para crear las tarjetas de productos
export function renderProducts(){

    let card = document.getElementById("card-template");

    products.map((o) => {
      // se crean las cards en el index
        card.innerHTML += `
            <article class="col card-container">
                <div class="card h-100 card-product">
                    <div class="card-product-image">
                        <img src="${o.img}" class="card-img-top" alt="${o.name}">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title">${o.name}</h3>
                        <p class="card-text">${o.description}</p>
                        <span class="card-price"><strong>$${o.price}</strong></span>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="card-button btn btn-outline-dark">
                        Agregar al carrito
                        </button>
                    </div>
                </div>
            </article>
        `;
    });
};