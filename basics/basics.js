console.log ("Hello world!");

// How to declare a variable

let userName = "Keanu";
console.log(userName);

userName = "Keanu2";
console.log(userName);

const pi = 3.14159;
console.log(pi);

//Type of variables
//text string ("")
let myString ="Hello";
console.log(myString);

//number
let myNumber = 1234;
console.log(myNumber);

//Boolean (True or False)
let myBoolean = true;
console.log(myBoolean);

//Underfined variable
let myUndefined;
console.log(myUndefined);

//Null variable
let myNull = null;
console.log(myNull);

//Strings

let doubleQuoteMsg = "Hi, my name is Keanu";
console.log(doubleQuoteMsg);

let singleQuoteMsg = 'Hi, my name is Keanu';
console.log(singleQuoteMsg);

//more professional way of Concating Strings
let backtickQuoteMsg = `Hi, My name is ${userName}`;
console.log(backtickQuoteMsg);

//Also OK but less professional
let strConcat = "Hi, my name is " + userName;
console.log(strConcat);

console.log(userName.length);

console.log(userName.toUpperCase());
console.log(doubleQuoteMsg.toLowerCase());

let otherStr = "     Other phrase     ";
console.log(otherStr);
console.log(otherStr.trim());


//Numeric operators

let num1 = 14;
let num2 = 5;

const result = num1 + num2;
console.log(result);

const subResult = num1 - num2;
console.log(subResult);

const timesResult = num1 * num2;
console.log(timesResult);

const divideResult = num1 / num2;
console.log(divideResult);

// This does devide and what is left over will be shown
const moduleResult = num1 % num2;
console.log(moduleResult);

num1 = 20;
console.log(num1);

num1 = num1 + 5;
console.log(num1);

num1 += 1;
console.log(num1);

num1 -= 1;
console.log(num1)

num1 *= 2;
console.log(num1);

num1 /= 2;
console.log(num1);

// for adding only 1
num1++;
console.log(num1); 