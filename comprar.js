const productosIndex = [
{ id:"index-01", 
nombre:"Cama iglú para gato",
imagen:"./imagenes/cama-gato.jpg", 
precio: 65 ,
descripcion: {
Color: "Rosado",
Alto: "50cm",
Ancho: "50cm",
Profundidad: "50cm"}
},
{ id:"index-02", 
nombre:"Rascador",
imagen:"./imagenes/rascador.jpg", 
precio: 120 ,
descripcion: {
Color: "Beige",
Alto: "75cm",
Ancho: "50cm",
Profundidad: "60cm"}
},
{ id:"index-03", 
nombre:"Cama para perro",
imagen:"./imagenes/cama-perro.jpg", 
precio: 80 ,
descripcion: {
Color: "Beige",
Alto: "70cm",
Ancho: "50cm"}
},
{ id:"index-04", 
nombre:"Collar de nylon para perro",
imagen:"./imagenes/collar.jpg", 
precio: 30 ,
descripcion: {
Color: "Amarillo",
Alto: "2cm",
Ancho: "25cm"}
},
{ id:"index-05", 
nombre:"Cepillo",
imagen:"./imagenes/peine-gato.jpg", 
precio: 25 ,
descripcion: {
Color: "Blanco",
Alto: "19cm",
Ancho: "12cm"}
}
];


let carrito;
const guardadoEnLocalStorage = JSON.parse(localStorage.getItem("productos-carrito"));
if (guardadoEnLocalStorage){
    carrito = guardadoEnLocalStorage;
} else {
    carrito = [];
}



const contenedorProductos = document.querySelector(".galeria-productos");
let botonesComprar = document.querySelectorAll(".boton");


function mostrarProductos (productosIndex){
    productosIndex.forEach (producto => {
        const divProductos = document.createElement("div");
        divProductos.classList.add ("producto");
        divProductos.innerHTML =
        `<img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
            <h3>S/${producto.precio}</h3>
            <button class="boton"id="${producto.id}">Añadir al carrito</button>`;
        contenedorProductos.appendChild(divProductos);
    })
    botonAgregarProducto ()
}
mostrarProductos(productosIndex);


function botonAgregarProducto () {
    botonesComprar = document.querySelectorAll(".boton");
    botonesComprar.forEach(boton =>{
        boton.addEventListener("click", (event)=>{
            añadirAlCarrito(event.target.id);
        })
});
}


/*AGREGANDO PRODUCTO AL CARRITO*/
function añadirAlCarrito (botonId){
    let productoElegido = productosIndex.find(producto => producto.id === botonId);
if (carrito.some(producto => producto.id === botonId)) {
    const index = carrito.findIndex (producto => producto.id === botonId);
    carrito [index].cantidad++;
}

    
    else{
      carrito.push(productoElegido);
     productoElegido.cantidad = 1;
    } 

    localStorage.setItem("productos-carrito", JSON.stringify(carrito));
}


