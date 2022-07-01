/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales 
	(nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales 
	y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados 
	por edad, de mayor a menor
*/

const obj = {
	nombre:"julio", 
	apellido:"Pineda", 
	edad:22, 
	altura:1.75, 
	eresDesarrollador:true
}
console.log(obj)
let edad = obj.edad;
console.log(edad)
const lista = obj;
//console.log(lista)
const obj2 = [
	{
		nombre:"julio", 
		apellido:"Pineda", 
		edad:22, 
		altura:1.75
	},
	{
		nombre:"Steve", 
		apellido:"Jobs", 
		edad:25, 
		altura:1.78
	}
]
//console.log(obj2)
const lista2 = obj2.sort((a,b)=>b.edad - a.edad)
console.log(lista2)