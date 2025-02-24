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