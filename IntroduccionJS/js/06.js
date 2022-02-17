// Objeto Math

let resultado; 

resultado = Math.PI; // π=3.1415...
resultado = Math.round(2.4) // Redondea al entero (<=.49 al inferior, => .50 al superior)
resultado = Math.ceil(2.1) // Redondea al entero inmediato superior
resultado = Math.floor(2.9) // Redonde al entero inmediato inferior
resultado = Math.sqrt(144) // Square Root
resultado = Math.abs(-200) // convierte en número positivo
resultado = Math.max(3, 3, 7,2, 4, 6, 21, 43, 64, 3, 54,66, 6, 67) // Devuelve el número mayor
resultado = Math.min(3, 3, 7,2, 4, 6, 21, 43, 64, 3, 54,66, 6, 67) // Devuelve el número menor
resultado = Math.random(); // Número aleatorio (menor a 1)
resultado = Math.floor( Math.random() * 50 ) // Generar número aleatorio mayor a 1



console.log(resultado);