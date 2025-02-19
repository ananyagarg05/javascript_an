// node 03_basics/01_functions.js
/*function sayMyName() {
  console.log("A");
  console.log("N");
  console.log("A");
  console.log("N");
  console.log("Y");
  console.log("A");
}*/
//RUN
//sayMyName(); // output is below
/*
A
N
A
N
Y
A
*/
//important to add parameters
/*function add(num1, num2) {
  console.log(num1 + num2);
}
//and these are my arguments to run
add(3, 5);*/

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2; //less space ,same baat
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

//using if with funtions
function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

//print
//if no username is given fir  undefined output aayegi
// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//rest operator for more values (...) and also spread op.
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//array m add hojayega
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
//or
console.log(returnSecondValue([200, 400, 500, 1000]));
