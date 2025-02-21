/* ------- Ejercicios básicos -------- */

/* 1. Suma de 2 números */ 
/*-------------------------*/

/* 
Inicio
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    suma ← num1 + num2
    Escribir "La suma de los dos números es:", suma
Fin
*/

/* opción 1 */

let num1 = 5;
let num2 = 10;

let sum = num1 + num2;

console.log(sum);

/* opción 2 */

function sumNum(num1, num2) {
    return console.log(num1 + num2);
}

sumNum(5, 10);


/* opcion 3 */

let nume1 = parseFloat(prompt('Ingrese el primer número'));
let nume2 = parseFloat(prompt('Ingrese el segundo número'));

let suma = nume1 + nume2;

console.log(suma);



/* 2. Suma de 2 números */ 
/*-------------------------*/

