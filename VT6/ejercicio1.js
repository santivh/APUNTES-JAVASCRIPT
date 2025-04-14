class Tarea {
    constructor(id, descripcion, fechaVencimiento) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = false;
    this.fechaVencimiento = fechaVencimiento;
    }
}

const listaDeTareas = [
    new Tarea(1, "Hacer la compra", new Date()),
    new Tarea(2, "Estudiar para el examen", new Date()),
    new Tarea(3, "Llamar al médico", new Date()),
];

function mostrarTareas() {
    const listaDeTareasElement = document.getElementById("tareas-lista");
    listaDeTareasElement.innerHTML = ''; // Limpia la lista antes de mostrar las tareas nuevamente

    const hoy = new Date().setHours(0,0,0,0); // Fecha Actual a la medianoche
    for (let i = 0; i < listaDeTareas.length; i++) {
        const tarea = listaDeTareas[i];
        const tareaElement = document.createElement("li");
        
        if (!isNaN(tarea.fechaVencimiento)) {
            const hoy = new Date();
            const tareasPendientes = listaDeTareas.filter(tarea => !tarea.completada);
            hoy.setHours(0, 0, 0, 0); // Establecer hora de hoy a la medianoche
        
            const fechaVencimiento = new Date(tarea.fechaVencimiento);
            fechaVencimiento.setHours(0, 0, 0, 0); // Fecha de vencimiento a la medianoche
        
            const diferenciaEnMilisegundos = fechaVencimiento - hoy;
            const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24)); // Diferencia en días
        
            let color = "";
            if (diferenciaEnDias <= 0) {
                color = "red";
            } else if (diferenciaEnDias <= 3) {
                color = "orange";
            } else if (diferenciaEnDias <= 7) {
                color = "yellow";
            }
        
            tareaElement.innerHTML = 
                'Tarea ' + tarea.id + ': ' + tarea.descripcion + ' (Completada: ' + tarea.completada + ') ' +
                "Fecha de vencimiento: " + tarea.fechaVencimiento +
                "<button onclick='marcarTareaComoCompletada(" + tarea.id + ")'>Marcar como completada</button>" +
                "<button onclick='eliminarTarea(" + tarea.id + ")'>Eliminar</button>";

            tareaElement.style.backgroundColor = color;
            listaDeTareasElement.appendChild(tareaElement);
        } else {
            console.log("Fecha de vencimiento inválida para la tarea: ", tarea);
        }
    }
}


function agregarTarea() {
    var descripcion = document.getElementById('descripcion-tarea').value;
    var fechaVencimiento = new Date(document.getElementById("fecha-vencimiento").value);
    var id = listaDeTareas.length + 1;
    const nuevaTarea = new Tarea(id, descripcion,fechaVencimiento);
    listaDeTareas.push(nuevaTarea);
    mostrarTareas();
}

function marcarTareaComoCompletada(id) {
       //Devuelve el primer elemento de un array que cumple con una condición. Si no encuentra ninguno, devuelve undefined.
    const tarea = listaDeTareas.find((t) => t.id === id);
    if (tarea) {
        tarea.completada = true;
    }
    mostrarTareas();
}

function eliminarTarea(id) {
       //Devuelve el índice del primer elemento en un array que cumple con una condición dada. Si no encuentra ninguno, devuelve -1.
    const index = listaDeTareas.findIndex((t) => t.id === id);
    if (index !== -1) {
        // Solicitar confirmación para eliminar tarea
        const confirmacion = confirm ("¿Seguro que quieres eliminar esta tarea?");
          //Eliminar una tarea específica de la lista.
          //index: es la posición del elemento que queremos eliminar.
          //1: Indica que solo se eliminará un elemento en esa posición.
        if (confirmacion){
            listaDeTareas.splice(index, 1); 
            mostrarTareas();
        }
        
    }
}
