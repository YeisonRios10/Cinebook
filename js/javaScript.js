/* === esta  primera línea del documneto garantiza que todos los elemntos del html esten cargados en el DOM   */
document.addEventListener('DOMContentLoaded', function() {

/* ==============M E N U   H A M B U R G U E S A ========================================  */
    const hamburger = document.getElementById('hamburger'); //rescato los id de los menu del html
    const menu      = document.getElementById('menu');

    hamburger.addEventListener('click', ()=>{ //al menu hamburguesa al hacer click le agrego o le quito la clase para mostrar el menu
         menu.classList.toggle('hamburger-show');
        });




     
/* ==============C  A  R  R  U  S  E  L ========================================  */
    const grande = document.querySelector('.grande');
    const punto  = document.querySelectorAll('.punto');

    /*asignar click a los puntos
        //identificar la posicion
        //aplicar el transform
        //quitar la clase activo 
        //aplicar la clase activo*/
    
        punto.forEach((cadaPunto, i) => {
            punto[i].addEventListener('click', ()=>{

                let posicion = i 
                let operacion = posicion * -33;

                grande.style.transform = `translateX(${ operacion }%)`;

                punto.forEach( (cadaPunto, i)=>{
                    punto[i].classList.remove('activo')
            })
            punto[i].classList.add('activo')
        })
    })

})




/* esto cierra la funcion del DOM*/

/* ==============L O G I C A     C O N T A C T O ========================================  */

function validarFormulario(){
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("mensaje").value

    let validarCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(correo)
    let validarNombre = /^[a-zA-Z]*$/.test(nombre);

   

    if (nombre === "" && correo === "" && mensaje === "") {
        alert("Por favor, complete todos los campos");
        
        return false;
    }
    if (nombre === "" ) {
        alert("Por favor, complete el campo nombre");
        document.getElementById("nombre").focus()
        return false;
    }
    if(!validarNombre){
        alert("Por favor complete bien el campo NOMBRE")
        document.getElementById("nombre").focus()
        return false
    }

    if (correo === "") {
        alert("Por favor, complete el campo correo");
        document.getElementById("correo").focus()
        return false;
    }

    if(!validarCorreo){
        alert("Por favor complete bien el campo CORREO")
        document.getElementById("correo").focus()
        return false
     }

    if (mensaje === "") {
        alert("Por favor, complete el campo mensaje");
        document.getElementById("mensaje").focus()
        return false;
    }
    return enviarAlerta();
    
}

function enviarAlerta(){
    alert("Gracias x contactarnos, en breve te responderemos")
    location.href = "../index.html"
}

//* Api MovieDb

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTM3YTkzMzYyMDBmNjFkN2Y2OTU1NDY3M2VmNjg0OCIsInN1YiI6IjY1MmIzYjFjMGNiMzM1MTZmZDQ5YjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jJ4L_mZesC8wfIBOYE2Zif-qmIvMeaqJ-OtWxi37Tuc'
    }
  };
  

  //la id 12155, es la pelicula alicia en el pais de las maravillas, esto seria la imagen
 
 //imagen de inicio
  fetch('https://api.themoviedb.org/3/movie/12155/images', options)
  .then(movieData => {
    const baseUrl = "https://image.tmdb.org/t/p/original/4U9hkIXymZugDWfixlR7dh57g2G.jpg"
    const imagen= document.querySelector('.tarjeta img');  
    imagen.src = baseUrl;  
  })

//imagen de pelicula_alicia
  fetch('https://api.themoviedb.org/3/movie/12155/images', options)
  .then(movieData => {
    const baseUrl = "https://image.tmdb.org/t/p/original/4U9hkIXymZugDWfixlR7dh57g2G.jpg"
    const imagenPortada = document.querySelector('#slide-alicia');
    imagenPortada.src = baseUrl 
  })


  


  
   
// esto seria la descripcion y los videos

fetch('https://api.themoviedb.org/3/movie/12155?language=es', options)
.then(response => response.json())
.then(movieData => {
    const descripcion = movieData.overview
    const año_de_lanzamiento = movieData.release_date
    const duracion = movieData.runtime
    const tituloOriginal = movieData.original_title
    const generos = movieData.genres
    document.querySelector("#titulo_original").innerHTML = tituloOriginal
    document.querySelector("#descripcion").innerHTML = descripcion
    document.querySelector("#año_de_lanzamiento").innerHTML = año_de_lanzamiento
    document.querySelector("#duracion").innerHTML = duracion

    const listaGeneros = generos.map(generos => generos.name).join(",")
  
    document.querySelector("#generos").innerHTML = listaGeneros


})
.catch(err => console.error(err));



  


  //esto me permite conseguir la lista de array q se llama backdrops y me trae todas las portadas q hay de alicia 

  fetch('https://api.themoviedb.org/3/movie/12155/images', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));



  fetch('https://api.themoviedb.org/3/movie/12155?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));


  