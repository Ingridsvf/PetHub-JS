
export function notificacionEliminarProducto (nombre){
return Swal.fire({
  title: "¿Quieres eliminar el Producto?",
  text: `¿Estás seguro de eliminar ${nombre} del carrito?`,
  showCancelButton: true,
  confirmButtonColor: "#fcc46f",
  cancelButtonColor: "#fcdcacff",
  confirmButtonText: "Sí, eliminar",
  cancelButtonText: "cancelar"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Producto eliminado!",
      text: `${nombre} ha sido eliminado`,
      icon: "success",
      confirmButtonColor: "#fcc46f"
    });
  }
  return result;
});
}