/*
Variables
	Para declarar una variable se tiene que colocar es "let" o "var" 
Ej:
let myVariable;
myVariable = 123;
= operador de asigancion
let myVariable = 123; (inicializacion de variables con su valor)
myVariable = 321;

CONSTANTES
Propiedades
Deben de tener un valor
La referencia no se puede cambiar
Valor unico
*El valor del objeto no esta protegido
const obj = {a : 3};
obj.a = 5;  aqui se cambia el valor del objeto 

TIPOS DE DATOS
Los tipos de datos también se conocen como primitivos de datos de JavaScript, ya que son los tipos de datos 
de nivel más bajo proporcionados por el lenguaje. Hay 6 tipos de datos primitivos: cadena, número, bigint, 
booleano, indefinido y símbolo. Tómese un minuto para visualizar lo que podría representar cada una de estas
primitivas. ¿Qué es un zebra? ¿Qué tal 0? true?

NUMEROS

Operadores aritmeticos
Simbolo
+ adicion (suma de valores), 1 + 2 = 3
- resta (calcula la diferencia de numeros), 1 - 2 = 1
* multiplicacion (calcula el productos de los numeros),  1 * 2 = 2
/ division(calcula el cociente de los productos)

String
las cadenas son conjuntos de caracteres que reciden entre comillas simples o dobles.

'this is a string'
"this is a string"
let myString = "this is a string";

CADENAS DE FORMATO
hay veces que se necesitara concatenar 2 o mas cadenas
let myString1 = 'Hello';
let myString2 = "World";
myString1 + myString2 + "!"; //HelloWorld!
myString1 +" "+ myString2 + "!";//Hello World! 
myString1 +";"+ myString2 + "!";//Hello;World!
 
	Literales de plantilla, aqui se incluye toda variable que sea una cadena en ${}
	estos respetan los espacios y saltos de linea
	let myString1 = 'Hello';
	let myString2 = "World";
	`${myString1} ${myString2}!` //Hello World!

BOOLEANOS
Valores: true or false
let myTrueBool = true;
let myFalseBool = false;

*/
