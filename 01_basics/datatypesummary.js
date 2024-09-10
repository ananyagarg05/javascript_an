// node 01_basics/datatypesummary.js

// primitive data type
//always call by value
//copy m changes
//7 types: string,number ,boolean,null,undefined,symbol,BigInt

//non primitive/reference
// Array, Objects, Functions
//JavaScript is a dynamic language and not static

const score = 100;
const scoreValue = 100.3;
//decimal m kuch alg nhi hai float/double
//aise hee theek hai const

const isLoggedIn = false;
const outsideTemp = null; //empty not zero
let userEmail; //undefined value mtlb

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); //false aaya same nhi hai '' and " "

const bigNumber = 3456543576654356754n; //n lgake bigInt bnadia

// Array, Objects, Functions

//arrays
const heros = ["shaktiman", "naagraj", "doga"];
//objects
let myObj = {
  name: "ananya",
  age: 21,
};

const myFunction = function () {
  console.log("Hello world");
};
//data type pta krne ka tareeka
//use typeof
console.log(typeof anotherId); //op is symbol

//null ka typeof is object
//non primitive ka object output
//isliye object function //objects

// https://262.ecma-international.org/5.1/#sec-11.4.3
