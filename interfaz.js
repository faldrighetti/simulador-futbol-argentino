const errorLocal = document.querySelector('#error-local')

const $botonJugar = document.querySelector('#boton-jugar-partido')
const $botonResetear = document.querySelector('#resetear')

const localDiv = document.querySelector('#equipo-1')
const visitanteDiv = document.querySelector('#equipo-2')

function mostrarError(){
    $formEquipo1.equipo.className = 'error'    
    errorLocal.textContent = '¡Tenés que elegir un equipo!'
}

function asignarClaseNivel(equipo){

    if(nivelPotencia.includes(equipo.innerText)) {
        equipo.className = 'equipo-potencia';
    }
    else if (nivelSuperior.includes(equipo.innerText)){
        equipo.className = 'equipo-superior';
    }
    else if (nivelNormal.includes(equipo.innerText)){
        equipo.className = 'equipo-normal';
    }
    else if (nivelInferior.includes(equipo.innerText)){
        equipo.className = 'equipo-inferior';
    }
}


function crearCuadros(){
    let clubes = asignarEquipos();
    let llaves = Object.keys(clubes);

    for(let i = 0; i < llaves.length; i++){
        let clave = llaves[i]
    }
    
    llaves.forEach(function(elemento){
        const cuadro = document.createElement('button');
        cuadro.innerText = elemento;
        asignarClaseNivel(cuadro)
        localDiv.appendChild(cuadro); 
    })

    llaves.forEach(function(elemento){
        const cuadro = document.createElement('button');
        cuadro.innerText = elemento;
        asignarClaseNivel(cuadro)
        visitanteDiv.appendChild(cuadro) 
    })
}

crearCuadros()

//✔ 1 Cambiar nombre de crearListaDeEquipos() a crearListaDeEquipos()
//2 Hacer un forEach para crear los cuadros con los clubes. Tienen que ser todos un button con su clase asignada
//  en el nivel y id nombredelclub. No olvidar que se hace con los .value 
//✔ 3 Hacer objetos: Nombre del club = club.nombre, nivel = club.nivel, con los backticks
//✔ 4 Crear objeto vacío para cada club que va a jugar :local.nombre = club.nombre, visitante.nombre = club.nombre
//  También puedo hacerlo con una lista de keys. Se hace una lista y se elimina al local para elegir al visitante.
//5 ✔Usar flex para ponerlos dentro de un cuadro y alinearlos.
//6 Hacer que el club elegido se ponga en cierto color y un texto abajo. Y al hacer clic en otro, se borre el que ya está.
//7 Hacer error que diga que el local no se pueda hacer sin elegir un club primero.
//8 Hacer que las dimensiones de los divs donde están los equipos se ajusten a la cantidad de clubes
//9 HACER RESPONSIVE

/*$botonElegirVisitante.onclick = function(){
    equipo2.equipo = $formEquipo2.equipo.value
    equipoVisitante.textContent = 'Visitante: ' + equipo2.equipo
    $botonJugar.className = 'jugar'
    return false;
}*/

$botonJugar.onclick = function(){
    jugar()
    $botonJugar.className = 'oculto'
    $botonResetear.className = 'resetear'
    return false;
}

$botonResetear.onclick = function(){
    window.location.reload()
}
