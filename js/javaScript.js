/* === esta  primera línea del documneto garantiza que todos los elemntos del html esten cargados en el DOM   */
document.addEventListener('DOMContentLoaded', function() {

    /* ==============M E N U   H A M B U R G U E S A ========================================  */
        const hamburger = document.getElementById('hamburger'); //rescato los id de los menu del html
        const menu      = document.getElementById('menu');
    
        hamburger.addEventListener('click', ()=>{ //al menu hamburguesa al hacer click le agrego o le quito la clase para mostrar el menu
             menu.classList.toggle('hamburger-show');
            });
    /* ==============P O P U P ========================================  */
            const title = document.getElementById('title');
            const popup = document.getElementById('popup');
            
            title.addEventListener('mouseover', () => {
                popup.style.display = 'block';
            });
            
            title.addEventListener('mouseout', () => {
                popup.style.display = 'none';
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
    
    });
    
    /* ==============B O T O N   S C R O L L ========================================  */
    // Obtén el botón de scroll
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    
    // Agrega un evento al botón para detectar cuando se hace clic
    scrollToTopBtn.addEventListener("click", () => {
      // Desplázate al inicio de la página suavemente
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
    
    // Muestra u oculta el botón según la posición del scroll
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
    
    
    
    
    /* esto cierra la funcion del DOM*/