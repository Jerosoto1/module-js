const nombre = prompt("¿Cuál es tu nombre?");
let edadValida = false;
let edad;

while (!edadValida) {
  const edadTexto = prompt("¿Cuántos años tienes?");
  if (/^\d+$/.test(edadTexto)) {
    edad = parseInt(edadTexto);
    edadValida = true;
  } else {
    alert("Por favor, ingresa solo números válidos para la edad.");
  }
}

if (edad < 18) {
  alert(`Hola ${nombre}, aún eres menor de edad.`);
} else {
  alert(`Hola ${nombre}, ya eres mayor de edad.`);
}
