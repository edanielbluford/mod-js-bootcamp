function checkCamelCase(s = "") {
  let wordCount = 1;
  const stringAsArray = s.split("");

  stringAsArray.array.forEach(function(char, index) {
    const isCamelCase = char === char.toUpperCase();

    if (isCamelCase) {
      wordCount++;
    }
  });

  return wordCount;
}
//Challenge successfil
