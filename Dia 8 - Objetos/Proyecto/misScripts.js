let arrayEmpleados = [];

function Empleado(legajo, nombre, apellido, fechaNacimiento, cargo) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}

function guardarEmpleado() {
    let legajo = document.getElementById("inputLegajo").value;
    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let fecha = document.getElementById("inputFecha").value;
    let cargo = document.getElementById("inputCargo").value;

    let empleado = new Empleado(legajo, nombre, apellido, fecha, cargo);
    arrayEmpleados.push(empleado);
    alert("Empleado agregado correctamente.");

    limpiarInputs();
}

function limpiarInputs(){
    document.getElementById("inputLegajo").value = "";
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputFecha").value = "";
    document.getElementById("inputCargo").value = "";
}

function mostrarRegistros() {
    let listaEmpleados = "";

    for(let empleado of arrayEmpleados) {
        for(let atributo in empleado) {
            listaEmpleados = listaEmpleados + atributo.toUpperCase() + ": " + empleado[atributo] + ", ";
        }
        listaEmpleados = listaEmpleados + "\n";
    }
    alert(listaEmpleados);
}