// Variables
const mvvButton = document.querySelector('.section-mvv-buttons');
const infoMvv = document.querySelector('#info-mvv')

// Eventos
mvvButton.addEventListener('click', cambiarInfoMvv);

// Funciones
function cambiarInfoMvv(e){
    e.preventDefault();
    if (!e.target.classList.contains('mvv-buttons')) {
        return;
    }
    if(e.target.classList.contains('mvv-buttons')){
        const btnActivo = document.querySelector('.mvv-buttons--active');
        if(btnActivo){
            btnActivo.classList.remove('mvv-buttons--active');
        }
        e.target.classList.add('mvv-buttons--active');
    }else{

    }

    const idBoton = e.target.id;
    const secciones = infoMvv.querySelectorAll('.seccion-mvv');

    secciones.forEach(seccion => {
        seccion.classList.remove('seccion-mvv--active');

        if (seccion.getAttribute('data-id') === idBoton) {
            seccion.classList.add('seccion-mvv--active');
        }
    });
}
