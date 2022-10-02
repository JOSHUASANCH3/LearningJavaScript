//usando la sintaxis con .find()
const arrayElements = [5, 10, 0, 20, 45];
const firstElement = arrayElements.find(element => element != undefined);
console.log(firstElement);
//codigo para encontrar un primer elemento de un array

//usando la sintaxis matriz indice
firstElement = arrayElements[0];
console.log(firstElement);

//https://www.delftstack.com/es/howto/javascript/javascript-get-first-element-of-array/