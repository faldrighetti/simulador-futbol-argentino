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

//1 cambiar nombre de crearVisitantes() a crearListaDeEquipos()
//2 Hacer un forEach para crear los cuadros con los clubes. Tienen que ser todos un button con su clase asignada
// en el nivel y id nombredelclub
//3 No olvidar que se hace con los .value 
//4 Hacer objetos: Nombre del club = club.nombre, nivel = club.nivel, con los backticks
//5 Crear objeto vacío para cada club que va a jugar :local.nombre = club.nombre, visitante.nombre = club.nombre
//También puedo hacerlo con una lista de keys. Se hace una lista y se elimina al local para elegir al visitante.
//6 Usar flex para ponerlos dentro de un cuadro y alinearlos.
//7 Hacer que el club elegido se ponga en cierto color y un texto abajo.
//8 Hacer que el local no se pueda hacer sin elegir un club primero.
//9 Hacer que las dimensiones los divs donde están los equipos se ajusten a la cantidad de clubes

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
