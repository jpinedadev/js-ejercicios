/*
Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout 
	y pase por consola un "Hola soy una promesa" 5 segundos 
	después de haberse ejecutado
- Una función generadora de índices pares automáticos
*/
const miFuncion = i=>{
	return true;
}
console.log(miFuncion())

/*function miAsync(){
	console.log('Hola soy una promesa')
}
setTimeout(miAsync, 5000);
*/
function* generaIndices(){
	let ind = 0;
	while(true){
		ind += 2;
			if (ind===10) {
			return ind;
			}
		yield ind
	}
}
const gen = generaIndices();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())