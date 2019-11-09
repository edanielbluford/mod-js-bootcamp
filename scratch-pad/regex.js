const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = new RegExp("[^a|e|i|o|u]/", "m");

  /*
   * Do not remove the return statement
   */
  return re;
}

function main() {
  const re = regexVar();
  let s = readline.question();

  console.log(re.test(s));
}

main();
