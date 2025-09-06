console.log("Loops");

// for loop
//Interator is inside the for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

const nameArray = ["Albert", "Bernard", "charlie", "Daniel"];

for (let i = 0; i < nameArray.length; i++) {
  console.log(nameArray[i]);
}

// while loop
//Interator is outside the for loop

let counter = 1;

while (counter <= 10) {
  console.log(counter);
  //modiciation must be inside the while loop
  counter++;
}

// for of loop
//To interate through an array

for (const userName of nameArray) {
  console.log(userName);
}
 
console.log("This code has reached this line");
