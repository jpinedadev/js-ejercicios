/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fecha = new Date();
console.log(fecha.toLocaleDateString("en-GB"))
console.log(fecha.getDate())
const fechaNac = new Date("August,28,2000")
console.log(fechaNac)

console.log(fecha.getTime() > fechaNac.getTime())
console.log(fechaNac.getTime())
console.log(fechaNac.getMonth())
console.log(fechaNac.getFullYear())