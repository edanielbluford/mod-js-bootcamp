//Multiple Arguements
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 3);
console.log(result);

//Default arguments

let getScoreText = function(name = "Anon", score = 0) {
  return `Name: ${name} -Score: ${score}`;
  //return "Name: " + name + " - Score: " + score;
};

let scoreText = getScoreText(undefined, 99);
console.log(scoreText);

console.log;

//Challenge
//total, tipPercentage,

let tipCalculator = function(total, tipPercentage = 0.2) {
  let percentAsAWholeNumber = tipPercentage * 100;

  let tipOnBill = total * tipPercentage;

  return `A ${percentAsAWholeNumber}% tip on $${total} would be $${tipOnBill}.`;
};

let tipMessage = tipCalculator(100, 0.25);

console.log(tipMessage);
