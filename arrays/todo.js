const todos = [
  "Get Milk",
  "Get OJ",
  "Brush Cat",
  "Fill out Form",
  "Play Destiny"
];

let remove = function(num) {
  todos.splice(num, 1);
};

let howMany = function() {
  return `You have ${todos.length} todos today!`;
};

const pickToDo = function(num) {
  return `Todo: ${todos[num]}`;
};
console.log(howMany());
//Delete third item.
remove(2);
//Add new item
todos.push("New Todo");
//remove first item from list
todos.shift();

console.log(howMany());
//Callback function
todos.forEach(function(item, index) {
  console.log(`${index + 1}. ${item}`);
});

///Wall Street
let moneyGenerator = function(investmentTips, num) {
  for (let count = 0; count < num; count++) {
    investmentTips(num);
  }
};

////////Investment Strat
let Agressive = function(num) {
  if (num > 20) {
    num * num;
  } else {
    num--;
  }
};

moneyGenerator(Agressive(), 5);
