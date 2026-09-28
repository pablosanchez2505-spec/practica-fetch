// Función que realiza el fetch y ejecuta un callback pasando los datos o el error
function obtenerDatosCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(respuesta) {
            if (!respuesta.ok) {
                throw new Error('Error HTTP: ' + respuesta.status);
            }
            return respuesta.json();
        })
        .then(function(data) {
            callback(null, data); // Éxito: pasa null en el error y los datos como segundo argumento
        })
        .catch(function(error) {
            callback(error, null); // Error: pasa el error
        });
}

// Uso del callback clásico
obtenerDatosCallback(function(err, resultado) {
    if (err) {
        console.error("Error con Callback:", err);
    } else {
        console.log("Resultado con Callback clásico:");
        console.log(resultado);
    }
});