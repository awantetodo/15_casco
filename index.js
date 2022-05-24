// CREO LA FUNCION 
function obtenerProductos () {
// OBTENER EL "PRODUCTO"
    const inventario = 'producto.json';
// FETCHEAR EL INVENTARIO
    fetch(inventario)
// DEFINIMOS EL RESULTADO DESP DE FETCHEAR EL INVENTARIO
    .then( resultado =>  resultado.json())
// DEFINIMOS COMO MOSTRAR LOS DATOS DEL INVENTARIO, Y SUS CATEGORIAS
    .then(datos => {
         const { inventario } = datos;
// DEMOSTRAMOS EL RESULTADO MEDIANTE FOREACH EN LA CONSOLA, NO SE USA "IMAGEN" NI "CANTIDAD" DEL PRODUCTO.JSON
         inventario.forEach( inventario => {
             console.log("id de producto: " + inventario.id)
             console.log("producto: " + inventario.nombre)
             console.log("precio: " + inventario.precio)
             console.log("categoria: " + inventario.categoria)
         })

    })
}
// EJECUTAMOS LA FUNCION
obtenerProductos()