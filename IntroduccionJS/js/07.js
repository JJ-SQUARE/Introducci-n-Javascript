// Orden de las operaciones

let resultado

resultado = ( 20 + 30 ) * 2;

resultado = ((100 + 200 + 300) * .2) - 100 + 200 + 300;
 
console.log(resultado);

// Incrementos 

let puntaje = 10 // Es una similitud al incremento en el puntaje de videojuego, o algo que es acumulativo.


//el orden del ++ importa.
puntaje++; // Imprime primero el puntaje tal como está, es decir 10, y después suma el 1
++puntaje; // Imprime el puntaje anterior (11) ya sumando un uno (12)

--puntaje; // decrementa en 1

//para aumentar en intervarlos mayores a 1, se utiliza += y se establece el número a aumentar

puntaje += 10;

console.log(puntaje);