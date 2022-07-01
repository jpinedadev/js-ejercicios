/*
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores 
	al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas 
	original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original 
	(utilizando map)
- Una nueva lista que concatene la lista de directores 
	y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores 
	y la lista de los títulos (utilizando el factor de propagación)
*/

const listaCompras = ["pan", "chocolate","mermelada","leche","azucar"]
console.log(listaCompras)
listaCompras.push("Aceite de Girasol");
console.log(listaCompras)
listaCompras.pop()
console.log(listaCompras)

listaPeliculas=[
	{titulo:"Harry Potter",director:"Chris Columbus",fecha:2001},
	{titulo:"Los otros",director:"A. Amenábar",fecha:2001},
	{titulo:"Jobs",director:"Joshua Michael Stern",fecha:2013}
	];
console.log(listaPeliculas)

const listaPeliculasFecha = listaPeliculas.filter(i=>i.fecha > 2010);
console.log(listaPeliculasFecha)

const listaDirectores = listaPeliculas.map(i=>i.director)
console.log(listaDirectores)
const listaTitulos = listaPeliculas.map(i=>i.titulo)
console.log(listaTitulos)
const concatenar = listaDirectores.concat(listaTitulos);
console.log(concatenar)
const concatenar2 = [...listaDirectores,...listaTitulos];
console.log(concatenar2)