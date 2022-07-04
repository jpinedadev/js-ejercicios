/*
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista 
	con esa cantidad de números de la secuencia de Fibonacci 
	(Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración para visualizar la ejecución de la función
	[0,1,1,2,3,5,8,13,21,34,55]
*/

const fibonacci=(num)=>{
	let serie = [0,1]
	for (var i = 1; i < num; i++) {
		serie[i+1]=serie[i-1]+serie[i];
	}
	return serie
}

const res = fibonacci(6);
console.log(res)