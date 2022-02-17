let numero1 = 5;
let numero2 = 130;

function sumar(numero1 = 0, numero2 = 0) { // numero1 y numero2 son parametros.
    console.log(numero1 + numero2);
}

sumar( 10, 10) // Argumentos o valores reales
sumar( 12, 10) // Argumentos o valores reales
sumar( 2, 13) // Argumentos o valores reales
sumar( 15, 10) // Argumentos o valores reales

sumar(9) // Solo tiene un valor, se añade el parámetro ( numero1 = 0, numero2 = 0 ) para que no afecte

sumar(numero1, numero2);
