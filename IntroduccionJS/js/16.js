// funciones son una serie de procedimientos o instrucciones que realizan cierta acción

// Declaración de función ---- en esta función no importa el orden de la declaración y de la llamada, va a funcionar igual

function multiply() {
    console.log(10 * 15);
} // Se establece la función

multiply() // Llamar a la función para que haga su chamba

// Expresión de la función ---- en esta función sí importa el orden de la declaración y de la llamada, no va a funcionar

const sumar = function() {
    console.log(10 +10);
};

sumar(); 



// Si se llama a la función antes en cualquiera de los casos anteriores:
/*

--- DECLARACIÓN DE LA FUNCIÓN --- NO MARCARÁ ERROR POR HOISTING

multiply()

function multiply() {
    console.log(10 * 15);
}

--- EXPRESIÓN DE LA FUNCIÓN --- MARCARÁ ERROR

sumar();

const sumar = function() {
    console.log(10 +10);
};

*/


// IIFE //---- Son funciones que se mandan a llamar solas

(function(){
    console.log('Esto es una función que se llama a sí misma');
})();

// Sirven para proteger las variables y que no se mezclen con otro archivo.