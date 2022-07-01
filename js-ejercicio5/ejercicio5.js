/*
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si 
	"el máximo valor que se puede obtener en Javascript + 1" 
	es igual al máximo valor que se puede obtener en Javascript
*/

let altura_cm = 175;
let altura_metros = 1.75;
let peso_kl = 80.7;
let aultura_metros_red = Math.round(altura_metros);
let peso_kl_red = Math.floor(peso_kl);
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE

console.log(altura_cm);
console.log(altura_metros);
console.log(peso_kl);
console.log(aultura_metros_red);
console.log(peso_kl_red);
console.log(sonIguales);
