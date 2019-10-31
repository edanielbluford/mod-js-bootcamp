function factorial(n){
let total = 1

for (let i = 1; i < n; i++) {
    total += total * i;
    
}
n = total
return n
}



console.log(factorial(20))