// Objeto

const producto = {
    nombreProducto : "Monitor de 20 pulgadas",
    precio : 300,
    disponible : true, 
    chafaldrafas : true,
};

const medidas = {
    peso: '1kg',
    medida: '60cm x 30cm x 10cm',
};

const nuevoProducto = { ...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);