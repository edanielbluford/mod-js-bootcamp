function angryProfessor(classThreshold, studentArrvals) {
  let arrivalTime = 0;
  let studentsinClass = 0;

  for (let index = 0; index < studentArrvals.length; index++) {
    const element = studentArrvals[index];

    if (element >= arrivalTime) {
      studentsinClass++;
    }
  }

  return studentsinClass >= classThreshold ? "YES" : "NO";
}

console.log(angryProfessor(5, [-1, -1, 0, 0, 1, 1]));
