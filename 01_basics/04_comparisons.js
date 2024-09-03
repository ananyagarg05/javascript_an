// node 01_basics/04_comparisons.js
console.log("ananya");

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); //true
//convert hogye number m ye dono

// null and undefined ko avoid hee karo
//readibility and practical code likho
console.log(null > 0); //false
//aur yaha sirf > tha , isliye false
console.log(null == 0); //false
console.log(null >= 0); //true
//>= is true m convert krdia hai
//conversion ka khel hai

//always false
console.log(undefined == 0); //f
console.log(undefined > 0); //f
console.log(undefined < 0); //f

//== works difference and > < difference

//===
//this is strict check
console.log("2" === 2); //op is False
//strict check hai same nhi hai
//=== triple check
