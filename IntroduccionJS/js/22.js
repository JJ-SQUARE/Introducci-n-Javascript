
const puntaje = 100;

if(puntaje === 1000) {
    console.log('Sí, el puntaje efectivamente es 1000');
} else {
    console.log('no es igual')
}

if(puntaje !== 1000) {
    console.log('no es igual')
} else {
    console.log('Sí, el puntaje efectivamente es 1000');
}

const efectivo = 1000;
const carrito = 2100;

if(efectivo > carrito) {
    console.log('Compra disponible')
} else {
    console.log('Fondos insuficientes')
}

const rol = 'ADMINISTRADOR'

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso completo');
} else if(rol === 'EDITOR') {
    console.log('Acceso como editor');
} else {
    console.log('Acceso denegado');
}