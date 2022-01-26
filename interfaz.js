const $botonElegirLocal = document.querySelector('#boton-seleccionar-local')

const $botonElegirVisitante = document.querySelector('#boton-seleccionar-visitante')

const $botonJugar = document.querySelector('#boton-jugar-partido')

const infoVisitante = document.querySelector('#visitante')

const $botonResetear = document.querySelector('#resetear')

const todosLosClubes = document.querySelectorAll('option')
const visitantes = document.querySelector('#lista-de-visitantes')

const nivelPotencia = ['River Plate', 'Boca Juniors']
const nivelSuperior = ['Independiente', 'Racing', 'San Lorenzo', 'Colón', 'Defensa y Justicia', 'Estudiantes LP', 'Lanús', 'Talleres', 'Vélez']
const nivelNormal = ['Argentinos Juniors', 'Arsenal', 'Atlético Tucumán', 'Banfield', 'Gimnasia LP', 'Godoy Cruz', 'Huracán', "Newell's", 'Rosario Central', 'Unión']
const nivelInferior = ['Aldosivi','Barracas Central', 'Central Córdoba', 'Patronato', 'Platense', 'Sarmiento', 'Tigre']

$botonElegirLocal.onclick = function(){
    equipo1.equipo = $formEquipo1.equipo.value
    equipoSeleccionado1 = equipo1.equipo
    infoVisitante.className = ''
    crearVisitantes()
    $botonResetear.className = ''
    
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
    equipoSeleccionado2 = equipo2.equipo
    $botonJugar.className = ''
    return false;
}

$botonJugar.onclick = function(){
    jugar()
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload()
}