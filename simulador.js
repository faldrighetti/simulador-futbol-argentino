const chancesPotencia = 11
const chancesSuperior = 9
const chancesNormal = 7
const chancesInferior = 5
const carasDelDado = 6

const $formEquipo1 = document.querySelector('#equipo-1')
const $formEquipo2 = document.querySelector('#equipo-2')
const resultado = document.querySelector('#resultado')

let equipoSeleccionado1 = ''
let equipoSeleccionado2 = ''

function dado(){
   return Math.floor(Math.random() * carasDelDado) + 1; // dado 1-6
}

function obtenerGolesPotencia(){
    let totalGoles = []
    for (let i = 0; i < chancesPotencia; i++){
        let chance = dado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }
    return totalGoles.length
}

function obtenerGolesSuperior(){
    let totalGoles = []
    for (let i = 0; i < chancesSuperior; i++){
        let chance = dado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }
    return totalGoles.length
}
 
function obtenerGolesNormal(){
    let totalGoles = []
    for (let i = 0; i < chancesNormal; i++){
        let chance = dado()
        if (chance === 1){
            totalGoles.push('gol') 
        }
    }
    return totalGoles.length
}
 
function obtenerGolesInferior(){
     let totalGoles = []
     for (let i = 0; i < chancesInferior; i++){
        let chance = dado()
        if (chance === 1){
            totalGoles.push('gol')
        }
     }
     return totalGoles.length
}

const equipo1 = {
    equipo: equipoSeleccionado1,
    goles: obtenerGolesEquipo1()
}

const equipo2 = {
    equipo: equipoSeleccionado2,
    goles: obtenerGolesEquipo2()
}

function obtenerGolesEquipo1(){

    if (equipoSeleccionado1.className === 'potencia'){
        return obtenerGolesPotencia()
    }
    else if (equipoSeleccionado1.className === 'superior'){
        return obtenerGolesSuperior()
    }
    else if (equipoSeleccionado1.className === 'normal'){
        return obtenerGolesNormal()
    }
    else {
        return obtenerGolesInferior()
    }
}

function obtenerGolesEquipo2(){
    
    if (equipoSeleccionado2.className === 'potencia'){
        return obtenerGolesPotencia()
    }
    else if (equipoSeleccionado2.className === 'superior'){
        return obtenerGolesSuperior()
    }
    else if (equipoSeleccionado2.className === 'normal'){
        return obtenerGolesNormal()
    }
    else{
        return obtenerGolesInferior()
    }
}

function jugar(){

    if (equipo1.goles > equipo2.goles) {
        resultado.innerText = equipo1.equipo + " le ganó " + equipo1.goles + '-' + equipo2.goles + ' a ' + equipo2.equipo + '.'
    }
    else if ((equipo2.goles > equipo1.goles)){
        resultado.innerText = equipo2.equipo + " le ganó " + equipo2.goles + '-' + equipo1.goles + ' a ' + equipo1.equipo + '.'
    }
    else{
        if (equipo2.equipo === 'Independiente'){
            resultado.innerText = equipo1.equipo + " e " + equipo2.equipo + ' empataron ' + equipo1.goles + '-' + equipo2.goles + '.'
        } else {
        resultado.innerText = equipo1.equipo + " y " + equipo2.equipo + ' empataron ' + equipo1.goles + '-' + equipo2.goles + '.'}
    }
}

//TODO:

//1- Entra al if sin distinguir las clases de cada equipo, por lo que juzga a todos como inferior. Arreglar eso.
//X2- Reemplazar los console.log del resultado por un cuadro de texto en appendChild.
//X3- Botón resetear. Línea 33 de interfaz, darle una función para que se recargue la página.
//4- Botón jugar, darle una función que lo deshabilite cuando se le da clic. Es decir, que solo se pueda usar una vez.
//5- Pruebas, que mandar a jugar sin elegir club dé error. O mejor, que se marque en rojo el campo si no se eligió nada.
//X6- Que cuando se elija un local, se elimine de la lista de visitantes. Impedir un River vs River.
//7- Hacer un CSS bonito.
//8- Agregar div al elegir el equipo. Por ejemplo: "Local: River", y abajo "Visitante: Boca" ya antes de cliquear Jugar
//X9- Corregir el "River y Independiente empataron 1-1", cuando Independiente es visitante.
