// Obtener JSON de JSONPlaceholder usando fetch con async/await
async function obtenerDatosAsync() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        
        const data = await respuesta.json();
        console.log("Resultado con Async/Await:");
        console.log(data);
    } catch (error) {
        console.error("Error obteniendo los datos:", error);
    }
}

// Ejecutar la función
obtenerDatosAsync();