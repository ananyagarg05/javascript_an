//node 01_basics/conversionOperation
let score = 33;

console.log(typeof score);
//op is number

let score2 = "33";

console.log(typeof score2);
//op is string ,kyunki double quotes

// node 01_basics/conversionOperation

let valueInNumber = Number(score2);
//number m convert hogya hai

console.log(typeof valueInNumber); //number hogya convert
console.log(valueInNumber); //op is 33

let score3 = null;
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); // op is 0

//boolean m true m 1 ,false m 0

//notes
//"33" => 33
//"33abc"=> NaN(not a number)(mixed)
//true 1
//false 0

let isLoggedIn = ""; //empty m false
let booleanIsloggedIn = Boolean(isLoggedIn);
console.log(booleanIsloggedIn); //op is true
//working fine with 1 too
//1->true
//0 m false
//empty string "" false
// ananya true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber); //string

// ******OPERATIONS********

let value = 3;
let negvalue = -value;
console.log(negvalue); //-3 output

//power operation
//2 raised to 2 is 4
// ** is used for power
console.log(2 ** 2);

// / is divide qoutient
// % remainder

let str1 = "hello";
let str2 = "ananya";
let str3 = str1 + str2;
console.log(str3);

//different behavior of js
//jodne pr output

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32(1+2=3,and 2 string alg )
//toh 32

//ye sab practical nhi hota
//exam pov se padhlo
//but write neatly and use ()

console.log(+true); //op is 1 only
console.log(+""); //0 (empty hai string)

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
//pre increment hogyi na
++gameCounter; //update and then use
console.log(gameCounter); //101

//pre fix
//++ update and then use
//post fix
//game++ use then update

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
