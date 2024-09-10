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

//******** STRINGS**********

//strings can be in both " " or ''
//"hello"+"world"
const name = "ananya";
const repoCount = 12;
//concatenate
console.log(name + repoCount);
//but not a good method ,old

//new and better
//string interpolation
//${}
//use back ticks to insert the data
//back tick ``
//backticks are below escape
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//declaration of strings
const gameName = new String("Ananya-Garg-hehehehe");
console.log(gameName);
//op is [String: 'Ananya']
//but on google console
//the op is thsi only but with the key value pairs
//like 0: A ,1:n the positions with the indexes

//node 01_basics/strings.js
console.log(gameName[0]); //op is A
//object ,values key value wali
console.log(gameName.__proto__); //op is {}

console.log(gameName.length); //6
console.log(gameName.toUpperCase()); //converted to ANANYA
console.log(gameName.charAt(2)); //a
console.log(gameName.indexOf("t")); //-1 ,not present in ananya
//outputs

/*
hello my name is ananya and my repo count is 12
[String: 'Ananya']
A
{}
6
ANANYA
a
*/

const newString = gameName.substring(0, 4);
console.log(newString); //Anan

//.slice() extracts a portion of a string and returns it as a new string.
//It takes two arguments:
//First argument (start): The starting index from where the extraction begins. It can be positive (counting from the start of the string) or negative (counting from the end).
//Second argument (end): The index where the extraction ends. The extraction happens up to but not including the end index.

//.slice m -ve values
//reverse se start hogi
const anotherString = gameName.slice(-5, 4);
console.log(anotherString);
//`.slice(-5, 4)`**:
//First argument `-5`**: This starts the extraction from the **5th position from the end**, which is index `1` (`n`).
//Second argument `4`**: This extracts up to but **not including** index `4`, which means the slice will end at index `3` (character `n`).

//trim
//spaces hta dega faaltu ki
const newStringOne = "   ananyagargheheheheh     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ananya.com/ananya%20garg";

//replacing something
console.log(url.replace("%20", "-"));
//keywords search kr rhe ho
//sundar present nhi hai
//op is false
console.log(url.includes("sundar"));

//split
//array m
//op is
//[ 'Ananya', 'Garg', 'hehehehe' ]
//separators hote hai
//here we used '-' 
//spaces bhi hote hai(separators) and etc
console.log(gameName.split("-"));//[ 'Ananya', 'Garg', 'hehehehe' ]
console.log(gameName.split(" "));//[ 'Ananya-Garg-hehehehe' ]
