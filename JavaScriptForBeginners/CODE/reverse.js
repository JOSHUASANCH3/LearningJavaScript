/* escribr al reves un texto */
/*
let value = "Reverse me"; 
function reverseString(){
    let reverseValue = "";
    value.split("").forEach((char) => {reverseValue = char + reverseValue;});

    return reverseValue;
}

console.log(reverseString(value));

//or

function reverseString(value){
    let reverseValue = "";
    value.split("").forEach((char) => {reverseValue = char + reverseValue;});

    return reverseValue;
}

console.log(reverseString("Reverse me"));
*/
/* 
let text = "How are you doing today?";
const myArray = text.split("");
let word = myArray[1];
console.log(myArray);
*/

//concatenacion con literales de plantilla
console.log("\n concatenacion con literales de plantilla \n");
let str1 = "JavaScript";
let str2 = "fun";

console.log(`Estoy escribiendo un codigo en ${str1}`);
console.log(`Formatear en ${str1} is ${str2}`);

//Expresions in templane literals
let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`);
console.log(`Lo opuesto de verdadero es ${!bool1}`);