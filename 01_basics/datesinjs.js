// node 01_basics/datesinjs.js
// Dates
//JavaScript Date objects represent a single moment in time in a platform-independent format.
//Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
//use the keyword new date
//object bnaya hai
let myDate = new Date();
//op Tue Sep 17 2024 10:30:14 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toString());
//Tue Sep 17 2024
console.log(myDate.toDateString());
//9/17/2024, 10:30:14 AM
console.log(myDate.toLocaleString());
//object
console.log(typeof myDate);

//months is javascript starts from 0
//agar function ke way m likha hai toh 0 se
//age dd mm yy se toh normal 1 se hee months
//1/23/2023, 12:00:00 AM ->localestring
let myCreatedDate = new Date(2023, 0, 23);
//let myCreatedDate = new Date(2023, 0, 23, 5, 3);
//let myCreatedDate = new Date("2023-01-14")
//let myCreatedDate = new Date("01-14-2023");
//Mon Jan 23 2023 ->date date string
//console.log(myCreatedDate.toLocaleString());

//*******timestamps************/
//date.now() abhi ki value
let myTimeStamp = Date.now();

console.log(myTimeStamp); //1726569532726->milliseconds
//.gettime
//console.log(myCreatedDate.getTime());//1726569532726
///1000 karo ->seconds m convert hojayega
//aur fir /1000 krke decimal values aajati hai
//floor kardo decimal hatt jaeyaga easyy
//console.log(Math.floor(Date.now() / 1000));//1726569532

//more about dates ,months etc
let newDate = new Date();
//aaj ki date aayi hai
//17 september 2024
console.log(newDate); //2024-09-17T10:42:45.315Z
//+1 isiliye kia hai kyunki sept aaye
//js m 0 se start hote hai months in func calling
console.log(newDate.getMonth() + 1); //9
//getDay kia hai toh 2 aaya hai
//which means monday then tuesday
//2 ->tuesday
console.log(newDate.getDay()); //2

//string interpolation

`${newDate.getDay()} and the time `;

//more customisations
//weekday long means mon to monday
//full length
//boht prop's hai
newDate.toLocaleString("default", {
  weekday: "long",
});
