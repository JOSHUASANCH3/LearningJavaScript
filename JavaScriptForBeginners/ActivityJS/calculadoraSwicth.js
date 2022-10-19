/*
La letra ingresada debe ser una de las siguientes:
a para la adición
s para la resta
m para la multiplicación.
d para la división.
e para la exponenciación.
r para el resto.
*/
var opc = prompt("Calculadora \nOpciones :" +
    "\n a. para la suma" +
    "\n s. para la resta" +
    "\n m. para la multiplicación" +
    "\n d. para la división" +
    "\n e. para la exponente" +
    "\n r. para el modulo");
var x = parseInt(prompt("Ingrese el primer numero"));
var y = parseInt(prompt("Ingrese el segundo numero"));

switch (opc) {
    case "a":
        console.log(x + ' + ' + y + ' = ' + (x + y));
        break;
    case "s":
        console.log(x + ' - ' + y + ' = ' + (x - y));
        break;
    case "m":
        console.log(x + ' * ' + y + ' = ' + (x * y));
        break;
    case "d":
        console.log(x + ' / ' + y + ' = ' + (x / y));
        break;
    case "e":
        console.log(x + ' ** ' + y + ' = ' + (x ** y));
        break;
    case "f":
        console.log(x + ' % ' + y + ' = ' + (x % y));
        break;
    default:
        console.log("Ingrese una de las opciones");
        break;
}