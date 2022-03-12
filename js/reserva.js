let select_habitacion = document.getElementById("select-habitacion");
let tipoHabitacion = document.getElementById("tipoHabitacion");

let diaEntrada = document.getElementById("diaEntrada");
let fechaEntrada = document.getElementById("fechaEntrada");

let diaSalida = document.getElementById("diaSalida");
let fechaSalida = document.getElementById("fechaSalida");

let btnreservar = document.getElementById("btnreservar");


const fechaActual = (diaEntrada) => {
    let fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    if (mes < 10) {
        mes = "0" + mes;
    }
    if (dia < 10) {
        dia = "0" + dia;
    }
    diaEntrada.value = fecha.getFullYear() + "-" + mes + "-" + dia;
}

let formatoFecha = (dia) => {
    fecha = dia.value.split("-");
    return fecha[2] + "/" + fecha[1] + "/" + fecha[0];
}

//Controlar que la fecha salida no sea menor a la fecha de entrada
const ventanaModal = (habitacion, entrada, salida) => {
    tipoHabitacion.textContent = habitacion.value;
    if (entrada.value.length == 0) {
        fechaActual(entrada);
    }
    if (salida.value.length == 0) {
        fechaActual(salida);
    }
    if(salida.value <= entrada.value){   
        salida.value = entrada.value;
        fechaSalida.textContent = formatoFecha(salida);
        
    }else{
        fechaSalida.textContent = formatoFecha(salida);
    }
    fechaEntrada.textContent = formatoFecha(entrada);
}


//Ponerle como minimo el día de hoy
document.addEventListener("DOMContentLoaded", () => {
    let fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    if (mes < 10) {
        mes = "0" + mes;
    }
    if (dia < 10) {
        dia = "0" + dia;
    }
    diaEntrada.setAttribute("min", (fecha.getFullYear() + "-" + mes + "-" + dia))

    diaSalida.setAttribute("min", (fecha.getFullYear() + "-" + mes + "-" + (dia)))
})


//Dar valor a los datos de la ventana modal
btnreservar.addEventListener("click", () => {
    ventanaModal(select_habitacion, diaEntrada, diaSalida)
})


fetch("https://api.unsplash.com/photos/random?count=5")
.then(datos => datos.json())
.then(console.log(datos))


