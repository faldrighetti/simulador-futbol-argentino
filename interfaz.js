const errorLocal = document.querySelector('#error-local')

const $botonElegirLocal = document.querySelector('#boton-seleccionar-local')

const $botonElegirVisitante = document.querySelector('#boton-seleccionar-visitante')

const $botonJugar = document.querySelector('#boton-jugar-partido')

const equipoLocal = document.querySelector('#equipo-local')
const equipoVisitante = document.querySelector('#equipo-visitante')

const infoVisitante = document.querySelector('#visitante')

const $botonResetear = document.querySelector('#resetear')

const todosLosClubes = document.querySelectorAll('option')
const visitantes = document.querySelector('#lista-de-visitantes')

function mostrarError(){
    $formEquipo1.equipo.className = 'error'    
    errorLocal.textContent = '¡Tenés que elegir un equipo!'
}

$botonElegirLocal.onclick = function(){
    equipo1.equipo = $formEquipo1.equipo.value
    if (equipo1.equipo === ''){
        mostrarError()
    }
    else{
        errorLocal.textContent = ''
        $formEquipo1.equipo.className = ''
        infoVisitante.className = ''
        equipoLocal.textContent = 'Local: ' + equipo1.equipo
        crearVisitantes()
    }
    
    return false;
}

function crearVisitantes(){
    for (let i = 0; i < todosLosClubes.length; i++){
        if (todosLosClubes[i].value !== equipo1.equipo && todosLosClubes[i].value !== ''){
            let nuevaOpcion = document.createElement('option') //no tiene clase, se tiene que asignar
            nuevaOpcion.appendChild(todosLosClubes[i])
            visitantes.appendChild(nuevaOpcion);

            for (let j = 0; j < nivelPotencia.length; j++){
                if (nivelPotencia[j] === todosLosClubes[i].value){
                    nuevaOpcion.className = 'potencia'
                }   
            }

            for(let k = 0; k < nivelSuperior.length; k++){
                if(nivelSuperior[k] === todosLosClubes[i].value){
                    nuevaOpcion.className = 'superior'
                }
            }

            for(let l = 0; l < nivelNormal.length; l++){
                if(nivelNormal[l] === todosLosClubes[i].value){
                    nuevaOpcion.className = 'normal'
                }
            }

            for(let m = 0; m < nivelInferior.length; m++){
                if(nivelInferior[m] === todosLosClubes[i].value){
                    nuevaOpcion.className = 'inferior'
                }
            }
        }
    }   
}

$botonElegirVisitante.onclick = function(){
    equipo2.equipo = $formEquipo2.equipo.value
    equipoVisitante.textContent = 'Visitante: ' + equipo2.equipo
    $botonJugar.className = 'jugar'
    return false;
}

$botonJugar.onclick = function(){
    jugar()
    $botonJugar.className = 'oculto'
    $botonResetear.className = 'resetear'
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload()
}