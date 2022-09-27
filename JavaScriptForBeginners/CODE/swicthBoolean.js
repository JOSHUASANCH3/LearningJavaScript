/*
Implicit false value
    Strings
    Empty strings test as false
    Objects
    Null or undefiend objects test as false
    Numbers
    0 test as falses
*/

const X = 0;
if (x) {
    console.log(''); 
}
//! reverst the result
if (!x) {
    console.log(''); 
}

//? Strings are case sensitive
const name = 'Jose';
if (name === 'jose') {
    console.log('The value are same');
}else{
    console.log('The value NOT are the same')
}
//If statements wit || and &&
const status = 200;
console.log('\nIf Statements\n')
if (status === 200) {
    console.log('OK!');
}else if(status === 400 || status === 200){
    console.log('Error!');
}else{
    console.log('Unknown status');
}
//Swicth(case) statements
switch (status) {
    case 200:
        console.log('OK!');
        break;
    case 400:
        console.log('Error!');
        break;
    case 500:
        console.log('Error!');
        break;        
    default:
        console.log('Unknown Status!');
        break;
}
