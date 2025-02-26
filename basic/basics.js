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


/* 2. Determinar número par o impar */ 
/*--------------------------------------*/

/* 
 escribir numero1 
 leer numero1
 si numero1 % 2 = 0 entonces
  escribir "El número", numero1, "es par"
 sino 
  escribir "El número", numero2, "es impar"
 FinSi
*/ 

/* Opcion 1 */

let numeroParImpar = parseFloat(prompt('Ingrese un número'));

if(numeroParImpar % 2 === 0) {
    console.log('El número es par');
} else {
    console.log('El número es impar')
}


/* opcion 2 */

let numeroParImpar2 = 15;

if(numeroParImpar2 % 2 === 0) {
    console.log('El número es par');
} else {
    console.log('El número es impar')
}

/* 3. Calcular el área de un triángulo */ 
/*-----------------------------------------*/

/*
 escribir base
 leer base 
 escribir altura 
 leer altura
 area = base * altura / 2
 escribir "el area del triángulo es:", area
*/

let base = 5; 
let altura = 2; 

let calcularArea = base * altura / 2;

console.log("El area del triángulo es:" + calcularArea);

/* opción 2 */

let base1 = parseFloat(prompt('Ingrese la base del triángulo')); 
let altura1 = parseFloat(prompt('Ingrese la Altura del triángulo'));; 

let calcularArea2 = base * altura / 2;

console.log("El area del triángulo es:" + calcularArea2);


/* 3. Calcular si un número es positivo, negativo o cero */ 
/*-----------------------------------------------------------*/

/* 
Escribir 'Ingrese un número'
leer número
si número > 0
    escribir 'El número ingresado es positivo'
sino si numero < 0 
    escribir "El número ingresado es negativo"
sino
    escribir "El número ingresado es 0"
FinSi
*/ 


/* Opcion 1 */

let numero = parseFloat(prompt('Ingrese un número'));

if(numero > 0) {
    console.log('El número ingresado es positivo')
} else if (numero < 0) {
    console.log('El número ingresado es negativo');
} else {
    console.log('El número ingresado es 0')
}


/* opcion 2 */

let numeroDos = 15;

if(numeroDos > 0) {
    console.log('El número ingresado es positivo')
} else if (numeroDos < 0) {
    console.log('El número ingresado es negativo');
} else {
    console.log('El número ingresado es 0')
}

/* 5. Calcular si un número es mayor o menor que otro*/ 
/*-------------------------------------------------------*/

/* 
Escribir numeroUno ="Ingrese el primer número"
Leer numeroUno
Escribir numeroDos ="Ingrese el segundo número"
Leer numeroDos
si numeroUno > numeroDos
    escribir "El número", numeroUno, "es mayor que", numeroDos
sino si numeroUno < numeroDos
    escribir "El número", numeroDos, "es mayor que", numeroUno
sino 
    escribir "Los números ingresados son iguales"
FinSi
*/ 


/* Opcion 1 */

let numeroUno = parseFloat(prompt('Ingrese el primer número:'));
let numeroDoss = parseFloat(prompt('Ingrese el segundo número:'));

if(numeroUno > numeroDos) {
    console.log(`El número ${numeroUno} es mayor que ${numeroDoss}`);
} else if(numeroUno < numeroDoss) {
    console.log(`El número ${numeroUno} es menor que ${numeroDoss}`);
 } else {
    console.log('Los números ingresados son iguales');
 }

/* opcion 2 */

let numeroUnoo = 10;
let numeroDosss = 5;

if(numeroUnoo > numeroDosss) {
    console.log(`El número ${numeroUnoo} es mayor que ${numeroDosss}`);
} else if(numeroUnoo < numeroDosss) {
    console.log(`El número ${numeroUnoo} es menor que ${numeroDosss}`);
 } else {
    console.log('Los números ingresados son iguales');
 }

 /* 6. Determinar si un año es bisiesto */ 
/*------------------------------------------*/
 

/* 
Inicio
    Escribir "Ingrese un año:"
    Leer año
    Si (año MOD 4 == 0 y año MOD 100 != 0) o (año MOD 400 == 0) Entonces
        Escribir "El año es bisiesto"
    Sino
        Escribir "El año no es bisiesto"
    FinSi
Fin
*/

let año = parseFloat(prompt('Ingrese un año'));
if(año % 4 === 0 && año % 100 !== 0 || (año % 400 === 0)) {
    console.log('El año es bisiesto');
} else {
    console.log('El año no es bisiesto');
}


 /* 7. Tabla de multiplicar del 1 */ 
/*------------------------------------------*/

/* 
Inicio
    Escribir "Ingrese un número:"
    Leer numero
    Para i desde 1 hasta 10 Hacer
        resultado ← numero * i
        Escribir numero, " x ", i, " = ", resultado
    FinPara
Fin

*/


/* 
Opcion 1
*/

let numeroTres = parseFloat(prompt('Ingrese un numero:'))

for(let i = 0; i <= 10; i++) {
    let resultado = numeroTres * i;
    console.log(`${numeroTres} x ${i} = ${resultado}`);
}

/* Opción 2 */


let numeroTress = 12

for(let i = 0; i <= 10; i++) {
    let resultado = numeroTress * i;
    console.log(`${numeroTress} x ${i} = ${resultado}`);
}


 /* 8. Suma de los primeros números naturales */ 
/*------------------------------------------*/

/* 
Inicio
    
    Escribir "Ingrese un número N:"
    Leer N
    suma ← 0
    Para i desde 1 hasta N Hacer
        suma ← suma + i
    FinPara
    Escribir "La suma de los primeros", N, "números naturales es:", suma
Fin


*/

let N = parseFloat(prompt('Ingrese un número: '));
let sumar = 0;
for(let i = 0; i <= 10; i++) {
    sumar = sumar + i;
    console.log(`La suma de los primeros ${N} números naturales es: ${sumar}`);
}

let N2 = 23;
let sumarr = 0;
for(let i = 0; i <= 10; i++) {
    sumarr = sumarr + i;
    console.log(`La suma de los primeros ${N2} números naturales es: ${sumarr}`);
}
