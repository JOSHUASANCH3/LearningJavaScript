//crear un array
let frutas = ["Manzana","Pera"];
console.log(frutas.length);

//Acceder a un elemento de Array mediante su índice
let primero = frutas[0];// Manzana es el primer valor
let ultimo = frutas[frutas.length - 1];// Banana es el ultimo valor

//Recorrer un Array
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
    // Manzana 0
    // Banana 1
});

//Añadir un elemento al final de un Array
let nuevaLongitud = frutas.push('Naranja'); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"];

//Eliminar el último elemento de un Array
ultimo = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]

//Añadir un elemento al principio de un Array
nuevaLongitud = frutas.unshift('Fresa'); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]

//Eliminar el primer elemento de un Array
primero = frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]

//Encontrar el índice de un elemento del Array
frutas.push('Fresa');// ["Manzana", "Banana", "Fresa"]
let pos = frutas.indexOf('Banana'); // (pos) es la posición para abreviar
// 1

//Eliminar un único elemento mediante su posición
let elementoEliminado = frutas.splice(pos, 1);// ["Manzana", "Fresa"]

//Eliminar varios elementos a partir de una posición
let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
console.log(vegetales);// ["Repollo", "Nabo", "Rábano", "Zanahoria"]
pos = 1, numElementos = 2;
let elementosEliminados = vegetales.splice(pos, numElementos);// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"
console.log(vegetales);// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"

//Copiar un Array
let copiaArray = vegetales.slice();// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

//indexOf()-retorna el indice del objeto del array