/*
RESUMEN DE LOS BOOLEANOS
Los valores booleanos solo pueden tener dos valores: "true" o "false". Los booleanos ayudan a tomar decisiones sobre qué líneas de código deben ejecutarse cuando se cumplen ciertas condiciones.

Establezca su booleano para que sea verdadero o falso de esta manera:

let myTrueBool = true let myFalseBool = false

OPERADORES DE COMPARACION Y BOOLEANOS
Los operadores se utilizan para evaluar condiciones haciendo comparaciones que crearán un valor booleano. La siguiente es una lista de operadores que se utilizan con frecuencia.

Símbolo	Descripción	Ejemplo
<	Menor que : compara dos valores y devuelve el "true" tipo de datos booleano si el valor del lado izquierdo es menor que el derecho	5 < 6 // true
<=	Menor o igual que : compara dos valores y devuelve el "true" tipo de datos booleano si el valor del lado izquierdo es menor o igual que el de la derecha	5 <= 6 // true
>	Mayor que : compara dos valores y devuelve el "true" tipo de datos booleano si el valor del lado izquierdo es mayor que el derecho	5 > 6 // false
>=	Mayor o igual que : compara dos valores y devuelve el ! tipo de datos booleano si el valor del lado izquierdo es mayor o igual que el del lado derecho	5 >= 6 // false
===	Igualdad estricta : compara dos valores y devuelve el "true" tipo de datos booleano si los valores de la derecha y la izquierda son iguales Y son del mismo tipo de datos.	5 === 6 // false
!==	Desigualdad : compara dos valores y devuelve el valor booleano opuesto al que devolvería un operador de igualdad estricta.	5 !== 6 // true

DECLARACION IF
La instrucción if ejecutará código entre sus bloques si la condición es verdadera.

if (condition){
    //Condition was true. Code in this block will run.
}
Los operadores lógicos se utilizan a menudo para formar la condición.

let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}

DECLARACION IF...ELSE
"else" instrucción ejecutará el código entre sus bloques cuando la condición sea falsa. Es opcional con una 
"if" declaración.

let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else{
    //Condition was false. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

OPERADORES LOGICOS Y BOOLEANOS
Las decisiones pueden requerir más de una comparación y se pueden unir con operadores lógicos para producir 
un valor booleano.

Símbolo Descripción Ejemplo
&&  AND lógico : compara dos expresiones booleanas. Devuelve verdadero solo si ambos lados son verdaderos   (5 > 6) && (5 < 6 ) //One side is false, other is true. Returns false
||  OR lógico : compara dos expresiones booleanas. Devuelve verdadero si al menos un lado es verdadero  (5 > 6) || (5 < 6) //One side is false, other is true. Returns true
!   NOT lógico : Devuelve el valor opuesto de una expresión booleana    !(5 > 6) // 5 is not greater than 6, but "!" will return true

CONDICIONES Y DECISIONES CON OPERADORES LOGICOS
Los operadores logicos se pueden usar para formar condiciones en declaciones if...else

let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    //Condition was true. Code in this block will run.
    console.log("Getting a new laptop!");
}
else {
    //Condition was true. Code in this block will run.
    console.log("Can't afford a new laptop, yet!");
}

OPERADOR DE NEGACION
Hasta ahora ha visto cómo si puede usar una if...elsedeclaración para crear lógica condicional. Cualquier 
cosa que entre en una ifnecesita evaluarse como verdadero/falso. Usando el !operador puedes negar la 
expresión. Se vería así:

if (!condition) {
  // runs if condition is false
} else {
  // runs if condition is true
}

EXPRESIONES TEMERARIAS

if...else no es la única manera de expresar la lógica de decisión. También puede usar algo llamado operador 
ternario. La sintaxis para esto se ve así: 

let variable = condition ? <return this if true> : <return this if false>

A continuación se muestra un ejemplo más tangible:
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;

Lo anterior establece que

si firstNumberes mas grande que secondNumber
luego asignar firstNumber a biggestNumber
de lo contrario asignar secondNumber.

La expresión ternaria es solo una forma compacta de escribir el siguiente código:

let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}

*/