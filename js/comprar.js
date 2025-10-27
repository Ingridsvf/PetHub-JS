let productosArray = [];

const contenedorProductos = document.querySelector(".galeria-productos");
let botonesComprar = document.querySelectorAll(".boton");
let carrito = JSON.parse(localStorage.getItem("productos-carrito")) || [];

//Creación de tarjeta de cada producto
function tarjetaProducto (productosCategoria) {
    productosCategoria.forEach (producto => {
        const divProductos = document.createElement("div");
        divProductos.classList.add ("producto");
        divProductos.innerHTML =
        `<img src="/${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <h3>S/${producto.precio}</h3>
            <button class="boton" id="${producto.id}">Añadir al carrito</button>`;
        contenedorProductos.appendChild (divProductos);
    })
    botonAgregarProducto ();
  
}


async function mostrarProductos() {
try {
  const response = await fetch("/js/array.json");
  const data = await response.json();
  productosArray = data;
//Filtrado de productos por categoría
const paginaActual = window.location.pathname;
if (paginaActual.includes("index.html")) {
  const productosIndex = productosArray.filter(producto => producto.categoria.includes("masvendido"));
  tarjetaProducto(productosIndex);
} else if (paginaActual.includes("perros.html")) {
  const categoriaPerros = productosArray.filter(producto => producto.categoria.includes("perro"));
  tarjetaProducto(categoriaPerros);
} else if (paginaActual.includes("gatos.html")) {
  const categoriaGatos = productosArray.filter(producto => producto.categoria.includes("gato"));
  tarjetaProducto(categoriaGatos);
} 
else if (paginaActual.includes("otrasmascotas.html")) {
  const categoriaOtros = productosArray.filter(producto => producto.categoria === "otros");
  tarjetaProducto(categoriaOtros);
} else if (paginaActual.includes("petlovers.html")) {
  const categoriaPetLovers = productosArray.filter(producto => producto.categoria === "lovers");
  tarjetaProducto(categoriaPetLovers);
}

} catch (error){
  console.log(`Error:${error}`)
}
}
mostrarProductos();




function botonAgregarProducto () {
    botonesComprar = document.querySelectorAll(".boton");
    botonesComprar.forEach(boton =>{
        boton.addEventListener("click", (event)=>{
            añadirAlCarrito(event.target.id);
            Toastify({
                text: "Producto agregado al carrito",
                duration: 3000,
                gravity:"top",
                position:"center",
                backgroundColor: "#c6b5eeff",
            }).showToast();
        })
});

}

//Contador de productos en el icono del carrito
function contadorProductos (){
 const productosCarrito = JSON.parse(localStorage.getItem("productos-carrito")) ;
 const contadores = document.querySelectorAll (".circulo");

 const cantidadCarrito = productosCarrito.reduce ((acumulador ,producto) => acumulador + producto.cantidad,0); // suma del total de productos

contadores.forEach(contador => {
    contador.innerText = cantidadCarrito;
  });
}
contadorProductos ();



/*AGREGANDO PRODUCTO AL CARRITO*/
function añadirAlCarrito (botonId){
    let productoElegido = productosArray.find(producto => producto.id === botonId); //buscar el id del producto seleccionado

if (carrito.some(producto => producto.id === botonId)) {
    const index = carrito.findIndex (producto => producto.id === botonId);  // si existe se aumenta la cantidad
    carrito [index].cantidad++;
    
} else{
      carrito.push(productoElegido);  // si no existe se agrega al carrito
     productoElegido.cantidad = 1;
    } 

    localStorage.setItem("productos-carrito", JSON.stringify(carrito));
    contadorProductos ();
}


