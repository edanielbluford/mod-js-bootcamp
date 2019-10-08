let isLocked = true;
let userRole = admin;

if (isLocked) {
  console.log("account is locked");
} else {
  console.log("Welcome!");
}

if (isLocked) {
} else if (userRole === "admin") {
  console.log("Welcome Admin");
} else {
  console.log("Welcome");
}

//Challenge

let temp = 45;

if (temp <= 32) {
  console.log("It's freezing out");
} else if (temp >= 110) {
  console.log("It's way to hot out");
} else {
  console.log("It's pretty nice out.");
}
