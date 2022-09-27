/**
 * MANIPULATING ARRAYS
 * Push and Pop - Affects and of array
 * array.push(values) adds one or more value to end of array and returns its new length
 * array.pop() removes value from end of array and returns removed value 
 * 
 * Shift and Unshift - Affects front of array
 * array.shift() removes value from front of array and returns removed value
 * array.unshift() adds one or more value to front of array and returns its new length
 * 
 * concat
 * joins two arrays to make a new array
 */

//PUSH AND POP
console.log("\n---PUSH AND POP---\n");
let arr1 = ["A", true, 2];
console.log(arr1.push("new value"));//Adding new value in last length
console.log(arr1);
console.log(arr1.pop());//remove value in last length
console.log(arr1);
console.log("\n---SHIFT AND UNSHIFT---\n");
arr1 = ["A", true, 2];
console.log(arr1.unshift("new value"));//Adding new value in first length
console.log(arr1);
console.log(arr1.unshift());//remove value in first length
console.log(arr1);
console.log("\n---CONCAT---\n");
arr1 = ["A", true, 2];
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(arr1);
console.log(arr2);
console.log(newArr);
console.log(newArr2);