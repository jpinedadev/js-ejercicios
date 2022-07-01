//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando
// un bucle while, una bifurcación if y una sentencia break

//n! = n × (n−1)!
//factorial de 4 = 24
//4! = 4x3x2x1
//4x3 12x2 24x1 =24

//10! = 3,628,800


let factorial = 1
let num = 10
while (true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial) // Factorial de 10 = 3628800