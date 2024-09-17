// node 01_basics/numbers_maths.js

//defining the number
const score = 400;
console.log(score);

//100% guranteee ki number hee hai ye
//use the keyword NEW
const balance = new Number(100);
console.log(balance);

//converted to string
console.log(balance.toString().length); // op is 3(100)
console.log(balance.toFixed(1)); //100.0
//back mein precision lga di 1 place tk

const otherNumber = 123.8966;

//kitni precise value chahiye
//round off krdega
//op 123.9
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
//op is 10,00,000
//comma's aajate hai
//tolocalstring
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++ Maths +++++++++++++++++++++++++++++
//be default aati hai maths ki library
console.log(Math);
//abs se -ve positive hojata hai
console.log(Math.abs(-4)); // 4 ,absolute value +ve
//round -> 5
console.log(Math.round(4.6));
//5 ceil is upper value
console.log(Math.ceil(4.2));
//floor is ground value means 4
console.log(Math.floor(4.9));
//minimum is 3
console.log(Math.min(4, 3, 6, 8));
//max is 8
console.log(Math.max(4, 3, 6, 8));
//random number , 0 se 1 ke beech m hee ayegi hmesha
console.log(Math.random());
//calculation
//+1 add kr dete hai jisse 0 se bdi value aaye 
console.log(Math.random() * 10 + 1);
//lowest value aayegi floor mein
console.log(Math.floor(Math.random() * 10) + 1);

//10 and 20 ke beech m value cchahiye 
//eg:
const min = 10;
const max = 20;
//formula kinda
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
