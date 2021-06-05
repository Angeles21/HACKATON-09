/* Ejercicio 1 - Suma

const numero1 = Number(prompt("Introduce un numero"));
const numero2 = Number(prompt("Introduce un numero"));

let resultado;

resultado = numero1 + numero2;

console.log(`El resultado es ${resultado}`);

*/

/********/

/*Ejercicio 2 - Promedio 

const nota1 = 20;
const nota2 = 4;
const nota3 = 9;
const nota4 = 13;

let resultado;

resultado = Math.round ((nota1 + nota2 + nota3 + nota4) / 4);

console.log(`El promedio es ${resultado}`);*/

/********/

/*Ejercicio 3 - Área Rectángulo 

const base = 5;
const altura = 25;

let area;

area = base * altura;

console.log(`El área del rectángulo es ${area}`); */

/********/

/*Ejercicio 4 - Área triángulo 

const base = 4;
const altura = 14;

let area;

area = (base * altura) / 2;

console.log(`El área del triángulo es ${area}`); */

/********/

/* Ejercicio 5 - Área de una circunferencia

const radio = 2;

let area;

area = Math.round (Math.PI * (radio * radio));

console.log(`El área del triángulo es ${area}`);*/

/********/

/* Ejercicio 6 - Sueldo Trabajador 

const horasTrabajo = 8;
const salarioHora = 10;
const diasLaborales = 5;

let sueldo;

sueldo = horasTrabajo * salarioHora * diasLaborales;

console.log(`El sueldo total es de ${sueldo}`);*/

/********/

/* Ejercicio 7 - Modista 

const metros = Number(prompt("Introduzca número de metros"));

let telaEncargo;

telaEncargo = metros * 39.37;

console.log(`La tela requerida sería: ${telaEncargo}in`);*/

/********/

/*Ejercicio 8 -  Dólares 

cantidadDolar();

function cantidadDolar() {
	const valorDolar = 3.7;
	const soles = Number(prompt("Introduzca soles"));

	if (soles <= 0) {
		console.log(`Introduzca un número válido`);
	} else {
		cantidadDolar = Math.round(soles / valorDolar);

		console.log(`Usted puede obtener hasta: ${cantidadDolar} USD`);
	}
}

*/

/********/

/*Ejercicio 9 - Edad de personas que solicitan trabajo 

edadCandidato();

function edadCandidato() {
	const tiempoActual = 2021;
	const nacimiento = Number(prompt("Introduzca año de nacimiento"));

	if (nacimiento >= 2021) {
		console.log(`Introduzca un año válido`);
	} else {
		edadCandidato = tiempoActual - nacimiento;
		console.log(`La edad del candiato es: ${edadCandidato}`);
	}
}

*/

/********/

/*Ejercicio 10 - Nombre & Edad 

menorEdad();

function menorEdad() {
	const persona1 = {
		nombre: "Mia",
		edad: 25,
	};

	const persona2 = {
		nombre: "Abel",
		edad: 27,
	};

	const persona3 = {
		nombre: "Sion",
		edad: 21,
	};

	if (persona1 > persona2) {
		menorEdad = persona1 > persona3;
		console.log(
			`La edad del candiato más joven es: ${persona3.nombre} y su edad es ${persona3.edad}`
		);
	} else {
		menorEdad = persona2 > persona3;
		console.log(
			`La edad del candiato más joven es: ${persona3.nombre} y su edad es ${persona3.edad}`
		);
	}
}

*/

/********/

/* Ejercicios 11  - Bono a trabajadores 

bonoEdad();

function bonoEdad() {
	const antiguedad = Number(
		prompt("Introduzca la cantidad de años que lleva en la empresa:")
	);

	if (antiguedad <= 0) {
		console.log(`Introduzca un año válido`);
	}

	if (antiguedad === 1) {
		console.log(`A usted le corresponden $100 de bono`);
	}

	if (antiguedad === 2) {
		console.log(`A usted le corresponden $200 de bono`);
	}

	if (antiguedad === 3) {
		console.log(`A usted le corresponden $300 de bono`);
	}

	if (antiguedad === 4) {
		console.log(`A usted le corresponden $400 de bono`);
	}

	if (antiguedad === 5) {
		console.log(`A usted le corresponden $500 de bono`);
	}

	if (antiguedad > 5) {
		console.log(`A usted le corresponden $1000 de bono`);
	}
}

*/

/********/

/* Ejercicio 12 - Salario Anual y luego de 6 años 

salarioAnual();

function salarioAnual() {
	const sueldo = 1500;
	salarioAnual = 1500 * 12 + 18000 * 0.1;
	console.log(`El salario de un año es ${salarioAnual} `);
}

salarioTotal();

function salarioTotal() {
	salarioTotal = salarioAnual * 6;
	console.log(`El salario de un año es ${salarioTotal} `);
}

*/

/********/

/* Ejercicio 13 - Calificación de alumnos N 

alumnos();

function alumnos() {
	const n = Number(prompt("Introduzca el número de alumnos:"));
	let desaprobado = 0;
	let aprobado = 0;

	if (isNaN(n)) {
		console.log(`Introduzca un número válido`);
		return;
	}

	if (n <= 0) {
		console.log(`Introduzca un número válido`);
		return;
	}

	const nota = Number(prompt("Introduzca nota:"));
	const nota2 = Number(prompt("Introduzca nota:"));
	const nota3 = Number(prompt("Introduzca nota:"));

	if (nota > 20) {
		console.log(`Ingrese un número menor a 20`);
		return;
	}

	if (nota <= 12.5) {
		desaprobado = desaprobado + 1;
	} else {
		aprobado = aprobado + 1;
	}
	if (nota2 > 20) {
		console.log(`Ingrese un número menor a 20`);
		return;
	}
	if (nota2 <= 12.5) {
		desaprobado = desaprobado + 1;
	} else {
		aprobado = aprobado + 1;
	}
	if (nota3 > 20) {
		console.log(`Ingrese un número menor a 20`);
		return;
	}
	if (nota3 <= 12.5) {
		desaprobado = desaprobado + 1;
	} else {
		aprobado = aprobado + 1;
	}

	let promedio;

	promedio = Math.round((nota + nota2 + nota3) / n);

	if (promedio >= 12.5) {
		console.log(`El promedio es: ${promedio}, han aprobado.`);
	} else {
		console.log(`El promedio es: ${promedio}, NO han aprobado.`);
	}

	console.log(`Los aprobados son ${aprobado} `);
	console.log(`Los desaprobados son ${desaprobado} `);
}
*/

/********/

/* Ejercicio 14 - Separar focos por color  */

/********/

/* Ejercicio 15 - Edad para votar 

votacion();

function votacion() {
	const edadVotante = Number(prompt("Introduzca su edad:"));

	if (isNaN(edadVotante)) {
		console.log(`Introduzca un edad válida`);
		return;
	}

	if (edadVotante <= 0) {
		console.log(`Introduzca un edad válida`);
		return;
	}

	if (edadVotante + 5 >= 18) {
		console.log(`Usted puede votar en las elecciones del año 2016`);
		return;
	} else {
		console.log(`Usted todavía no puede votar en las elecciones del año 2026`);
	}
}

*/
