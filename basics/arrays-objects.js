console.log("Arrays and Objects");

// Arrays
//Collection of variables

const numArray = [10, 20, 30, 40];
console.log(numArray);
console.log(numArray[0]);
console.log(numArray.length);
console.log(numArray[numArray.length - 1]);

const nameArray = ["Albert", "Bernard", "charlie"];
console.log(nameArray);
console.log(nameArray[2]);

nameArray.push("Daniel");
console.log(nameArray);

nameArray.pop();
console.log(nameArray);

nameArray.unshift("Mary");
console.log(nameArray);

nameArray.shift();
console.log(nameArray);

nameArray.splice(1,0,"New Name");
console.log(nameArray);

nameArray.splice(1,1);
console.log(nameArray);


// Objects
//When order is not important, its like an array but not the same

const book = {
    title: "The power of NOW",
    pages: 269,
    author: "jk"
};
console.log(book);
console.log(book.title);
console.log(book["author"]);

book.pages = 300;
console.log(book);
console.log(book.pages);