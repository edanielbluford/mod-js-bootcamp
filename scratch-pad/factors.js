function factorial(n) {
  const number = n;
  for (let i = 1; i <= number; i++) {
    n += i * i + 1;
  }
  return n;
}

function main() {
  const n = 4;

  console.log(factorial(n));
}
