document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        // Prevenir el comportamiento predeterminado de enviar el formulario
        event.preventDefault();

        // Obtener los valores de nombre de usuario y contraseña
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificar si el usuario y la contraseña son válidos en la base de datos de usuarios
        if (usersDatabase.hasOwnProperty(username) && usersDatabase[username].password === password) {
            // Iniciar sesión exitosa, redireccionar a la página correspondiente
            const role = usersDatabase[username].role;
            if (role === 'medico') {
                window.location.href = 'medico.html';
            } else if (role === 'recepcionista') {
                window.location.href = 'recepcionista.html';
            }
        } else {
            // Mostrar mensaje de error si las credenciales son incorrectas
            document.getElementById('message').textContent = 'Nombre de usuario o contraseña incorrectos';
        }
    });
});

// Base de datos de usuarios
const usersDatabase = {
    'medico1': { password: 'Password1', role: 'medico' },
    'recepcionista1': { password: 'password1', role: 'recepcionista' }, 
};
