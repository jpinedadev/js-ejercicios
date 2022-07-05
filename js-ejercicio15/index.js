console.log('hola mundo')

const nombre = "Julio"
const apellido = "Pineda"

const obj = {
	nombre: `${nombre}`,
	apellido:`${apellido}`
}

console.log(obj)

localStorage.setItem("persona",JSON.stringify(obj))

sessionStorage.setItem("persona",obj)


var date = new Date();
date.setTime(date.getTime() + (120 * 1000));

document.cookie="persona=obj;expires="+ date;
