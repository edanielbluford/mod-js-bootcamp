//GLobal Scope convertFarenheitToCelsius, convertTemp, other Temr
//>>Local Scope(temp , celsius)
//>>>local scope (isfreezing)

let convertFarenheitToCelsius = function(temp) {
  celsius = ((temp - 32) * 5) / 9;
  if (celsius <= 0) {
    let isfreezing = true;
  }

  return celsius;
};

let convertedTemp = convertFarenheitToCelsius(32);
let otherTemp = convertFarenheitToCelsius(68);

console.log(convertedTemp);
console.log(otherTemp);
