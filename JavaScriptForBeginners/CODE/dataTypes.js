/*
Simple type sistem
Number(float), String, Boolean, Date, Function, Array and Object
Special types
NaN, null, undefined
*/

/*
typeof operator
Returns a string of the data type primitive
instanceof operator
Returns a boolean of if a value matches the data type
*/

const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const persona = {
	nombre:"Alex", 
	apellido:"Solis"
};

function sayHello(persona){
	console.log("Hello " + persona.nombre);
}

console.log("----typeOf----");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person); 
console.log(typeof sayHello);

console.log("----instanceof----");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(persona instanceof Object);
console.log(sayHello instanceof Function);
