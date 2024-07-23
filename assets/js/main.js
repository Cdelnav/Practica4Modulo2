var cantidad = prompt("¿Cuántos colaboradores desea registrar?")

var colaboradores = []


for (var index = 0; index < cantidad; index++) {
    var rut = prompt("Ingrese el RUT del colaborador "+ index)
    var nombre = prompt("Ingrese el nombre del colaborador "+ index)
    var salarioHora = prompt("Ingrese el salario por hora del colaborador "+ index)
    var cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas del colaborador "+ index)

    colaboradores[index] = {
        rut: rut,
        nombre: nombre,
        salario_hora: salarioHora,
        cantidad_horas: cantidadHoras
    }
}

console.log(colaboradores);

var tbody = document.querySelector("#tabla-colaboradores tbody")

do {
    var cantidad = prompt("¿Cuántas personas desea visualizar?")

    if(isNaN(cantidad)) {
        alert("Por favor ingresar un valor numérico")
    } else if(cantidad < 1 || cantidad > colaboradores.length) {
        alert("Por favor ingresar un valor entre 1 y "+colaboradores.length)
    }
} while (isNaN(cantidad) || (cantidad < 1 || cantidad > colaboradores.length));

var index = 0;
while (index < cantidad) {
    tbody.innerHTML += `
        <tr>
            <td>${colaboradores[index].rut}</td>
            <td>${colaboradores[index].nombre}</td>
            <td>${colaboradores[index].salario_hora}</td>
            <td>${colaboradores[index].cantidad_horas}</td>
            <td>${colaboradores[index].activo}</td>
        </tr>
    `
    index = index + 1;
}
