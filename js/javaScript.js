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