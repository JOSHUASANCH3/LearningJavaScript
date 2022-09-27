//creating an array
console.log("\n---Creating an Array---\n");
let arrayLength = 5;
let arr1 = [];
let arr2 = Array(arrayLength);
//Getting array length
console.log("\n---Getting array length---\n");
console.log(arr1.length+"\n");
console.log(arr2.length+"\n");
//Adding data during creation
console.log("\n---Adding data during creation---\n");
arr1 = ["A",true,2];
console.log(arr1[0]+"\n");
console.log(arr1[1]+"\n");
//Adding data after creation
console.log("\n---Adding data after creation---\n");
arrayLength = 2;
arr2 = Array(arrayLength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr1[1]);
//Length and index
console.log("\n---Length and Index---\n");
arr1 = ["A",true, 5];
console.log(arr1.length);
console.log(arr1[3]);//Doesnt exist
console.log(arr1[2]);//Last index of array
console.log(arr1[arr1.length - 1]+"\n");//Equals = 2
//second array
arr2 = Array(2);//Empty array of length 2
arr2[1] = "Adding a value";
console.log(arr2[1]);//last index of array
console.log(arr2[arr2.length - 1]);//Index : 1[
console.log(arr2[0]);//Not value yet
//Length and Index part 2
console.log("\n---Length and Index part 2---\n");
let arr3 = Array(3);//Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]);//last index of array
console.log(arr3[arr3.length - 1]);//Index : 2
console.log(arr3[0]);//Not value yet
console.log(arr3[1]);//Not value yet