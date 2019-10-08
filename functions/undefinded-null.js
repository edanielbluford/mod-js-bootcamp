let name;

name = "Watson";

if (name === undefined) {
  console.log("Please provide a name");
} else {
  console.log(name);
}

//undefined for function arguments
//undefined as a function returns default value
let square = function(num) {
  console.log(num);
};
let result = square();
console.log(result);

// null assignments
let age = 27;
console.log(age);
age = null;
console.log(age);
