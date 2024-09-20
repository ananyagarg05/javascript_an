//  node 02_basics/03_objects.js
//objects in depth
//javascript m 2 cheeze sikhlo best hai
//objects and events

//objects
//2 types to define : literals and constructors
// singleton :apne tarah ke ek hee object h
// Object.create->creation of objects,const method,singleton
// object literals :single ton nhi bnta hai,multi
//const se bnta hai toh single ton bnta hai

//{ } ye object hai
//but empty hai
//const JsUser = {};
//issi ke andr value toh define hoga

const mySym = Symbol("key1");

//object ke andr values
//symbol is a unique data type
//in js
//mysym mykey1 eg
//[] symbol is sq bracket always tabhi type of se symbol aayega
//wrna string aayega without []
const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//accessing the objects
// hitesh@google.com
// hitesh@google.com
// Hitesh Choudhary
// mykey1
//jsuser.email krke access karo ya fir sq.brackets

// console.log(JsUser.email);
// //square brackets bhi use
// //string ki tarah gya hai
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);
//******output****** */
// {
//     name: 'Hitesh',
//     'full name': 'Hitesh Choudhary',
//     age: 18,
//     location: 'Jaipur',
//     email: 'hitesh@chatgpt.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

JsUser.greeting = function () {
  console.log("Hello JS user");
};
//name: "Hitesh",
//upr declare kraya tha name jsuser m hee
//usko access ${ } karo with using this keyword
//this.name

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

//undefined ke baare m baad m
//return kr deta hai kbhi function ke saath
// //Hello JS user
// undefined
// Hello JS user, Hitesh
// undefined
