import {notificacionEliminarProducto} from "./notificaciones.js";


let productosCarrito = JSON.parse(localStorage.getItem("productos-carrito")) || [];
const carritoVacio = document.querySelector("#mensaje-vacio");
const seccionCompleta = document.querySelector (".seccion-carro");


//Ver lista de productos en el carrito
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
<button class="boton-eliminar" id="${product.id}" data-nombre="${product.nombre}"> <i class="bi bi-trash"></i></button></div>       
          <div class="descripcion">
            <div><img src="${product.imagen}" alt="${product.nombre}"></div>
          <div> <p><br> ${product.descripcion}</p></div>
            <div><p><br> S/${product.precio}</p> </div>
            <br><div class="totaldiv">
            <div><p>Unidades<br><button id="${product.id}" class="restar">-</button> ${product.cantidad} <button class="aumentar">+</button></p>
         </div>
         <div> <p>Total <br> S/${product.precio * product.cantidad}</p></div>
         </div>
         </div>`;
carro.appendChild (divcarro);

//Aumentar unidades en el carrito
  let aumentarUnidades = divcarro.querySelector(".aumentar");
  aumentarUnidades.addEventListener("click",()=> {
    product.cantidad++;
    localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
    verCarrito ();
    contadorProductos ();
  }); 

//Quitar unidades en el carrito
let quitarUnidades = divcarro.querySelector(".restar");
quitarUnidades.addEventListener("click",() => {
  if (product.cantidad === 1) {
    eliminarProducto(product.id, product.nombre);
  } else {
  product.cantidad--;}
  localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
  contadorProductos ();
 verCarrito ();
});



});


const pagototal = productosCarrito.reduce ((acumulador ,producto) => acumulador + producto.precio * producto.cantidad,0 ); // suma del precio total de productos
const productostotal = productosCarrito.reduce ((acumulador ,producto) => acumulador + producto.cantidad,0); // suma del total de productos

// Creación de contenedor de Total de compra
const total = document.querySelector (".total");  
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
  setTimeout (()=> {
   let mensaje = document.createElement ("div");
   mensaje.classList.add ("mensaje-vacio");
   mensaje.innerHTML = `<h4>Tu carrito está vacío <i class="bi bi-emoji-frown"></i></h4>`;
   carritoVacio.append(mensaje);
      }, 2000);
  }
botonTachito ();
}
contadorProductos ();
verCarrito ();


function botonTachito (){
document.querySelectorAll(".boton-eliminar").forEach(boton => { 
    boton.addEventListener("click", () => {
      eliminarProducto(boton.id, boton.dataset.nombre);
    }); });
  }


//Eliminar producto del carrito
async function eliminarProducto(id, nombre) {
  const resultadoNotificacion = await notificacionEliminarProducto (nombre);
  if (resultadoNotificacion.isConfirmed) {
 productosCarrito = productosCarrito.filter(producto => producto.id !== id);
  localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
  contadorProductos ();
  verCarrito();

  }
}
