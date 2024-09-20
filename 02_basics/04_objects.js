//  node 02_basics/04_objects.js

//single ton object made below
//const tinderUser = new Object();

//non single ton object hai ye below
// const tinderUser = {};

// tinderUser.id = "123abc";
// tinderUser.name = "Sammy";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//objects ke andar objects
//fullname ke andar khud ke object hai
//username ke andr ek aur object
// const regularUser = {
//   email: "some@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "hitesh",
//       lastname: "choudhary",
//     },
//   },
// };
// //hitesh
// console.log(regularUser.fullname.userfullname.firstname);

//objects assigning
//object.assign
//or
//best syntax
//spread out operator
//{.....obj1}
//...obj1,...obj4

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj4 = { 5: "a", 6: "b" };

//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//const obj3 = { obj1, obj2 };

//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
//{} without using this bhi hojayega
//simple obj 1 ,2,4 do
//but for better syntax ki target {} m aaye toh acha hee hai

//const obj3 = Object.assign({}, obj1, obj2, obj4);

// obj3 = { ...obj1, ...obj2 };
// //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

//database se values aati hai jab
//arrays ka objects

// const users = [
//   {
//     id: 1,
//     email: "h@gmail.com",
//   },
//   {
//     id: 1,
//     email: "h@gmail.com",
//   },
//   {
//     id: 1,
//     email: "h@gmail.com",
//   },
// ];

// users[1].email;
// //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
//arrays m aayi hai
//*******output */
// [ 'id', 'name', 'isLoggedIn' ]
// [ '123abc', 'Sammy', false ]
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//to check if some prop hai ya nhi
//console.log(tinderUser.hasOwnProperty("isLoggedIn")); //true

/*****************OBJECTS DESTRUCTURING***********/
/*************JSON API'S INTRO*************/

//this is object destructing
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "ananya",
};

//theek hai ye syntax for accesssing
console.log(course.courseInstructor);

//better syntax
//ananya
//: instructor chota aur naam krdia
const { courseInstructor: instructor } = course;
////ananya
//console.log(courseInstructor);
//ananya
console.log(instructor);



//API'S
//APIs (Application Programming Interfaces)
//APIs are essential in modern JavaScript applications, enabling communication between web services and applications.
//saare kaam kisi aur ko dedo
//menu card
//chef krega kaam apna
//aap khao
//api backend se aati hai values
//pehle xml structure m
// ab Json m aati hai

//json in { }
//isme naam nhi hai
//keys and values bhi hongi as strings
//isliye " name "  values " hitesh"
//ye objects ke way m hai
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

//2. apis through arrays ke andar objects
// [
//     {},
//     {},
//     {}
// ]

//api which is famous
//random user me api 

//samajhne ke liye tools hai boht hai
//json formatter krke 
//paste krdo waha pr formatter pr
//format krke ache se bta deta hai
//more clear in the frontend

