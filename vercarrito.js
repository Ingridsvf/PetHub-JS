let productosCarrito = JSON.parse(localStorage.getItem("productos-carrito")) || [];
const carritoVacio = document.querySelector("#mensaje-vacio");
const seccionCompleta = document.querySelector (".seccion-carro");


function verCarrito (){
seccionCompleta.innerHTML = [];

if (productosCarrito.length !== 0) {

    const contenedorCarro = document.createElement("div");
        contenedorCarro.classList.add ("carrito");
        contenedorCarro.innerHTML = `
        <div class="carro">
    <h4>Carro</h4></div>
    <div class="total">
  <h4>Resumen de la orden </h4></div>`;
seccionCompleta.appendChild(contenedorCarro);

productosCarrito.forEach(product => { 
const carro = document.querySelector (".carro");
let divcarro = document.createElement ("div");
divcarro.classList.add ("producto-tarjeta");
divcarro.innerHTML =`
<div class= "divboton"> <div class="nombre-product">${product.nombre} </div> 
<button class="boton-eliminar" id="${product.id}"> <i class="bi bi-trash"></i></button></div>       
          <div class="descripcion">
            <img src="../${product.imagen}" alt="${product.nombre}">
           <p>
           <br> Color: ${product.descripcion.Color}
            <br> Alto: ${product.descripcion.Alto}
            <br> Ancho: ${product.descripcion.Ancho}</p>
          <p>Unidades <br> ${product.cantidad}</p>
          <p>Total <br> S/${product.precio * product.cantidad}</p>
          </div>`;
carro.appendChild (divcarro);

document.querySelectorAll(".boton-eliminar").forEach(boton => {   // Botón eliminar
    boton.addEventListener("click", () => {
      eliminarProducto(boton.id);
    }); });


});

const pagototal = productosCarrito.reduce ((acumulador ,producto) => acumulador + producto.precio * producto.cantidad,0 ); // suma del precio total de productos
const productostotal = productosCarrito.reduce ((acumulador ,producto) => acumulador + producto.cantidad,0); // suma del total de productos

const total = document.querySelector (".total");  // Creación de contenedor de resumen de compra
let divtotal = document.createElement ("div");
divtotal.classList.add ("resumen");
divtotal.innerHTML =`
        <div class="d-flex justify-content-between"> <div> Productos (${productostotal}) </div> 
        <div> S/${pagototal} </div> </div>
        <hr> 
        Descuentos 
        <hr>
        <div class="d-flex justify-content-between"> <div> Total</div> 
        <div> S/${pagototal} </div></div>

        <a href="../paginas/gracias.html"><button class="boton"> Pagar </button></a>`;
        total.appendChild (divtotal);
    }

else {
   let mensaje = document.createElement ("div");
   mensaje.classList.add ("mensaje-vacio");
   mensaje.innerHTML = `<h4>Tu carrito está vacío <i class="bi bi-emoji-frown"></i></h4>`;
   carritoVacio.append(mensaje);
  }

}
verCarrito ();



function eliminarProducto(id) {
  productosCarrito = productosCarrito.filter(producto => producto.id !== id);
  localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
  verCarrito();
}