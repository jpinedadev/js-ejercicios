/*
Crea un nuevo proyecto de Node
- Instala la dependencia Winston
- En el archivo index.js crea una 
	función que devuelva un error con un mensaje personalizado
- Registra el error en un archivo a través de un try...catch
*/

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

// const elDoble = miFuncion("a1a")
const numero = "8";

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}
