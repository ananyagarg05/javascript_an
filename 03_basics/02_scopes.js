//scopes-> let,const,var -> {}
//scope of that program

//var kaise bhi chalega
//chahe andr ya bahar
//var will give an output even if the variable is not in the scope.
//tabhi kehte hai var matt use karo

//var c = 300
let a = 300; //global scope
if (true) {
  let a = 10; //block scope
  const b = 20;
  // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope

function one() {
  const username = "ananya";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //block se bahar kaise kroge use?
  // console.log(website);

  two();
}

one();

if (true) {
  const username = "Ananya Garg";
  if (username === "Ananya Garg") {
    const website = " youtube";
    console.log(username + website);
  }
  //scope hee nhi hai  janaab ...
  //console.log(website);
}
//scope nhi hai bhai
//console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++

//joh 6 output hai woh iski hai
console.log(addone(5));

function addone(num) {
  return num + 1;
}

//agar iske upar likh dete toh hoisting kehte hai
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
