//Challenge

//15 to
let gradeCalc = function(studentScore, totalScore) {
  let gradePercentage = (studentScore / totalScore) * 100;
  let letterGrade;

  if (gradePercentage >= 90 && gradePercentage <= 100) {
    letterGrade = "A";
  } else if (gradePercentage >= 80 && gradePercentage <= 89) {
    letterGrade = "B";
  } else if (gradePercentage >= 70 && gradePercentage <= 79) {
    letterGrade = "C";
  } else if (gradePercentage >= 60 && gradePercentage <= 69) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  let gradeMessage = `You got an ${letterGrade}(${gradePercentage}%)`;

  return gradeMessage;
};

let gradePrint = gradeCalc(15, 20);

console.log(gradePrint);
