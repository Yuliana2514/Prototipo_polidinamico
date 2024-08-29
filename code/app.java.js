/*// Importa el módulo HTTP
const http = require('http');

// Datos que quieres mostrar (similar a ls_datos)
const ls_datos = ["Dato 1", "Dato 2", "Dato 3"];

// Función para manejar las solicitudes
const requestHandler = (req, res) => {
    // Verifica la ruta
    if (req.url === '/mostrar' && req.method === 'GET') {
        // Configura el encabezado de la respuesta como JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // Convierte ls_datos a JSON y lo envía como respuesta
        res.end(JSON.stringify({ ls_datos }));
    } else {
        // Si la ruta no es /mostrar, devuelve 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Página no encontrada');
    }
};

// Crea el servidor
const server = http.createServer(requestHandler);

// Inicia el servidor en 127.0.0.1:5000
server.listen(5000, '127.0.0.1', () => {
    console.log('Servidor ejecutándose en http://127.0.0.1:5000');
});
*/

document.getElementById('options').addEventListener('change', function() {
    const value = this.value;
    const content = document.getElementById('content');
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const nextButton = document.getElementById('next-button');

    // Define las opciones y las acciones
    const options = {
        docentes: 'Docentes',
        empleados: 'Empleados',
        estudiantes: 'Estudiantes',
        inscripcion: 'Inscripción para aspirantes a docentes cátedra',
        clave: 'Recordar clave de acceso',
        servicios: 'Solicitud servicios informáticos',
        correo: 'Solución problemas correo institucional',
    };

    if (value) {
        // Actualiza el contenido con la opción seleccionada
        title.textContent = options[value];
        description.textContent = `Aquí puedes gestionar ${options[value]}.`;

        // Muestra el contenido y el botón "Siguiente"
        content.classList.remove('hidden');
        nextButton.classList.remove('hidden');
    } else {
        // Oculta el contenido y el botón "Siguiente" si no se selecciona ninguna opción
        content.classList.add('hidden');
        nextButton.classList.add('hidden');
    }
});

document.getElementById('next-button').addEventListener('click', function() {
    // Redirige a la nueva página
    window.location.href = 'nueva_pagina.html'; // Cambia 'nueva_pagina.html' por la URL de la página de destino
});
