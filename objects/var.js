if (10 === 10) {
  var firstName = "Jen";
  //if this were var, we wouldn't be able to access it below
}

console.log(firstName);
//Var is function scoped not block scoped

//function scope
const setName = function() {
  var newName = "Dude";
};
console.log(newName);

let age;
console.log(age);

var danger;
console.log(danger);

//Strange example 3
foo = 10;
console.log(foo);
var foo;
