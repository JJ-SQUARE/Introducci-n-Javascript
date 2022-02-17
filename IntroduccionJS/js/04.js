// String o cadenas de texto

const producto = "Monitor de 20\""; //Barra invertida para mac ["option" + "'"]
// const producto2 = String('Monitor de 30 Pulgadas'); No común
// const producto3 = new String('Monitor de 50 Pulgadas'); No común
const producto2 = "Monitor HD";
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"

// LENGTH PARA LA EXTENSIÓN: SE LE CONSIDERA COMO PROPIEDAD
console.log(tweet);
console.log(tweet.length);
console.log(producto2);
// console.log(producto2); No común
// console.log(producto3); No común

// IndexOf (Retorna Posición)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet'));

// Includes (Retorna True or False)

console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet'));
