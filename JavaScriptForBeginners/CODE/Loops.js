//While loops
//While funciona si necesitamos volver algun valor nulo 
console.log("\n---WHILE LOOPS---\n");
const names = ['Justin', 'Sarah', 'Christopher'];
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}
//For loops
//
console.log("\n---FOR LOOPS---\n");
for (let index1 = 0; index1 < names.length; index1++) {
    const name = names[index1];
    console.log(name);
}
//for..of
console.log("\n---FOR...OF LOOPS---\n");
for (const name1 of names) {
    console.log(name1);
}
const name1 =  ['Justion', 'Burkie', 'Sarah'];
console.log('---While loop---');
let whileIndex = 0;
while(whileIndex < names.length){
    const name = names[whileIndex];
    console.log(name);
    whileIndex++;
}