// Variables
const mvvButton = document.querySelector('.mvv__buttons');
const infoMvv = document.querySelector('#mvv__info')

// Eventos
mvvButton.addEventListener('click', cambiarInfoMvv);

// Funciones
function cambiarInfoMvv(e){
    e.preventDefault();
    if(!e.target.classList.contains('mvv__button')){
        return;
    }
    const btnActivo = document.querySelector('.mvv__button--active');
    if(btnActivo){
         btnActivo.classList.remove('mvv__button--active');
    }
    e.target.classList.add('mvv__button--active');
    

    const idBoton = e.target.id;
    const secciones = infoMvv.querySelectorAll('.mvv__text');

    secciones.forEach(seccion => {
        seccion.classList.remove('mvv__text--active');

        if(seccion.getAttribute('data-id') === idBoton){
            seccion.classList.add('mvv__text--active');
        }
    });
}
