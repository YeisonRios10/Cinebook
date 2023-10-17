//se define la funcion a utilizar para la carga de peliculas 
const cargarPeliculas = async()   =>  {
    try{
        const respuesta = await fetch ('https://api.themoviedb.org/3/movie/popular?api_key=a36a0107dd6b1ea8569d698315062324') //API con ApiKey
        
        //console.log(respuesta); con esto se muestra la respuesta de la consulta

        if(respuesta.status === 200){ //200 es que está OK la consulta
            const datos = await respuesta.json(); //la respuesta se guarda en la variable datos y se transforma a formato json
             console.log(datos) //para mostrar el resultado de la respuesta del json
            const topFive = 5; // variable para mostrar una parte del array
               
            let peliculasHTML = '';

                for (let i = 0; i < topFive && i < datos.results.length; i++){ // un ciclo for para recorrer el array de results con las pelis
                const pelicula = datos.results[i];
                peliculasHTML += `
                    <div class="destacada">
                        <img class="desta" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                        <span>${pelicula.title}<span>
                    </div>`;
                        
                // console.log("Top de cinco pelis", pelicula.title);
                }
                document.getElementById('destacada').innerHTML = peliculasHTML;
            } else if (respuesta.status === 401) {        
        console.log("no existe la peli")
     }
    }catch(error){  
        console.log('Error', error)
    }
}

cargarPeliculas();

      
      // // Define una función llamada traerDatosAPI que realizará una solicitud a una API.
        // function traerDatosAPI() {
        //     // Utiliza la función fetch para realizar una solicitud GET a la URL de la API.
        //     fetch('https://randomuser.me/api') // API a leer

        //         // La función then() se encarga de manejar la respuesta de la solicitud.
        //         .then(datos => datos.json()) // Convierte los datos de la respuesta a formato JSON y retorna una promesa.

        //         // Cuando se resuelva la promesa anterior, ejecuta esta función de devolución de llamada.
        //         .then(datos => {
        //             // Actualiza el contenido del elemento HTML con el id "contenido".
        //             contenido.innerHTML += `
        //                     <div class="tarjeta">
        //                         <!-- Muestra una imagen obtenida de los datos de la API. -->
        //                         <img src="${datos.results[0].picture.large}"</img><br>
    
        //                         <!-- Muestra el nombre obtenido de los datos de la API. -->
        //                         Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
    
        //                         <!-- Muestra el nombre de usuario obtenido de los datos de la API. -->
        //                         User: ${datos.results[0].login.username}<br>
    
        //                         <!-- Muestra la contraseña obtenida de los datos de la API. -->
        //                         Pass: ${datos.results[0].login.password}<br>
    
        //                         <!-- Muestra la dirección de correo electrónico obtenida de los datos de la API. -->
        //                         ${datos.results[0].email}
        //                     </div>`;
        //         })
        //         // Maneja errores de la solicitud fetch o de la conversión a JSON.
        //         .catch(error => {
        //             console.error('Error al obtener datos de la API:', error);
        //             contenido.innerHTML += `
        //                 <div class="tarjeta">
        //                     <!-- Muestra el mensaje de error -->
        //                     Error inesperado:<br>

        //                     <!-- Muestra el error devuelto -->
        //                     Error: ${error}
        //                 </div>`;
        //         });
        // }
    /* ==============S E S I O N ========================================  */
    function validarFormulario2(e) {
        e.preventDefault();
    
        let correo = document.getElementById('correo').value;
        let contrasenia = document.getElementById('contrasenia').value;
        let fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    
        let validarCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        let validarContrasenia = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}/;
    
        let errorText = "";
    
        if (correo === "") {
            errorText += 'El campo Correo es obligatorio\n';
        } else if (!validarCorreo.test(correo)) {
            errorText += 'El campo Correo no tiene un formato válido\n';
        }
    
        if (contrasenia === "") {
            errorText += 'El campo Contraseña es obligatorio\n';
        } else if (!validarContrasenia.test(contrasenia)) {
            errorText += 'La contraseña debe tener al menos 8 caracteres, con al menos un dígito, una mayúscula, una minúscula y un carácter especial.\n';
        }
    
        if (fechaNacimiento === "") {
            errorText += 'El campo Fecha de nacimiento es obligatorio\n';
        } else {
            let fechaNac = new Date(fechaNacimiento);
            let hoy = new Date();
            let edad = hoy.getFullYear() - fechaNac.getFullYear();
    
            if (edad < 18) {
                errorText += 'Debes ser mayor de 18 años para registrarte.\n';
            }
        }
    
        if (errorText !== "") {
            alert(errorText);
            return false;
        } else {
            alert('Su login fue exitoso.');
            document.getElementById('correo').value = "";
            document.getElementById('contrasenia').value = "";
            document.getElementById('fecha-nacimiento').value = "";
            return false;
        }
      }