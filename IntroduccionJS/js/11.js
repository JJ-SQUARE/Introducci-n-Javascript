// Objeto

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true, 
    chafaldrafas : true,
}

// Forma anterior
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);


// Destructuring

const {precio, nombreProducto} = producto;


console.log(precio);
console.log(nombreProducto);
