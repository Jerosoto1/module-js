let nombre = prompt("Escribe tu nombre:");
let edadInput = prompt("Escribe tu edad:");
let edad = Number(edadInput);

if (isNaN(edad)) {
console.error("Error: Ingresa un número válido para la edad.");
} else {
if (edad < 18) {
    console.log(`Hola ${nombre}, eres menor de edad.`);
} else {
    console.log(`Hola ${nombre}, eres mayor de edad.`);
}
}
