/*
parseInt(); and parseFloat();
convert numerical strings to numbers
Adding non-numerical characters can have unintended results
parseFloat() is for floating point numbers, numbers with potencial decimal points

toString();
convert numbers to numerical strings
*/
//Integer Number
let num1 = "100";
console.log("--Integer Number---");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF')+"\n");//Hexadecimal number
//Number float
let float1 = "1.50";
console.log("---Float Number---");
console.log(parseFloat('0.5'));
console.log(parseFloat(float1));
console.log(parseFloat('ABC'+"\n"));

console.log("---Special Characters---");
//Number after special characters are ignored
console.log(parseInt('1.5'));
console.log(parseInt('1+1'));
//Using Templace Literals 
console.log(parseInt(`${1+1}`) + "\n");
//Conertir numeros a string
console.log("---Converting numbers to strings---");
console.log(num1.toString());
console.log(float1.toString());
console.log((100).toString());