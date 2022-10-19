/*
Solicite al usuario que ingrese tres números diferentes por medio de tres cuadros de diálogo de solicitud diferentes.

En cada uno de estos cuadros de diálogo, muestre el siguiente fragmento de texto: 'Ingrese un número:' .

Una vez que se completen las tres indicaciones, finalmente emita el número de entrada en orden ascendente (es decir, 
el número más pequeño primero, el número más grande al final).
*/
let num = []; //se crea el array
let addNum = num.push(Number(prompt("Añada un numero")));//se ocupa array.push() para dejar siempre de ultimo el valor añadido
addNum = num.push(Number(prompt("Añada un numero")));
addNum = num.push(Number(prompt("Añada un numero")));
//se crea una variable para obtner el primer numero del array
const getfirstArray = num[0];
//se crea una variable para obtener el ultimo dato del array
const getLastArray = num[num.length - 1];
//se ordena el array
//num.sort(function(getfirstArray,getLastArray){return getfirstArray-getLastArray;});//Si compareFunction(a, b) es menor que 0, se sitúa a en un indice menor que b. Es decir, a viene primero.
function orderArray(params) {
    return num.sort(function(getfirstArray,getLastArray){return getfirstArray-getLastArray;});
}
console.log("EL array "+num);
console.log("EL primer numero "+getfirstArray);
console.log("EL ultimo numero "+getLastArray);
console.log("Array ordenado "+ orderArray());