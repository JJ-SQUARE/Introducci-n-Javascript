"Use Strict" // Correr JS en modo estricto

// Objeto

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true, 
    chafaldrafas : true,
}

//Object.freeze(producto) // No permite añadir, modificar o quitar los objetos se usa Object.freeze 

Object.seal(producto) // No permite añadir ni quitar, pero sí modificar las propiedades de los objetos.

// producto.imagen = 'imagen.jpg'

// console.log(Object.isFrozen(producto)); Verifica si el objeto está congelado.
console.log(Object.isSealed(producto)); 

producto.precio = 'Nuevo precio'

console.log(producto);