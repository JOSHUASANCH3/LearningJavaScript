const status = 'error';
if (status === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!!');
}
//or 
console.log('Other result');
if (status.toUpperCase() === 'ERROR') {//investing the function toUpperCase()
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!!');
}