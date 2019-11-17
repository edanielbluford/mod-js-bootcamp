//Calculate Tip
function calculateTip() {
  let billAmt = document.getElementById("billamt").value;
  let serviceQual = document.getElementById("serviceQual").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1

  //Calculate tip
  var total = billAmt * serviceQual;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();
};
