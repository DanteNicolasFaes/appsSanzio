

//boton de comprobante de atencion 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('comprobanteAtencion').addEventListener('click', function() {
  const ventanaBusqueda = window.open('comprobante_atencion.html', '_blank', 'width=600,height=400')
    });
});
// Función para llenar los datos del paciente en el formulario de comprobante de atención
function llenarDatosPaciente(datosPaciente) {
    // Llenar los campos del formulario con los datos del paciente
    document.getElementById('nombre').value = datosPaciente.nombre || '';
    document.getElementById('apellido').value = datosPaciente.apellido || '';
    document.getElementById('documento').value = datosPaciente.documento || '';
    document.getElementById('fechaNacimiento').value = datosPaciente.fechaNacimiento || '';
    document.getElementById('nacionalidad').value = datosPaciente.nacionalidad || '';
    document.getElementById('genero').value = datosPaciente.genero || '';
    document.getElementById('estadoCivil').value = datosPaciente.estadoCivil || '';
    document.getElementById('ocupacion').value = datosPaciente.ocupacion || '';
    document.getElementById('domicilio').value = datosPaciente.domicilio || '';
    document.getElementById('codigoPostal').value = datosPaciente.codigoPostal || '';
    document.getElementById('paisDeResidencia').value = datosPaciente.paisDeResidencia || '';
    document.getElementById('correo').value = datosPaciente.correo || '';
    document.getElementById('telefono').value = datosPaciente.telefono || '';
    document.getElementById('medicoCabecera').value = datosPaciente.medicoCabecera || '';
    document.getElementById('OsPrepaga').value = datosPaciente.OsPrepaga || '';
    document.getElementById('planDeOsPrepaga').value = datosPaciente.planDeOsPrepaga || '';
    document.getElementById('NumeroAfiliado').value = datosPaciente.NumeroAfiliado || '';
    document.getElementById('comoLlegoANosotros').value = datosPaciente.comoLlegoANosotros || '';
    document.getElementById('modoDeContacto').value = datosPaciente.modoDeContacto || '';
}

document.addEventListener('DOMContentLoaded', function() {
    const botonCrearPaciente = document.getElementById('crearPaciente');

    botonCrearPaciente.addEventListener('click', function() {
        mostrarFormularioPaciente();
    });

    function mostrarFormularioPaciente() {
        const formularioPaciente = document.getElementById('patient-form');
        formularioPaciente.style.display = 'block';
        
        // Crear botón "Cerrar" solo si no existe
        let botonCerrar = document.getElementById('cerrarFormulario');
        if (!botonCerrar) {
            botonCerrar = document.createElement('button');
            botonCerrar.textContent = 'Cerrar';
            botonCerrar.id = 'cerrarFormulario';
            
            // Añadir event listener para cerrar el formulario al hacer clic en "Cerrar"
            botonCerrar.addEventListener('click', function() {
                formularioPaciente.style.display = 'none';
                // Eliminar el botón "Cerrar" después de cerrar el formulario
                botonCerrar.remove();
            });
            
            // Insertar el botón "Cerrar" al lado del botón "Crear Paciente"
            botonCrearPaciente.insertAdjacentElement('afterend', botonCerrar);
        }
    }
});

// Función para buscar al paciente por DNI
function buscarPacientePorDNI() {
    const dniABuscar = document.getElementById('buscarPorDNI').value.trim();

    // Verificar si el campo de búsqueda está vacío
    if (!dniABuscar) {
        alert("Por favor ingrese un DNI válido.");
        return;
    }

    // Buscar al paciente por su DNI dentro de la lista de pacientes
    const pacienteEncontrado = listaPacientes.find(paciente => paciente.dni === dniABuscar);

    // Verificar si se encontró al paciente
    if (pacienteEncontrado) {
        // Mostrar los detalles del paciente
        alert(`Paciente encontrado:\nNombre: ${pacienteEncontrado.nombre}\nApellido: ${pacienteEncontrado.apellido}\nEdad: ${pacienteEncontrado.edad}`);
    } else {
        // Si no se encuentra, mostrar un mensaje de error
        alert(`No se encontró ningún paciente con el DNI: ${dniABuscar}`);
    }
}




// Función para generar el comprobante
function generarComprobante() {
    // Aquí puedes implementar la lógica para guardar el comprobante generado
    alert('Comprobante generado con éxito');
}

// Función para cerrar la ventana
function cerrarVentana() {
    window.close();
}

//buscar paciente en ventana emergente

document.getElementById('comprobanteAtencion').addEventListener('click', function() {
    const dniABuscar = document.getElementById('buscarPorDNI').value.trim();
    // Abrir la ventana comprobante_atencion.html y pasar el DNI como parámetro
    const ventanaBusqueda = window.open(`comprobante_atencion.html?dni=${dniABuscar}`, '_blank', 'width=600,height=400');
});

// Función para buscar al paciente por DNI
function buscarPacientePorDNI() {
    const dniABuscar = document.getElementById('buscarPorDNI').value.trim();

    // Verificar si el campo de búsqueda está vacío
    if (!dniABuscar) {
        alert("Por favor ingrese un DNI válido.");
        return;
    }

    // Buscar al paciente por su DNI dentro de la lista de pacientes
    const pacienteEncontrado = listaPacientes.find(paciente => paciente.dni === dniABuscar);

    // Verificar si se encontró al paciente
    if (pacienteEncontrado) {
        // Llamar a la función para mostrar los detalles del paciente en el HTML
        mostrarDetallesPaciente(pacienteEncontrado);
    } else {
        // Si no se encuentra, mostrar un mensaje de error
        alert(`No se encontró ningún paciente con el DNI: ${dniABuscar}`);
    }
}

// Función para mostrar los detalles del paciente en el HTML
function mostrarDetallesPaciente(paciente) {
    // Obtener el elemento donde se mostrarán los detalles del paciente
    const pacienteDetails = document.getElementById('patient-details');

    // Limpiar el contenido anterior
    pacienteDetails.innerHTML = '';

    // Crear elementos HTML para cada detalle del paciente y agregarlos al elemento pacienteDetails
    const nombreP = document.createElement('p');
    nombreP.textContent = `Nombre: ${paciente.nombre}`;
    pacienteDetails.appendChild(nombreP);

    const apellidoP = document.createElement('p');
    apellidoP.textContent = `Apellido: ${paciente.apellido}`;
    pacienteDetails.appendChild(apellidoP);

    const fechaNacimientoP = document.createElement('p');
    fechaNacimientoP.textContent = `Fecha de Nacimiento: ${paciente.fechaNacimiento}`;
    pacienteDetails.appendChild(fechaNacimientoP);
}


// Definir una variable para almacenar los datos de los pacientes
let listaPacientes = [];

document.addEventListener('DOMContentLoaded', function() {
    // Hacer una solicitud para cargar los datos de pacientes.json
    fetch('pacientes.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar los pacientes.');
            }
            return response.json();
        }) // Convertir la respuesta a JSON
        .then(data => {
            // Verificar si los datos son un array
            if (Array.isArray(data)) {
                listaPacientes = data; // Si son un array, asignarlos directamente a listaPacientes
            } else {
                throw new Error('Los datos de pacientes.json no están en formato de array.');
            }
        })
        .catch(error => console.error('Error al cargar los pacientes:', error));
});


// Event listener para el submit del formulario de paciente
document.addEventListener('DOMContentLoaded', function() {
    const formPaciente = document.getElementById('patient-form');
    formPaciente.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
        
        // Recolectar los datos del formulario y agregar el paciente a la lista de pacientes
        const paciente = {
            nombre: document.getElementById('nombre').value,
            apellido: document.getElementById('apellido').value,
            documento: document.getElementById('documento').value,
            fechaNacimiento: document.getElementById('fechaNacimiento').value,
            nacionalidad: document.getElementById('nacionalidad').value,
            genero: document.getElementById('genero').value,
            estadoCivil: document.getElementById('estadoCivil').value,
            ocupacion: document.getElementById('ocupacion').value,
            domicilio: document.getElementById('domicilio').value,
            codigoPostal: document.getElementById('codigoPostal').value,
            paisDeResidencia: document.getElementById('paisDeResidencia').value,
            correo: document.getElementById('correo').value,
            telefono: document.getElementById('telefono').value,
            medicoCabecera: document.getElementById('medicoCabecera').value,
            OsPrepaga: document.getElementById('OsPrepaga').value,
            planDeOsPrepaga: document.getElementById('planDeOsPrepaga').value,
            NumeroAfiliado: document.getElementById('NumeroAfiliado').value,
            comoLlegoANosotros: document.getElementById('comoLlegoANosotros').value,
            modoDeContacto: document.getElementById('modoDeContacto').value
        };
        listaPacientes.push(paciente); // Agregar paciente a la lista

        // Guardar la lista de pacientes actualizada en pacientes.json
        guardarPacientesJSON(listaPacientes);

        // Limpiar el formulario después de enviar
        formPaciente.reset();

        // Mostrar un mensaje de éxito o realizar otra acción si es necesario
        alert('Paciente registrado con éxito.');

        // Otras acciones después de registrar al paciente, si es necesario
    });
});

// Función para guardar la lista de pacientes en pacientes.json
function guardarPacientesJSON(pacientes) {
    // Convertir la lista de pacientes a formato JSON
    const pacientesJSON = JSON.stringify(pacientes);

    // Guardar el JSON en pacientes.json (sobreescritura)
    // Aquí puedes hacer una solicitud AJAX para guardar los datos en el servidor
    // Por simplicidad, vamos a usar el método fetch para hacer la solicitud
    fetch('pacientes.json', {
        method: 'PUT', // Método HTTP PUT para sobrescribir el archivo existente
        headers: {
            'Content-Type': 'application/json'
        },
        body: pacientesJSON // El cuerpo de la solicitud es el JSON de pacientes
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo guardar los pacientes.');
        }
        console.log('Pacientes guardados con éxito.');
    })
    .catch(error => console.error('Error al guardar los pacientes:', error));
}


