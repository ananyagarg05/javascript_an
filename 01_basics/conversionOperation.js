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
console.log(typeof stringNumber);//string 


