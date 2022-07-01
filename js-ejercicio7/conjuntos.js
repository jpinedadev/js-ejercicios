/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" 
		(ya que empieza a formar parte de tu vida ;)
*/

const array = ["Julio","Cecilia","Carlos","Dario","Akane","Thiago"]
const miSet = new Set(array)
console.log(miSet)

miSet.add("Julio")
console.log(miSet)
miSet.add("Javascript")
console.log(miSet)