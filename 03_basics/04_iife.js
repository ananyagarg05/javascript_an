///Wo function jo define karte hi turant execute ho jaata hai.

//Immediately Invoked Function Expressions (IIFE)
//syntax
// (function () {
//     console.log("IIFE chal gaya!");
// // })();
// 👉 Why use IIFE?
// Global scope ko pollute karne se bachane ke liye.
// Private variables banana.
// Code ko immediately execute karne ke liye without calling separately.


(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Ananya");
