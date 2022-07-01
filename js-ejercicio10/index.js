//En el entrypoint index.js, importa el módulo controller.js
/*debe utilizar las funciones del módulo para devolver 
	la multiplicación de suma(1, 2) y suma(4, 5)*/
/*Modifica el último console.log del entrypoint index.js 
	para devolver el resultado en color verde*/
import {suma,multiplica} from './modulos/controller.js'
import chalk from 'chalk';

const sum = suma(2,2);
console.log(sum)

const mul = multiplica(2,4);
console.log(chalk.green(mul));

