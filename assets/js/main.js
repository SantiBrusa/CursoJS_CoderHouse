const servicios = [
  { nombre: "Limpieza", precio: 10000 },
  { nombre: "Instalacion SO", precio: 8000 },
  { nombre: "Instalacion programas", precio: 8000 },
  { nombre: "Actualizacion de hardware", precio: 15000 },
  { nombre: "Asesoramiento armado de PC", precio: 7500 },
];

function mostrarServicios() {
  let msj = "Servivios disponibles:\n";
  for (let i = 0; i < servicios.length; i++) {
    msj += `${i+1}. ${servicios[i].nombre} - $${servicios[i].precio}\n`;
  }
  return msj; 
}

function simulacion() {
  alert("Bienvenido a ServiTec")

  let nombre = prompt("Como te llamas?")
  let equipo = prompt("Que equipo desea reparar? (Notebook, consola, PC)")

  let opciones = mostrarServicios();
  let opcion = prompt(opciones + "\n Elige un numero del 1 al " + servicios.length);

  if (opcion >= 1 && opcion <= servicios.length) {
    let elegido = servicios[opcion-1];
    let msj = `Hola ${nombre}, seleccionaste:\n` +
              `Equipo: ${equipo}\n` +
              `Servicio: ${elegido.nombre}\n` +
              `Precio: $${elegido.precio}\n\n` +
              `Confirma el Servicio?`
    
    let confirmar = confirm(msj);

    if (confirmar){
      alert("Te contactare pronto, att: ServiTec.");
    } else {
      alert("Cancelado");
    }

    console.log("Datos: ", nombre, equipo, elegido.nombre, elegido.precio);
  } else {
    alert("Opcion Invalida, intentelo de nuevo");
  }
}

simulacion();