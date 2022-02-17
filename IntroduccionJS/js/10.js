// OBJETOS

/* Si múltiples variables son compartidas por un elemento se pueden agrupar para formar un objeto.
const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true; */

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true, 
    chafaldrafas : true,
}

console.log(producto);
// console.log(producto.precio); // para acceder solo al precio / MAS USADA

// console.log(producto['precio']); // Es lo mismo que el anterior solo que no se usa tanto.


// Para agregar propiedades

producto.imagen = 'imagen.jpg'


// Para eliminar propiedades

delete producto.chafaldrafas