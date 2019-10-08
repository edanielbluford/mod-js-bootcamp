let myBook = {
  title: "Steel Crow Saga",
  author: "Paul Krueger",
  pageCount: 528
};

console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Last Call at the Nightshade Lounge";

console.log(`${myBook.title} by ${myBook.author}`);

//Challlenge - Person Object

let person = {
  name: "Watson",
  age: 5,
  location: "Cleveland"
};

console.log(`I'm ${person.name}, ${person.age}. I live in ${person.location}.`);

person.age++;

console.log(`I'm ${person.name}, ${person.age}. I live in ${person.location}.`);
