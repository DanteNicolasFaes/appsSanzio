// Función para agregar un nuevo paciente a la base de datos
function agregarPaciente(nuevoPaciente) {
    // Obtener la lista de pacientes existentes del localStorage o inicializarla si está vacía
    let listaPacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    
    // Agregar el nuevo paciente a la lista
    listaPacientes.push(nuevoPaciente);
    
    // Guardar la lista actualizada en el localStorage
    localStorage.setItem('pacientes', JSON.stringify(listaPacientes));
  }
  
  // Función para obtener la lista de pacientes de la base de datos
  function obtenerListaPacientes() {
    // Obtener la lista de pacientes del localStorage
    return JSON.parse(localStorage.getItem('pacientes')) || [];
  }
  