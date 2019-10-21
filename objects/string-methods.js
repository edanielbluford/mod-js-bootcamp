let name = " Ernest Bluford";

//Length Property
console.log(name.length);

//To Upper Case

console.log(name.toUpperCase());

let password = "abc123password0898";
password.includes("password");

//trim
name.trim();

//
//IsValidPassword
//length is more than length doesn't contain the word password

let isValidPassword = function(password) {
  if (password.length > 8 && !password.includes("password")) {
    return true;
  } else {
    return false;
  }
};

let isValidPassword2 = function(password) {
  return password.length > 8 && !password.includes("password");
};

console.log(isValidPassword2("asdfp"));
console.log(isValidPassword2("asdfp123&*^^*"));
console.log(isValidPassword2("asdfp123&*^^*password"));
