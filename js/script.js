async function asyncLoadProducts() {
  try {
    
    // Le asigno a response los datos de la API de fakeStore
    // Utilizo fetch para obtener los productos de la API
    
    const response = await fetch("https://fakestoreapi.com/products");
    
    // datos recibe los articulos en formato .json
    const datos = await response.json();

    // Agregamos al contenedor de productos.
    // Utilizo forEach para recorrer cada producto y agregarlo al contenedor
    
    datos.forEach(producto => {
      contenedorProductos.innerHTML += `

      <div class="item">
        <form id="my_form${producto.id}">
          <img src="${producto.image}"" width="100" height="100" alt="">
          <p class="descripcion">${producto.title}</p>
          <p class="precio">$${producto.price}</p>
          <button class="btn-item">Comprar</button>
      </div>  

    `;
    seccionProductos.append(contenedorProductos);
    });

  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}

document.addEventListener("DOMContentLoaded", asyncLoadProducts);


//Variable para asociar a mi contenedor html de productos
const seccionProductos = document.getElementById('seccion_productos');

//Creo un div contenedor para los productos y le agrego una clase 
const contenedorProductos = document.createElement('div');
contenedorProductos.classList.add('prod-container');



