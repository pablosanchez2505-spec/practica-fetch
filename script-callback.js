
function obtenerDatosCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(respuesta) {
            if (!respuesta.ok) {
                throw new Error('Error HTTP: ' + respuesta.status);
            }
            return respuesta.json();
        })
        .then(function(data) {
            callback(null, data); 
        })
        .catch(function(error) {
            callback(error, null); 
        });
}


obtenerDatosCallback(function(err, resultado) {
    if (err) {
        console.error("Error con Callback:", err);
    } else {
        console.log("Resultado con Callback clásico:");
        console.log(resultado);
    }
});