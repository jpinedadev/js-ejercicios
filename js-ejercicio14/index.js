console.log('hola mundo')

const boton = document.querySelector("#btn")
boton.addEventListener("click",()=>{
	alert('click en el botón')
})

$(()=>{
	$("#btn").click(()=>{
		console.log('Hola, estoy utilizando jQuery')
	})
})
