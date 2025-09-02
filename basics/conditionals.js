console.log("Conditionals");

//Conditionals
//condition is being met
const age = 11;
if (age >= 21) {
  console.log("You are an adult");
} else if (age > 10) {
  console.log("You are older than 10");
} else if (age === 1) {
  console.log("You are 1 years old");
} else {
  console.log("You are a minor");
}

if (age % 2 === 0) {
  console.log("your age is an even nunmber");
} else {
  console.log("Your age is an odd number");
}

//Truthy and Falsy

let myCondition = true;

if (myCondition) {
  console.log("The condition is Truthy");
} else {
  console.log("The condition is Falsy");
}

//TRUTHY  |   FALSY
// True   |   false
// "eds"  |    ""
//  21    |     0
//        |   undefined
//        |   null
//  []    |
//  {}    |

const password = "uwhefiuew";

console.log(password.length);
console.log(!password.length);

if (!password.length) {
  console.log("Your password cannot be empty");
} else {
  console.log("Your password is correct!");
}
