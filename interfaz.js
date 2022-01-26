const $botonElegirLocal = document.querySelector('#boton-seleccionar-local')

const $botonElegirVisitante = document.querySelector('#boton-seleccionar-visitante')

const $botonJugar = document.querySelector('#boton-jugar-partido')

const infoVisitante = document.querySelector('#visitante')

const $botonResetear = document.querySelector('#resetear')

const todosLosClubes = document.querySelectorAll('option')
const visitantes = document.querySelector('#lista-de-visitantes')

console.log(todosLosClubes[20].value)

$botonElegirLocal.onclick = function(){
    equipo1.equipo = $formEquipo1.equipo.value
    equipoSeleccionado1 = equipo1.equipo
    infoVisitante.className = ''
    borrarEquipo()
    return false;
}

function borrarEquipo(){
    for (let i = 0; i < todosLosClubes.length; i++){
        if (todosLosClubes[i].value !== equipo1.equipo && todosLosClubes[i].value !== ''){
            let nuevaOpcion = document.createElement('option')
            nuevaOpcion.appendChild(todosLosClubes[i]);
            visitantes.appendChild(nuevaOpcion);
        }
    }
}

$botonElegirVisitante.onclick = function(){
    equipo2.equipo = $formEquipo2.equipo.value
    equipoSeleccionado2 = equipo2.equipo
    $botonJugar.className = ''
    return false;
}

$botonJugar.onclick = function(){
    jugar()
    $botonResetear.className = ''
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload()
}
