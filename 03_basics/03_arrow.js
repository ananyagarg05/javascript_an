// //node 03_basics/03_arrow.js

//arrow functions
// ()=> {}
// //browser have wndow object
// //node have global object
// const user = {
//   username: "Ananya",
//   price: 999,

//   welcomeMessage: function () {
//     //this keyword is used to access the object properties
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "Ananya";
//   console.log(this.username);
// }

// // chai();
// // const chai = function () {
// //   let username = "Ananya";
// //   console.log(this.username);
// // };

// //arrow function
// const chai = () => {
//   let username = "Ananya";
//   console.log(this);
// };

// // chai()

// //agar { } use kiya hai to return keyword use karna padega , this is explicit return 
// //agar ( ) use kiya hai to return keyword use  nahi karna padega
// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }

// // const addTwo = (num1, num2) =>  num1 + num2

// // const addTwo = (num1, num2) => ( num1 + num2 )

// // const addTwo = (num1, num2) => ({ username: "Ananya" });

// // console.log(addTwo(3, 4));

// // const myArray = [2, 5, 3, 7, 8]

// // myArray.forEach()
