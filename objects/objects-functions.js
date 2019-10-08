let myBook = {
  title: "Steel Crow Saga",
  author: "Paul Krueger",
  pageCount: 528
};
let otherBook = {
  title: "I, Jedi",
  author: "Michael Stackpole",
  pageCount: 420
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount}pp.`
  };
};

let bookSummary = getSummary(myBook);
let otherSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

//Challenge
//Create function takes in farenheit returns all three temps
// prettier-ignore
let convertFarenheit = function(farenheit) {
  return {
    farenheit: farenheit,
    celsius: (farenheit - 32) * .556,
    kelvin: (farenheit + 459.67) * .556
  };
};

let result = convertFarenheit(30);

console.log(result);
