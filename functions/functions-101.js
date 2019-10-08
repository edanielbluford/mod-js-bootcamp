//function = input(argument), code, output

let greetUser = function() {
  console.log("Welcome User");
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

//challenge = convert

let convertFarenheitToCelsius = function(temp) {
  celsius = ((temp - 32) * 5) / 9;
  return celsius;
};

let convertedTemp = convertFarenheitToCelsius(32);
let otherTemp = convertFarenheitToCelsius(68);

console.log(convertedTemp);
console.log(otherTemp);
