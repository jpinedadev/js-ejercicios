//- factorial-while.js -> Este archivo debe calcular el factorial de 10
// utilizando un bucle while

//n! = n × (n−1)!
//factorial de 4 = 24
//4! = 4x3x2x1
//4x3 12x2 24x1 =24

//10! = 3,628,800

let n = 10;
let res=n;

let i = 1;
while(i<n){
	res=res*(n-i);
	i++
}
console.log("El factorial es : "+res);