//node 02_basics/02_arrays.js

// const marvel_heros = ["thor", "Ironman", "spiderman"];
// const dc_heros = ["superman", "flash", "batman"];

//add karo push use krke
//marvel_heros.push(dc_heros);

//console.log(marvel_heros);
//ab yaha pr array in array hogya tha
//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//isliye thor 0, ironman 1  ,spiderman 2 and the whole next thing is 3
//therefore [3] mein full aata
//and [3][1] ,that is [3] ka index 1 pr flash hai
//[3][0] pr super man hota
//not a good syntax though
//console.log(marvel_heros[3][1]); //flash

//push ki jagah concatenate kr skte the
//better
//op
//array in array nhi hoga yahan
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

//spread
//kaanch ka glass
//drop krdo spread hojayega
//......spread ho rhi hai values
//... lgao and concatenate spread hojaeygi
//zyda code and add krne ke liye
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

//rare case situation array ke andr array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//flat
//Returns a new array with all
// sub-array elements concatenated into it recursively up
// to the specified depth.
//infinity se depth jitni bhi ho
//jaise yaha max 2 ek andr array ke andar
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
//Creates an array from an iterable object.
console.log(Array.from("Hitesh"));
//[] output
//key se value se bnao array
console.log(Array.from({ name: "hitesh" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
//printing like an array from set of ele's
//[ 100, 200, 300 ] output
console.log(Array.of(score1, score2, score3));
