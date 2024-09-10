//node 01_basics/strings.js

//first about memory
//2 types of memory's
//stack and heap

//stack : use in Primitive
//heap : used in Non-primitive

//stack: copy milegi
//heap : changes in original value

let myYoutubename = "AnanyaGarg"; //stack
//primitve type hai ,alloting

let anothername = myYoutubename; //copy di hai
anothername = "ananyagarg2";
console.log(anothername); //before value got changed ananyagarg
console.log(anothername); //after changed and updated ag2
console.log(myYoutubename); //op is ananyagarg

//non primitve
//heaps
//original value change
let userOne = {
  email: "userone@gmail.com",
  upi: "user@ybl",
};
let userTwo = userOne; //same from heaps
//not a copy
//value will get changed

userTwo.email = "ananya@gmail.com";
console.log(userTwo.email);
console.log(userOne.email);
//values got changed from the original
//op is ananya@gmail.com
//heap memory ki wajah se
