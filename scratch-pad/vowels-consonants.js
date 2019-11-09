function vowelsAndConsonants(s) {
  const strArray = Array.from(s);
  const consonants = [];
  const vowels = [];

  strArray.forEach(function(element) {
    let isVowell =
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u";

    if (isVowell) {
      vowels.push(element);
    } else {
      consonants.push(element);
    }
  });

  vowels.forEach(function(vowel) {
    console.log(vowel);
  });

  consonants.forEach(function(consonant) {
    console.log(consonant);
  });
}

vowelsAndConsonants("Javascriptloops");
