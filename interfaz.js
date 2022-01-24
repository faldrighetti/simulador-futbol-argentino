const $botonElegirLocal = document.querySelector('#boton-seleccionar-local')

const $botonElegirVisitante = document.querySelector('#boton-seleccionar-visitante')

const $botonJugar = document.querySelector('#boton-jugar-partido')

const infoVisitante = document.querySelector('#visitante')

const $botonResetear = document.querySelector('#resetear')

const listaDeVisitantes = []

for (let i = 0; i < $formEquipo1.equipo.length; i++){
    if ($formEquipo1.equipo[i].value){
    listaDeVisitantes.push($formEquipo1.equipo[i].value)}
}

console.log(listaDeVisitantes)

function borrarEquipo(){
    for (let i = 0; i < listaDeVisitantes.length; i++){
        if (listaDeVisitantes[i] === equipoSeleccionado1){
            listaDeVisitantes.pop(listaDeVisitantes[i])
        }
    }
}

$botonElegirLocal.onclick = function(){
    equipo1.equipo = $formEquipo1.equipo.value
    equipoSeleccionado1 = equipo1.equipo
    infoVisitante.className = ''
    borrarEquipo()
    return false;
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
