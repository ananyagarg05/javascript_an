//node 02_basics/01_arrays.js
// array
//array in [] brackets
//in js ,arrays are resizable
//you can grow or shrink the arrays in js
//and can contain mix of diff data types
//zero based indexing
//shallow copy-> whose have same ref points
//deep copy->not share the same ref points
const myArr = [0, 1, 2, 3, 4, 5];
// // const myHeros = ["shaktiman", "naagraj"];

// // const myArr2 = new Array(1, 2, 3, 4);
// //console.log(myArr[0]);

// //Array methods

// //values add
myArr.push(6);
// //console.log(myArr);
myArr.push(7);
// console.log(myArr);
// //pop
myArr.pop();

// //unshift ->start m aajeygi value
// //9 in the starting
// myArr.unshift(9);
// // //[
// //     9, 0, 1, 2,
// //     3, 4, 5, 6
// //   ]
// console.log(myArr);
// myArr.shift();
// //remove krdega 9 ko
// console.log(myArr);

//include hai ya nahi
//include
//indexof
// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(3)); //3

// //Adds all the elements of an array into a string, separated by the specified separator string.
// const newArr = myArr.join();
// console.log(myArr); //purana wala hee
// console.log(newArr); //0,1,2,3,4,5,6
// console.log(typeof newArr); //string

//imp
// slice, splice ->differences

//slice():
// The slice() method in JavaScript extracts a section of an array 
// and returns a new array containing the selected elements,
//  without modifying the original array.
console.log("A ", myArr);
//Returns a copy of a section of an array.
//For both start and end, a negative index can be used to indicate an offset from the end of the array.
//y For example, -2 refers to the second to last element of the array
const myn1 = myArr.slice(1, 3);
//op is
// A  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
//  OP :  [ 1, 2 ] index 1 se start and 3 not include

console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr);

//splice
splice():
// The splice() method in JavaScript is used to change
//  the contents of an array by removing or replacing existing elements and/or 
//  adding new elements in place, modifying the original array.
//Removes elements from an array and, if necessary,
// inserts new elements in their place, returning the deleted elements.
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); //C  [ 0, 4, 5, 6 ]
console.log(myn2); //[ 1, 2, 3 ]
// B  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
//   C  [ 0, 4, 5, 6 ]
//   [ 1, 2, 3 ]
