/*
=>
Somethings called 'fat arrow functions'
changes to the 'this' context
support implicit return values
must be assigned to a variable, or inmediately used
reduction in characters typed
*/
const add = (a,b) => a + b;
console.log(add(1,2));//3
const subtract = (a,b) => {
    return a -b;
};
console.log(subtract(2,1));//1

