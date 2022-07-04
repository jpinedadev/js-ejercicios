/*
Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna 
	(comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion 
	sea "latest"
- Cambia la configuración de ESLint para que muestre un error 
	cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente 
	todos los errores
- Ejecuta el script a través del terminal
*/


// Sesión 4 - Strings (cadenas de caracteres)
let str_sng = "Hola soy un texto con comillas simples"
let str_dbl = "Hola soy un texto con comillas dobles"

console.log(str_sng)
console.log(str_dbl)

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_simples = "El otro día me dijo literalmente \"ve a sacar la basura\""
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
let str_comillas_simples_2 = "El otro día me dijo literalmente 've a sacar la basura'"

console.log(str_comillas)
console.log(str_comillas_simples)
console.log(str_comillas_dobles)

////// Comillas invertidas (backticks)
let str_backticks = "Hola esto es un string con backticks"

console.log(str_backticks)

let nombre = "Iñigo"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`

console.log(plantilla)

//// Introducción de variables en html
let libros = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]
