let temp = 65;

if (temp >= 60 && temp >= 90) {
  console.log("It's pretty nice out.");
} else if (temp <= 0 || temp >= 120) {
  console.log("do not go outside");
} else {
  console.log("Eh. Do what you want");
}

//challenge

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

//both
//one
//none

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
  console.log("Vegan Dish Selection");
} else if ((isGuestOneVegan || isGuestTwoVegan) === true) {
  console.log("Offer Vegan and Non-Vegan Selection");
} else {
  console.log("Offer anything");
}
